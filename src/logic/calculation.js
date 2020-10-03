import { operation } from './operation';

export function calculation({ dataType, value }, state, setState) {
  const printNumber = () => {
    if (state.screenValue === 'Error') return;
    let valueToAdd = value;
    /** Add decimal, prevent multiple decimals */
    if (value === '.') {
      if (state.screenValue.indexOf('.') !== -1) return;
      if (!state.screenValue) valueToAdd = '0.';
    }
    /** Save first value and start next value if operation was pressed */
    if (state.lastClicked.dataType === 'operation') {
      /** Negate value if minus was pressed after first operation */
      if (state.negate) {
        valueToAdd = -valueToAdd;
      }
      setState({
        ...state,
        screenValue: valueToAdd.toString(),
        memValue: state.screenValue,
        lastClicked: { dataType, value },
        negate: false,
      });
      return;
    }
    /** New calculation if equals was pressed */
    if (state.lastClicked.dataType === 'equals') {
      setState({
        screenValue: valueToAdd.toString(),
        operator: '',
        memValue: '',
        tempValue: '',
        lastClicked: { dataType, value },
        negate: false,
      });
      return;
    }
    /** Update state with number */
    setState({
      ...state,
      screenValue: (state.screenValue += valueToAdd),
      lastClicked: { dataType, value },
    });
  };

  const addOperator = () => {
    if (state.screenValue === 'Error') return;
    /** Set temporary state for negation */
    if (state.lastClicked.dataType === 'operation' && value === 'SUBTRACT') {
      setState({ ...state, negate: true });
      return;
    }
    setState({
      ...state,
      operator: value,
      tempValue: '',
      lastClicked: { dataType, value },
    });
  };

  const calculate = () => {
    /** Set temporary value for multiple equals pressing */
    const result = operation(
      state.memValue,
      state.operator,
      state.tempValue || state.screenValue
    );
    setState({
      ...state,
      screenValue: result,
      memValue: result,
      tempValue: state.tempValue || state.screenValue,
      lastClicked: { dataType, value },
    });
  };

  const clear = () => {
    setState({
      screenValue: '',
      operator: '',
      memValue: '',
      tempValue: '',
      lastClicked: {},
      negate: false,
    });
  };

  if (dataType === 'number') {
    printNumber();
  } else if (dataType === 'operation') {
    addOperator();
  } else if (dataType === 'clear') {
    clear();
  } else if (dataType === 'equals' && state.memValue) {
    calculate();
  }
}

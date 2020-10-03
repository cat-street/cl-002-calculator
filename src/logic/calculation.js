import { operation, advanced } from './operation';

export function calculation({ dataType, value }, state, setState) {
  /** Temporary variable for calculations */
  let result = null;

  const printNumber = () => {
    if (state.screenValue === 'Error') return;
    let valueToAdd = value.toString();
    /** Forbid multiple leading zeroes */
    if (state.screenValue === '0' && valueToAdd === '0') return;
    /** Add decimal, prevent multiple decimals */
    if (value === '.') {
      if (state.screenValue.indexOf('.') !== -1) return;
      /** Add 0 before . if starting or continuing calculation */
      if (!state.screenValue || state.lastClicked === 'operation') valueToAdd = '0.';
    }
    /** Save first value and start next value if operation was pressed */
    if (state.lastClicked === 'operation') {
      /** Negate value if minus was pressed after first operation */
      if (state.negate) {
        valueToAdd = -valueToAdd;
      }
      setState({
        ...state,
        screenValue: valueToAdd.toString(),
        memValue: state.screenValue,
        lastClicked: dataType,
        negate: false,
      });
      return;
    }
    /** New calculation if equals was pressed */
    if (state.lastClicked === 'equals') {
      setState({
        screenValue: valueToAdd.toString(),
        operator: '',
        memValue: '',
        tempValue: '',
        lastClicked: dataType,
        negate: false,
      });
      return;
    }
    /** Update state with number */
    setState({
      ...state,
      screenValue: (state.screenValue += valueToAdd),
      lastClicked: dataType,
    });
  };

  const addOperator = () => {
    if (state.screenValue === 'Error') return;
    /** Chain operations */
    if (state.lastClicked === 'number' && state.memValue) {
      const result = calculate();
      setState({
        ...state,
        screenValue: result,
        operator: value,
        memValue: result,
        tempValue: '',
        lastClicked: dataType,
      });
      return;
    }
    /** Set temporary state for negation */
    if (state.lastClicked === 'operation' && value === 'SUBTRACT') {
      setState({ ...state, negate: true });
      return;
    }
    setState({
      ...state,
      operator: value,
      tempValue: '',
      lastClicked: dataType,
      negate: false,
    });
  };

  const advancedOperation = () => {
    if (state.screenValue === 'Error') return;
    /** Disable backspace if calculation in progress */
    if (state.lastClicked === 'operation' && value === 'BACKSPACE')
      return;
    result = advanced(state.screenValue, value);
    setState({
      ...state,
      screenValue: result,
      lastClicked: dataType,
    });
  };

  const calculate = () => {
    /** Set temporary value for multiple equals pressing */
    return operation(
      state.memValue,
      state.operator,
      state.tempValue || state.screenValue
    );
  };

  const calculateHandler = () => {
    if (state.screenValue === 'Error') return;
    result = calculate();
    setState({
      ...state,
      screenValue: result,
      memValue: result,
      tempValue: state.tempValue || state.screenValue,
      lastClicked: dataType,
    });
  };

  const clear = () => {
    setState({
      screenValue: '',
      operator: '',
      memValue: '',
      tempValue: '',
      lastClicked: '',
      negate: false,
    });
  };

  /**
   * TODO: Memory functions
   */
  if (dataType === 'number') {
    printNumber();
  } else if (dataType === 'operation') {
    addOperator();
  } else if (dataType === 'advanced') {
    advancedOperation();
  } else if (dataType === 'equals' && state.memValue) {
    calculateHandler();
  } else if (dataType === 'clear') {
    clear();
  }
}

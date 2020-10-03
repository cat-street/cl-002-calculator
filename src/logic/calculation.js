import { operation, advanced, memory } from './operation';

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
      if (
        state.screenValue.indexOf('.') !== -1 &&
        state.lastClicked.dataType !== 'operation'
      )
        return;
      /** Add 0 before . if starting or continuing calculation */
      if (!state.screenValue || state.lastClicked.dataType === 'operation')
        valueToAdd = '0.';
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
    /** New calculation if equals or memory was pressed */
    if (
      state.lastClicked.dataType === 'equals' ||
      state.lastClicked.dataType === 'memory'
    ) {
      setState({
        ...state,
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
    /** Chain operations */
    if (state.lastClicked.dataType === 'number' && state.memValue) {
      const result = calculate();
      setState({
        ...state,
        screenValue: result,
        operator: value,
        memValue: result,
        tempValue: '',
        lastClicked: { dataType, value },
      });
      return;
    }
    /** Set temporary state for negation */
    if (state.lastClicked.dataType === 'operation' && value === 'SUBTRACT') {
      setState({ ...state, negate: true });
      return;
    }
    setState({
      ...state,
      screenValue: state.screenValue || '0',
      operator: value,
      tempValue: '',
      lastClicked: { dataType, value },
      negate: false,
    });
  };

  const advancedOperation = () => {
    if (state.screenValue === 'Error') return;
    /** Disable backspace if calculation in progress */
    if (
      (state.lastClicked.dataType === 'operation' || !state.screenValue) &&
      value === 'BACKSPACE'
    )
      return;
    result = advanced(state.screenValue, value);
    setState({
      ...state,
      screenValue: result,
      lastClicked: { dataType, value },
    });
  };

  const memoryHandler = () => {
    if (state.screenValue === 'Error') return;
    if (value === 'MPLUS' || value === 'MMINUS') {
      result = memory(state.memory, value, state.screenValue);
      setState({ ...state, memory: result, lastClicked: { dataType, value } });
      return;
    } else if (value === 'MRC') {
      if (state.lastClicked.value === 'MRC') {
        setState({ ...state, memory: '0' });
        return;
      }
      setState({
        ...state,
        screenValue: state.memory,
        memValue: state.screenValue,
        lastClicked: { dataType, value },
      });
    }
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
      lastClicked: { dataType, value },
    });
  };

  const clear = () => {
    setState({
      ...state,
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
  } else if (dataType === 'advanced') {
    advancedOperation();
  } else if (dataType === 'memory') {
    memoryHandler();
  } else if (dataType === 'equals' && state.memValue) {
    calculateHandler();
  } else if (dataType === 'clear') {
    clear();
  }
}

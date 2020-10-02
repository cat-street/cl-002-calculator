import { operation } from './operation';

/** Temporary variable for negation in calculation */
let tempOperator = null;
/** Calculation in progress variable */
let currentOperation = null;
/** Temporary value for multiple equals pressing */
let tmpValue = null;

export function calculation({ dataType, value }, state, setState) {
  const printNumber = () => {
    let valueToAdd = value;
    /** Add decimal, prevent multiple decimals */
    if (value === '.') {
      if (state.screenValue.indexOf('.') !== -1) return;
      if (!state.screenValue) valueToAdd = '0.';
    }
    /** Save first value and start next value if operation was pressed */
    if (currentOperation) {
      setState({
        ...state,
        screenValue: valueToAdd.toString(),
        memValue: state.screenValue,
      });
      currentOperation = null;
      return;
    }
    /** Update state with number */
    setState({ ...state, screenValue: (state.screenValue += valueToAdd) });
  };

  const addOperator = () => {
    /** Reset negation variable if another operation was pressed */
    if (tempOperator) tempOperator = null;
    /** Reset value for multiple equals pressing */
    tmpValue = null;
    /** Set temporary operator for negation */
    if (state.operator && value === 'SUBTRACT') {
      tempOperator = value;
    }
    currentOperation = value;
    setState({ ...state, operator: value });
  };

  const clear = () => {
    tempOperator = null;
    currentOperation = null;
    tmpValue = null;
    setState({ screenValue: '', operator: '', memValue: '' });
  };

  if (dataType === 'number') {
    printNumber();
  } else if (dataType === 'operation') {
    addOperator();
  } else if (dataType === 'clear') {
    clear();
  } else if (dataType === 'equals' && state.memValue) {
    /** Set value for multiple equals pressing */
    if (!tmpValue) tmpValue = state.screenValue;
    const result = operation(state.memValue, state.operator, tmpValue);
    setState({ ...state, screenValue: result, memValue: result });
  }
}

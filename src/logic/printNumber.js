export const printNumber = (
  { dataType, value },
  state,
  errorHandler,
  dataTypes
) => {
  if (errorHandler(state.screenValue)) return;

  let valueToAdd = value.toString();

  /** Forbid multiple leading zeroes */
  if (state.screenValue === '0' && valueToAdd === '0') return;

  /** Add decimal, prevent multiple decimals */
  if (value === '.') {
    if (
      state.screenValue.indexOf('.') !== -1 &&
      state.lastClicked.dataType !== dataTypes.operation
    )
      return;
    /** Add 0 before . if starting or continuing calculation */
    if (
      !state.screenValue ||
      state.lastClicked.dataType === dataTypes.operation
    )
      valueToAdd = '0.';
  }

  /** Save first value and start next value if operation was pressed */
  if (state.lastClicked.dataType === dataTypes.operation) {
    /** Negate value if minus was pressed after first operation */
    if (state.negate) {
      valueToAdd = -valueToAdd;
    }
    return {
      ...state,
      screenValue: valueToAdd.toString(),
      memValue: state.screenValue,
      lastClicked: { dataType, value },
      negate: false,
    };
  }

  /** New calculation if equals or memory was pressed */
  if (
    state.lastClicked.dataType === dataTypes.equals ||
    state.lastClicked.dataType === dataTypes.memory
  ) {
    return {
      ...state,
      screenValue: valueToAdd.toString(),
      operator: '',
      memValue: '',
      tempValue: '',
      lastClicked: { dataType, value },
      negate: false,
    };
  }

  /** Update state with number */
  return {
    ...state,
    screenValue: (state.screenValue += valueToAdd),
    lastClicked: { dataType, value },
  };
};

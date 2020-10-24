import { calculate } from './calculate';

export const addOperator = (
  { dataType, value },
  state,
  buttons,
  errorHandler,
  dataTypes
) => {
  if (errorHandler(state.screenValue)) return;

  /** Chain operations */
  if (state.lastClicked.dataType === dataTypes.number && state.memValue) {
    const result = calculate(state, buttons);
    return {
      ...state,
      screenValue: result,
      operator: value,
      memValue: result,
      tempValue: '',
      lastClicked: { dataType, value },
    };
  }

  /** Set temporary state for negation */
  if (
    state.lastClicked.dataType === dataTypes.operation &&
    value === buttons.SUBTRACT.value
  ) {
    return { ...state, negate: true };
  }

  return {
    ...state,
    screenValue: state.screenValue || '0',
    operator: value,
    tempValue: '',
    lastClicked: { dataType, value },
    negate: false,
  };
};

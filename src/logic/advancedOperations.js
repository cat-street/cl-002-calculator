import { advanced } from './operation';

export const advancedOperations = (
  { dataType, value },
  state,
  buttons,
  errorHandler,
  dataTypes
) => {
  if (errorHandler(state.screenValue)) return;

  /** Disable backspace if calculation in progress */
  if (
    (state.lastClicked.dataType === dataTypes.operation ||
      !state.screenValue) &&
    value === buttons.BACKSPACE.value
  )
    return;

  const result = advanced(state.screenValue, value, buttons);

  return {
    ...state,
    screenValue: result,
    lastClicked: { dataType, value },
  };
};

import { calculate } from './calculate';

export const calculateHandler = (
  { dataType, value },
  state,
  buttons,
  errorHandler
) => {
  if (errorHandler(state.screenValue)) return;

  const result = calculate(state, buttons);

  return {
    ...state,
    screenValue: result,
    memValue: result,
    tempValue: state.tempValue || state.screenValue,
    lastClicked: { dataType, value },
  };
};

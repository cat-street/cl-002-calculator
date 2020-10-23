import { operation } from './operation'

export const calculate = (state, buttons) => {
  /** Set temporary value for multiple equals pressing */
  return operation(
    state.memValue,
    state.operator,
    state.tempValue || state.screenValue,
    buttons
  );
};

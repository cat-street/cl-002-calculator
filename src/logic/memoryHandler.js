import { memory } from './operation';

export const memoryHandler = (
  { dataType, value },
  state,
  { MPLUS, MMINUS, MRC },
  errorHandler
) => {
  if (errorHandler(state.screenValue)) return;

  if (value === MPLUS || value === MMINUS) {
    const result = memory(state.memory, value, state.screenValue, {
      MMINUS,
      MPLUS,
    });
    return { ...state, memory: result, lastClicked: { dataType, value } };
  } else if (value === MRC) {
    if (state.lastClicked.value === MRC) {
      return { ...state, memory: '0' };
    }

    return {
      ...state,
      screenValue: state.memory,
      memValue: state.screenValue,
      lastClicked: { dataType, value },
    };
  }
};

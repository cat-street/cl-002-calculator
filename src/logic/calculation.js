import { printNumber } from './printNumber';
import { addOperator } from './addOperator';
import { calculateHandler } from './calculateHandler';
import { advancedOperations } from './advancedOperations';
import { memoryHandler } from './memoryHandler';
import { errorHandler } from '../utils/helpers';
import {
  ADD,
  SUBTRACT,
  MULTIPLY,
  DIVIDE,
  BACKSPACE,
  NEGATE,
  PERCENT,
  SQUARE,
  MPLUS,
  MMINUS,
  MRC,
  dataTypes,
} from '../utils/constants';

export function calculation(value, state) {
  switch (value.dataType) {
    case dataTypes.number: {
      return printNumber(value, state, errorHandler, dataTypes);
    }
    case dataTypes.operation: {
      return addOperator(
        value,
        state,
        { ADD, SUBTRACT, MULTIPLY, DIVIDE },
        errorHandler,
        dataTypes
      );
    }
    case dataTypes.advanced: {
      return advancedOperations(
        value,
        state,
        { BACKSPACE, NEGATE, PERCENT, SQUARE },
        errorHandler,
        dataTypes
      );
    }
    case dataTypes.memory: {
      return memoryHandler(value, state, { MPLUS, MMINUS, MRC }, errorHandler);
    }
    case dataTypes.equals: {
      if (state.memValue) {
        return calculateHandler(
          value,
          state,
          { ADD, SUBTRACT, MULTIPLY, DIVIDE },
          errorHandler
        );
      } else return;
    }
    case dataTypes.clear: {
      return {
        ...state,
        screenValue: '',
        operator: '',
        memValue: '',
        tempValue: '',
        lastClicked: {},
        negate: false,
      };
    }
    default: {
      return;
    }
  }
}

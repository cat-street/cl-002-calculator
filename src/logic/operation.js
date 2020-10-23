/** big.js: Handle decimal precision */
import Big from 'big.js';

export function operation(
  firstValue,
  operation,
  secondValue,
  { ADD, SUBTRACT, MULTIPLY, DIVIDE }
) {
  const first = Big(firstValue);
  const second = Big(secondValue);

  switch (operation) {
    case ADD: {
      return first.plus(second).toString();
    }
    case SUBTRACT: {
      return first.minus(second).toString();
    }
    case MULTIPLY: {
      return first.times(second).toString();
    }
    case DIVIDE: {
      /** Forbid dividing by zero */
      if (secondValue === '0') {
        return 'Error';
      }
      return first.div(second).toString();
    }
    default:
      return;
  }
}

export function advanced(
  screenValue,
  operation,
  { BACKSPACE, NEGATE, PERCENT, SQUARE }
) {
  const value = Big(screenValue);

  switch (operation) {
    case NEGATE: {
      return (-value).toString();
    }
    case PERCENT: {
      return (value * 0.01).toString();
    }
    /** Forbid square root for negative numbers */
    case SQUARE: {
      if (value < 0) {
        return 'Error';
      }
      return value.sqrt().toString();
    }
    case BACKSPACE: {
      if (screenValue.length > 1) {
        return value.toString().slice(0, -1);
      } else return '';
    }
    default:
      return;
  }
}

export function memory(memoryValue, operation, screenValue, { MMINUS, MPLUS }) {
  const mem = Big(memoryValue);
  const value = Big(screenValue);

  switch (operation) {
    case MMINUS: {
      return mem.minus(value).toString();
    }
    case MPLUS: {
      return mem.plus(value).toString();
    }
    default:
      return;
  }
}

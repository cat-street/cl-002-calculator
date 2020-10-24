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
    case ADD.value: {
      return first.plus(second).toString();
    }
    case SUBTRACT.value: {
      return first.minus(second).toString();
    }
    case MULTIPLY.value: {
      return first.times(second).toString();
    }
    case DIVIDE.value: {
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
    case NEGATE.value: {
      return (-value).toString();
    }
    case PERCENT.value: {
      return (value * 0.01).toString();
    }
    /** Forbid square root for negative numbers */
    case SQUARE.value: {
      if (value < 0) {
        return 'Error';
      }
      return value.sqrt().toString();
    }
    case BACKSPACE.value: {
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
    case MMINUS.value: {
      return mem.minus(value).toString();
    }
    case MPLUS.value: {
      return mem.plus(value).toString();
    }
    default:
      return;
  }
}

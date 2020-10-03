import Big from 'big.js';

export function operation(firstValue, operation, secondValue) {
  /** TODO: Handle big numbers */
  const first = Big(firstValue);
  const second = Big(secondValue);

  if (operation === 'ADD') {
    return first.plus(second).toString();
  }
  if (operation === 'SUBTRACT') {
    return first.minus(second).toString();
  }
  if (operation === 'MULTIPLY') {
    return first.times(second).toString();
  }
  if (operation === 'DIVIDE') {
    if (secondValue === '0') {
      return 'Error';
    }
    return first.div(second).toString();
  }
}

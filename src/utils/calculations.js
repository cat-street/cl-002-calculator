const result = [];
let currentOperator = null;
let operator = null;
let equalsPressed = false;
let secondValue = null;
let functionAdded = false;
let memory = 0;

// Return the number currently on screen
const getOutput = () => currentOutput.value;
// Convert & set the number on screen
const setOutput = (value) =>
  (currentOutput.value = value.toString().slice(0, 10));

const printNumber = (value) => {
  let output = getOutput();
  // Reset after pressing 'EQUALS' || on error
  if (equalsPressed || output === 'Error') {
    reset();
    output = '';
  }
  // If operator was pressed clear the screen
  if (currentOperator) {
    operator = currentOperator;
    currentOperator = null;
    output = '';
  }
  // If functional key was pressed clear the screen
  if (functionAdded) {
    functionAdded = false;
    output = '';
  }
  // Only one decimal point allowed, removing leading zero
  if (value === '.') {
    if (output.indexOf('.') !== -1) return;
  } else if (output === '0') output = '';
  // Print the number if typed
  setOutput((output += value));
};

const addOperator = (operation) => {
  // Prevent logging of multiple operation pressing || operations on error
  if (currentOperator || getOutput() === 'Error') return;
  // Ability to continue calculation after 'EQUALS' operation
  if (equalsPressed) operator = null;
  // Continue calculation without 'EQUALS' pressed
  if (operator) calculateResultHandler();
  // Clear 'calculation complete' & 'function key pressed' flags
  equalsPressed = false;
  functionAdded = false;
  // Add to the log
  result.push(+getOutput(), operation);
  // Save the operator for the calculation
  currentOperator = operation;
};

const calculateResultHandler = () => {
  // Memorize result if 'EQUALS' pressed again
  if (equalsPressed) result.push(+getOutput(), operator);
  // Setting up values for the calculation
  else secondValue = +getOutput();
  const firstValue = result[result.length - 2];
  // Forbid dividing by zero
  if (operator === 'DIVIDE' && secondValue === 0) {
    setOutput('Error');
    return;
  }
  let resultValue = calculateResult(operator, firstValue, secondValue);
  result.push(secondValue, 'EQUALS');
  // Setting 'calculation complete' flag
  equalsPressed = true;
  console.log(result);
  // Show 'Error' if result is bigger than the screen length
  if (resultValue > 9999999999) {
    setOutput('Error');
    operator = null;
  } else setOutput(resultValue);
};

const calculateResult = (operation, firstValue, secondValue) => {
  switch (operation) {
    case 'ADD':
      return +math.add(math.bignumber(firstValue), math.bignumber(secondValue));
    case 'SUBTRACT':
      return +math.subtract(
        math.bignumber(firstValue),
        math.bignumber(secondValue)
      );
    case 'MULTIPLY':
      return +math.multiply(
        math.bignumber(firstValue),
        math.bignumber(secondValue)
      );
    case 'DIVIDE':
      return +math.divide(
        math.bignumber(firstValue),
        math.bignumber(secondValue)
      );
  }
};

const addFunction = (func) => {
  let output = getOutput();
  if (output === 'Error' || output === '0') return;
  switch (func) {
    case 'NEGATE':
      output = -output;
      break;
    case 'SQUARE':
      // Prevent for negative numbers
      if (+output >= 0) {
        //TODO Write to log
        output = +math.sqrt(math.bignumber(output));
        // Setting 'function key pressed' flag
        functionAdded = true;
      } else {
        output = 'Error';
      }
      break;
    case 'PERCENT':
      output = +math.multiply(math.bignumber(output), 0.01);
      // Setting 'function key pressed' flag
      functionAdded = true;
      break;
    case 'BACKSPACE':
      // Prevent deleting when calculation is in progress
      if (currentOperator) return;
      if (output.length > 1) {
        output = output.slice(0, -1);
      } else output = 0;
      break;
  }
  setOutput(output);
};

const memoryAccess = (type) => {
  let output = getOutput();
  if (output === 'Error') return;
  switch (type) {
    case 'MPLUS':
      memory += +output;
      memoryIndicator.classList.add('calculator__screen-mem_visible');
      break;
    case 'MMINUS':
      memory -= +output;
      memoryIndicator.classList.add('calculator__screen-mem_visible');
      break;
    //TODO Clear memory
    case 'MRC':
      setOutput(memory);
      // Enable calculation with memory recall as second argument
      if (currentOperator) operator = currentOperator;
      currentOperator = null;
  }
  functionAdded = true;
};

const buttonHandler = (type, value) => {
  switch (type) {
    case 'number':
      printNumber(value);
      break;
    case 'operation':
      addOperator(value);
      break;
    case 'equals':
      // If the calculation is in progress
      if (operator) calculateResultHandler();
      break;
    case 'clear':
      reset();
      break;
    case 'function':
      addFunction(value);
      break;
    case 'memory':
      memoryAccess(value);
      break;
  }
};

const reset = () => {
  currentOperator = null;
  operator = null;
  equalsPressed = false;
  secondValue = null;
  result.length = 0;
  memory = 0;
  memoryIndicator.classList.remove('calculator__screen-mem_visible');
  setOutput(0);
  console.clear();
};

for (const element of buttons) {
  element.addEventListener('click', function handler() {
    buttonHandler(element.dataset.type, element.value);
  });
}

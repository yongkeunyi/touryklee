const calculatorDisplay = document.querySelector('.calculator-display');
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const clearButton = document.querySelector('[data-clear]');
const equalsButton = document.querySelector('[data-equals]');

let firstNumber = '';
let secondNumber = '';
let currentOperator = null;

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (currentOperator === null) {
      firstNumber += button.textContent;
      calculatorDisplay.value = firstNumber;
    } else {
      secondNumber += button.textContent;
      calculatorDisplay.value = secondNumber;
    }
  });
});

operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (firstNumber === '') return;
    currentOperator = button.dataset.operatorType;
  });
});

clearButton.addEventListener('click', () => {
  firstNumber = '';
  secondNumber = '';
  currentOperator = null;
  calculatorDisplay.value = '';
});

function calculateResult() {
  let result;
  if (currentOperator === 'add') {
    result = parseFloat(firstNumber) + parseFloat(secondNumber);
  } else if (currentOperator === 'subtract') {
    result = parseFloat(firstNumber) - parseFloat(secondNumber);
  } else if (currentOperator === 'multiply') {
    result = parseFloat(firstNumber) * parseFloat(secondNumber);
  } else if (currentOperator === 'divide') {
    result = parseFloat(firstNumber) / parseFloat(secondNumber);
  }
  return result;
}

equalsButton.addEventListener('click', () => {
  if (firstNumber === '' || secondNumber === '') return;
  const result = calculateResult();
  calculatorDisplay.value = result;
  firstNumber = result;
  secondNumber = '';
  currentOperator = null;
});

// var decalratipn
let num = "";
let firstOperand = null;
let operator = null;

function show() {
  // the function that update the screen
  const screen = document.getElementById("screen");
  screen.value = num || "0"; // if ther is number we put it or we put 0
}

function clearScreen() {
  // whene we call this function we put num to 0 and other op to there first value to add new op

  num = "";
  firstOperand = null;
  operator = null;
  show();
}

function addNum(number) {
  if (number === "." && num.includes(".")) {
    // testing if ther is just one dot (.)
    return;
  }

  num += number;
  show();
}

function setOperator(selectedOperator) {
  if (num === "") {
    // if there is no number we dont need op
    return;
  }

  if (firstOperand !== null) {
    // it is mean if there is a number stored we should cal
    calculate();
  }

  firstOperand = num;
  operator = selectedOperator;
  num = "";
}

function calculate() {
  if (firstOperand === null || operator === null || num === "") {
    // if there is no num or firstoperd or op we should return
    return;
  }

  let result;
  // use parsefoat to return an number form a str
  const num1 = parseFloat(firstOperand);
  const num2 = parseFloat(num);

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      return;
  }

  num = result.toString(); // put back to string to add more cal
  firstOperand = null;
  operator = null;
  show();
}

// setup variables and get a calculator instance
function CreateCalculator(inputNumberOne, inputNumberTwo, operator) {
  return new Calculator(inputNumberOne, inputNumberTwo, operator);
}

// perform a calculation when the operator button is clicked
function calculate() {
  // get first and second number
  const inputNumberOne = parseFloat(
    document.getElementById("inputNumberOne").value
  );

  const inputNumberTwo = parseFloat(
    document.getElementById("inputNumberTwo").value
  );

  if (isNaN(inputNumberOne) || isNaN(inputNumberTwo)) {
    updateResultText("Please enter a valid number");
    // // clear the result text after 2 seconds
    setTimeout(() => updateResultText(""), 2000);
    return;
  }

  // get operator
  const operator = getOperator();

  // create a calculator instance
  const calculator = CreateCalculator(inputNumberOne, inputNumberTwo, operator);
  // do the calculation
  calculator.operate();

  if (calculator.attemptedDivideByZero) {
    updateResultText("Cannot divide by zero");
    return;
  }

  updateResultText(
    `The result of ${calculator.getAction()} ${inputNumberOne} and ${inputNumberTwo} is ${
      calculator.value
    }`
  );
}

/**
 * set the text in the result section of the UI
 * @param {*} value
 */
function updateResultText(value) {
  document.getElementById("result").innerHTML = value;
}

// should clear input text values and focus the first number input
function clearValues() {
  // clear inputNumberOne
  document.getElementById("inputNumberOne").value = "";
  // clear inputNumberTwo
  document.getElementById("inputNumberTwo").value = "";

  // reset operator to default
  document.getElementById("add").checked = true;
}

/**
 * get the selected operator from the UI
 * @returns Operators
 */
function getOperator() {
  // default
  var operator = "add";
  // select the operator class from the UI
  Array.from(document.getElementsByClassName("operator")).forEach((e) => {
    const operator_input = e.firstElementChild;
    // if the input box is checked
    if (operator_input.checked) {
      operator = operator_input.value;
    }
  });
  return operator;
}

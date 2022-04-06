window.onload = () => {
  // focus on the first number input on page load
  document.getElementById("first_number").focus();
};

// setup variables and get a calculator instance
function CreateCalculator(first_number, second_number, operator) {
  return new Calculator(first_number, second_number, operator);
}

// perform a calculation when the operator button is clicked
function calculate() {
  // get first and second number
  const first_number = parseFloat(
    document.getElementById("first_number").value
  );

  const second_number = parseFloat(
    document.getElementById("second_number").value
  );

  if (isNaN(first_number) || isNaN(second_number)) {
    updateResultText("Please enter a valid number");
    // // clear the result text after 2 seconds
    setTimeout(() => updateResultText(""), 2000);
    return;
  }

  // get operator
  const operator = getOperator();

  // create a calculator instance
  const calculator = CreateCalculator(first_number, second_number, operator);
  // do the calculation
  calculator.operate();

  if (calculator.attemptedDivideByZero) {
    updateResultText("Cannot divide by zero");
    return;
  }

  updateResultText(
    `The result of ${calculator.getAction()} ${first_number} and ${second_number} is ${
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
  // clear first_number
  document.getElementById("first_number").value = "";
  // clear second_number
  document.getElementById("second_number").value = "";

  // reset operator to default
  document.getElementById("add").checked = true;

  // focus to the first number input on clearing
  document.getElementById("first_number").focus();
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

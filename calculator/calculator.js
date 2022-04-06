class Calculator {
  firstNumber;
  secondNumber;
  operator;
  value;

  constructor(firstNumber, secondNumber, operator) {
    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
    this.operator = operator;
    this.value = 0;
  }

  // determine the current operation's label
  getAction() {
    switch (this.operator) {
      case "add":
        return "adding";
      case "subtract":
        return "subtracting";
      case "multiply":
        return "multiplying";
      case "divide":
        return "dividing";
      default:
        return "";
    }
  }

  // perform a calculation based on the currently selected operation
  operate() {
    switch (this.operator) {
      case "add":
        this.add();
        break;
      case "subtract":
        this.subtract();
        break;
      case "multiply":
        this.multiply();
        break;
      case "divide":
        if (this.secondNumber === 0) {
          this.attemptedDivideByZero = true;
        } else {
          this.divide();
        }
        break;
      default:
        break;
    }
  }

  attemptedDivideByZero = false;

  // perform addition operation
  add() {
    this.value = this.firstNumber + this.secondNumber;
  }

  // perform subtraction operation
  subtract() {
    this.value = this.firstNumber - this.secondNumber;
  }

  // perform multiplication operation
  multiply() {
    this.value = this.firstNumber * this.secondNumber;
  }

  // perform divide operation
  divide() {
    if (this.secondNumber === 0) {
      this.attemptedDivideByZero = true;
    } else {
      this.value = this.firstNumber / this.secondNumber;
    }
  }
}

//DO NOT TOUCH THIS LINE OF CODE//
let unit_test = Calculator;

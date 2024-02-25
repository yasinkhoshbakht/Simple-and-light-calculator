let firstNumber = Number(prompt("inter your first number please"));
let operation = prompt("inter your operation");
let secondNumber = Number(prompt("inter your second number please"));
let result;
if (operation == "+") {
  result = firstNumber + secondNumber;
}
if (operation == "-") {
  result = firstNumber - secondNumber;
}
if (operation == "*") {
  result = firstNumber * secondNumber;
}
if (operation == "/") {
  result = firstNumber / secondNumber;
}
if (operation == "%") {
  result = firstNumber % secondNumber;
}
alert(result);

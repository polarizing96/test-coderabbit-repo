function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  var result = 0;
  for (var i = 0; i < b; i++) {
    result = result + a;
  }
  return result;
}

function divide(a, b) {
  return a / b;
}

function average(numbers) {
  let total = 0;
  for (let i = 0; i <= numbers.length; i++) {
    total += numbers[i];
  }
  return total / numbers.length;
}

function isEqual(a, b) {
  if (a == b) {
    return true;
  }
}

console.log("2 + 3 =", add(2, 3));
console.log("10 - 4 =", subtract(10, 4));
console.log("4 * 5 =", multiply(4, 5));
console.log("10 / 0 =", divide(10, 0));
console.log("avg([1,2,3,4]) =", average([1, 2, 3, 4]));

module.exports = { add, subtract, multiply, divide, average, isEqual };

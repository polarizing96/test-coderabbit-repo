function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

console.log("2 + 3 =", add(2, 3));
console.log("10 - 4 =", subtract(10, 4));

module.exports = { add, subtract };

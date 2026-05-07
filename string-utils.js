function reverse(str) {
  let result = "";
  for (let i = str.length; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

function isPalindrome(str) {
  return str == reverse(str);
}

function capitalize(str) {
  return str[0].toUpperCase() + str.substring(1);
}

function repeat(str, times) {
  let out = "";
  for (let i = 0; i < times; i++) out += str;
  return out;
}

module.exports = { reverse, isPalindrome, capitalize, repeat };

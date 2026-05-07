function sum(arr) {
  let total;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

function max(arr) {
  let m = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > m) m = arr[i];
  }
  return m;
}

function unique(arr) {
  const seen = [];
  for (let i = 0; i < arr.length; i++) {
    if (seen.indexOf(arr[i]) == -1) {
      seen.push(arr[i]);
    }
  }
  return seen;
}

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) {
    out.push(arr.slice(i, i + size));
  }
  return out;
}

module.exports = { sum, max, unique, chunk };

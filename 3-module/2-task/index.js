let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  let newArr = arr.filter(item => item >= a && item <= b);
  return newArr;
}

let filtered = filterRange(arr, 1, 4);
var powerfulIntegers = function (x, y, bound) {
  let arr = []
  let set = new Set()
  handler(x, y, arr, bound, 0, 0, set)
  arr.sort((a, b) => a - b)
  return arr
};
function handler(x, y, arr, bound, i, j, set) {
  let val = Math.pow(x, i) + Math.pow(y, j)
  if (val > bound || ((x === 1 && i > 0) || (y === 1 && j > 0))) return
  if (!set.has(val)) {
      set.add(val)
      arr.push(val)
  }
  handler(x, y, arr, bound, i, j + 1, set)
  handler(x, y, arr, bound, i + 1, j, set)
  handler(x, y, arr, bound, i + 1, j + 1, set)
}

powerfulIntegers(2, 1, 10)
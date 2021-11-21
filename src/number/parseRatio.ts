export function reductionTo(m: number, n: number) {
  var arr = []
  if (!isInteger(m) || !isInteger(n)) {
    return
  } else if (m <= 0 || n <= 0) {
    return
  }
  var a = m
  var b = n
  a >= b ? ((a = m), (b = n)) : ((a = n), (b = m))
  if (m != 1 && n != 1) {
    for (var i = b; i >= 2; i--) {
      if (m % i == 0 && n % i == 0) {
        m = m / i
        n = n / i
      }
    }
  }
  arr[0] = m
  arr[1] = n
  return arr
}

export function isInteger(n: number) {
  return n % 1 === 0
}

export const parseRatio = (a: number, b: number) => {
  if (a === 0 || b === 0) {
    return `${a}:${b}`
  }
  const pair = reductionTo(a, b)
  if (pair) {
    return pair.join(':')
  }
}

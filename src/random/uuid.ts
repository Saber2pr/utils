export function uuid(len = 10) {
  let str = ''
  while (str.length < len) {
    str += Math.random().toString(36).substr(2)
  }
  // 控制长度
  return str.slice(0, len)
}

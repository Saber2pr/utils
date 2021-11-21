export const base64 = {
  encode(str: string) {
    if (typeof window === 'undefined') {
      // node
      return new Buffer(str).toString('base64')
    } else {
      // browser
      return btoa(str)
    }
  },
  decode(str: string) {
    if (typeof window === 'undefined') {
      // node
      return new Buffer(str, 'base64').toString()
    } else {
      // browser
      return atob(str)
    }
  },
}

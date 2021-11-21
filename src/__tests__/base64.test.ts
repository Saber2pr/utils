import { base64 } from '../'

describe('Base64', () => {
  it('base64', () => {
    const str = '123abc^&('
    expect(base64.decode(base64.encode(str))).toEqual(str)
  })
})

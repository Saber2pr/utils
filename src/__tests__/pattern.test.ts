import { pattern } from '../'

describe('Pattern', () => {
  it('inject', () => {
    const str = `abc
---start---
---end---
def`

    const str2 = `abc
---start---
hello
---end---
def`
    expect(pattern.inject(str, '---start---', '---end---', 'hello')).toEqual(
      str2
    )
  })
})

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
    expect(
      pattern.inject(str, '---start---\n', '\n---end---', 'hello')
    ).toEqual(str2)
  })

  it('inject2', () => {
    const str = `---start------end---`

    const str2 = `---start---hello---end---`
    expect(pattern.inject(str, '---start---', '---end---', 'hello')).toEqual(
      str2
    )
  })
})

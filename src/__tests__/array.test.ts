import { array } from '../'

const { dedup, getArray, splitArray } = array

describe('Array', () => {
  it('dedup', () => {
    const result = dedup(
      [
        {
          name: 'a',
        },
        {
          name: 'b',
        },
        {
          name: 'a',
        },
      ],
      (a, b) => a.name === b.name
    )
    expect(result).toEqual([
      {
        name: 'a',
      },
      {
        name: 'b',
      },
    ])
  })

  it('getArray', () => {
    expect(getArray(null)).toEqual([])
    expect(getArray(undefined)).toEqual([])
    expect(getArray({} as any)).toEqual([])
    expect(getArray(1 as any)).toEqual([])
    expect(getArray('a' as any)).toEqual([])
    expect(getArray(true as any)).toEqual([])
    expect(getArray((() => {}) as any)).toEqual([])
    expect(getArray([1, 2, 3])).toEqual([1, 2, 3])
  })

  it('splitArray', () => {
    expect(splitArray([1, 2, 3, 4], 0)).toEqual([])
    expect(splitArray([1, 2, 3, 4], 1)).toEqual([[1], [2], [3], [4]])
    expect(splitArray([1, 2, 3, 4], 2)).toEqual([
      [1, 2],
      [3, 4],
    ])
    expect(splitArray([1, 2, 3, 4], 3)).toEqual([[1, 2, 3], [4]])
    expect(splitArray([1, 2, 3, 4], 4)).toEqual([[1, 2, 3, 4]])
    expect(splitArray([1, 2, 3, 4], 5)).toEqual([[1, 2, 3, 4]])
  })
})

import { is } from '../'

describe('Is', () => {
  it('isUndefined', () => {
    expect(is.isUndefined(undefined)).toBe(true)
    expect(is.isUndefined(null)).toBe(false)
    expect(is.isUndefined({})).toBe(false)
    expect(is.isUndefined('')).toBe(false)
    expect(is.isUndefined(0)).toBe(false)
  })

  it('isNull', () => {
    expect(is.isNull(undefined)).toBe(false)
    expect(is.isNull(null)).toBe(true)
    expect(is.isNull({})).toBe(false)
    expect(is.isNull('')).toBe(false)
    expect(is.isNull(0)).toBe(false)
  })

  it('isNullOrUndefined', () => {
    expect(is.isNullOrUndefined(undefined)).toBe(true)
    expect(is.isNullOrUndefined(null)).toBe(true)
    expect(is.isNullOrUndefined({})).toBe(false)
    expect(is.isNullOrUndefined('')).toBe(false)
    expect(is.isNullOrUndefined(0)).toBe(false)
  })

  it('isNullOrUndefined', () => {
    expect(is.isNotNullOrUndefined(undefined)).toBe(false)
    expect(is.isNotNullOrUndefined(null)).toBe(false)
    expect(is.isNotNullOrUndefined({})).toBe(true)
    expect(is.isNotNullOrUndefined('')).toBe(true)
    expect(is.isNotNullOrUndefined(0)).toBe(true)
  })

  it('isMobAgent', () => {
    expect(is.isMobAgent('iPhone')).toBe(true)
    expect(is.isMobAgent('micromessenger')).toBe(true)
    expect(is.isMobAgent('linux')).toBe(false)
  })

  it('isJSON', () => {
    expect(is.isJSON('["a", "b"]')).toBe(true)
    expect(is.isJSON(['a', 'b'] as any)).toBe(false)
    expect(is.isJSON('<html></html>')).toBe(false)
  })

  it('compareId', () => {
    expect(is.compareId('123', '123')).toBe(true)
    expect(is.compareId('123', 123)).toBe(true)
    expect(is.compareId(123, 123)).toBe(true)
    expect(is.compareId(123, 12)).toBe(false)
    expect(is.compareId(123, '12')).toBe(false)
    expect(is.compareId('123', '12')).toBe(false)
  })
})

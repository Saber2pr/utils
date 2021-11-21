import { number } from '../'

describe('Number', () => {
  it('parseFixed', () => {
    expect(number.parseFixed(1234.234)).toBe('1234.23')
    expect(number.parseFixed('1234.234')).toBe('1234.23')
    expect(number.parseFixed(1234.236)).toBe('1234.24')
    expect(number.parseFixed('1234.236')).toBe('1234.24')
  })

  it('parseUnit', () => {
    expect(number.parseUnit('abc')).toBe('-')
    expect(number.parseUnit({} as any)).toBe('-')
    expect(number.parseUnit([] as any)).toBe('-')
    expect(number.parseUnit(1234)).toBe('1234')
    expect(number.parseUnit(12345)).toBe('1.23w')
    expect(number.parseUnit(123000000)).toBe('1.23亿')
  })

  it('parseNumberSplit', () => {
    expect(number.parseNumberSplit(1234567, ',')).toBe('1,234,567')
    expect(number.parseNumberSplit(123456, ',')).toBe('123,456')
    expect(number.parseNumberSplit(12345, ',')).toBe('12,345')
    expect(number.parseNumberSplit(123, ',')).toBe('123')
    expect(number.parseNumberSplit(123, ',')).toBe('123')
    expect(number.parseNumberSplit(12, ',')).toBe('12')
  })

  it('isInteger', () => {
    expect(number.isInteger(123)).toBe(true)
    expect(number.isInteger(12.3)).toBe(false)
    expect(number.isInteger('12.3' as any)).toBe(false)
    expect(number.isInteger('123' as any)).toBe(true)
  })

  it('reductionTo', () => {
    expect(number.reductionTo(6, 3)).toEqual([2, 1])
    expect(number.reductionTo(8, 3)).toEqual([8, 3])
  })

  it('parseRatio', () => {
    expect(number.parseRatio(6, 3)).toEqual('2:1')
    expect(number.parseRatio(8, 3)).toEqual('8:3')
    expect(number.parseRatio(8, 0)).toEqual('8:0')
  })
})

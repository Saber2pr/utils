import { url } from '../'

describe('Url', () => {
  it('getHost', () => {
    expect(url.getHost('https://saber2pr.top/#/')).toBe('saber2pr.top')
    expect(url.getHost('http://saber2pr.top/#/')).toBe('saber2pr.top')
    expect(url.getHost('localhost')).toBe('')
    expect(url.getHost('https://127.0.0.1/')).toBe('127.0.0.1')
    expect(url.getHost('https://127.0.0.1')).toBe('127.0.0.1')
    expect(url.getHost('https://127.0.0.1:3000')).toBe('127.0.0.1:3000')
  })

  it('parseQuery', () => {
    expect(url.parseQuery('https://saber2pr.top/?search=nodejs')).toEqual({
      search: 'nodejs',
    })
    expect(
      url.parseQuery('https://saber2pr.top/?search=nodejs&key=123')
    ).toEqual({
      search: 'nodejs',
      key: '123',
    })
    expect(url.parseQuery('search=nodejs&key=123')).toEqual({
      search: 'nodejs',
      key: '123',
    })
    expect(
      url.parseQuery('https://saber2pr.top/?search=nodejs&key=123#test')
    ).toEqual({
      search: 'nodejs',
      key: '123',
    })
    expect(url.parseQuery('https://saber2pr.top/')).toEqual({})
  })

  it('toQueryStr', () => {
    expect(url.toQueryStr({ id: 1, name: null, age: 18 })).toBe('id=1&age=18')
    expect(url.toQueryStr({ id: 1, name: undefined, age: 18 })).toBe(
      'id=1&age=18'
    )
    expect(url.toQueryStr({ id: 1, name: false, age: 18 })).toBe(
      'id=1&name=false&age=18'
    )
    expect(url.toQueryStr({ id: 1, name: true, age: 18 })).toBe(
      'id=1&name=true&age=18'
    )
  })
})

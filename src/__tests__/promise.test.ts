import { promise } from '../'

describe('Promise', () => {
  it('timeout', async () => {
    await promise.timeout(100)
    expect(1).toEqual(1)
  })
})

import { object } from '../'

describe('Object', () => {
  it('deepGet', () => {
    expect(
      object.deepGet(
        {
          status: 500,
          data: {
            props: {
              data: {
                title: 'title',
                list: {
                  __error__: {
                    message: 'render fail',
                  },
                },
              },
            },
          },
        },
        '__error__'
      )
    ).toEqual({
      message: 'render fail',
    })
  })
})

export const parseQuery = (query: string) => {
  const params = query.split('?').pop()
  if (params) {
    const kvs = params.split('&')
    return kvs.reduce((acc, item) => {
      const meta = item.split('=')
      return { ...acc, [meta[0]]: meta[1] }
    }, {})
  }
}

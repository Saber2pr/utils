export const parseQuery = <T = any>(query: string): T => {
  if (query && query.includes('=')) {
    const params = query.split('#')[0].split('?').pop()
    if (params) {
      const kvs = params.split('&')
      return kvs.reduce((acc, item) => {
        const meta = item.split('=')
        return { ...acc, [meta[0]]: meta[1] }
      }, {} as any)
    }
  }
  return {} as any
}

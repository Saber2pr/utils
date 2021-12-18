export function inject(
  str: string,
  startStr: string,
  endStr: string,
  strToInject: string
) {
  const startPos = str.indexOf(startStr)
  const endPos = str.indexOf(endStr)
  return (
    str.slice(0, startPos + startStr.length) + strToInject + str.slice(endPos)
  )
}

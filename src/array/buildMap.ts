export const buildMap = <T extends { [k: string]: any }>(
  array: T[],
  key: keyof T
) => array.reduce((acc, cur) => ({ ...acc, [cur[key]]: cur }), {})

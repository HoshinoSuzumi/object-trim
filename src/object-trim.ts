import { TrimObjectProperties } from "./types"

const trimObject = <T>(
  objectList: T[],
  maxLength: number,
  {
    keys
  }: TrimObjectProperties<T>
) => {
  let length = 0
  let i = objectList.length - 1
  while (i >= 0) {
    const obj = objectList[i]
    let breakFlag = false
    for (const key of keys) {
      if (typeof obj[key] === 'string') {
        length += (obj[key] as string).length
      }
      if (length > maxLength) {
        breakFlag = true
        break
      }
    }
    if (breakFlag) break
    i--
  }
  return objectList.slice(i + 1)
}

export { trimObject }
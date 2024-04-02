import { TrimObjectProperties } from "./types"

const trimObject = <T>(
  objectList: T[],
  maxLength: number,
  props: TrimObjectProperties<T>
) => {
  let length = 0
  let i = objectList.length - 1
  if (props.fromStart) {
    for (i = 0; i < objectList.length; i++) {
      const object = objectList[i]
      length += props.keys.reduce((acc, key) => {
        return acc + String(object[key]).length
      }, 0)
      if (length > maxLength) {
        break
      }
    }
  } else {
    while (i >= 0) {
      const obj = objectList[i]
      let breakFlag = false
      for (const key of props.keys) {
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
  }
  return props.fromStart ? objectList.slice(0, i) : objectList.slice(i + 1)
}

export { trimObject }
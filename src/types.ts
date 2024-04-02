export interface TrimObjectProperties<T> {
  keys: (keyof T)[]
  fromStart?: boolean
}
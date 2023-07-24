export type Function<I, O> = I extends void ? () => Promise<O> : (input: I) => Promise<O>

const isNotNullish = (v: any) => ![null, undefined].includes(v)

const buildFormItem = (obj: any) =>
  typeof obj !== 'object' || obj instanceof Blob ? obj : JSON.stringify(obj)

export const buildFormData = <T extends Record<string, any>>(data: T, asJson?: Array<keyof T>) => {
  const formData = new FormData()

  Object.keys(data)
    .filter(k => isNotNullish(data[k]))
    .forEach(k => {
      const value = data[k]

      if (asJson?.includes(k)) formData.set(k, JSON.stringify(value))
      else if (Array.isArray(value))
        value.filter(isNotNullish).forEach(v => formData.append(k, buildFormItem(v)))
      else formData.set(k, buildFormItem(value))
    })

  return formData
}

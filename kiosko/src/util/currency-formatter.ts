/**
 * @param locale
 * @param style
 * @param currency currency code, i.e: USD, EUR, JPY
 * @returns
 */

export const currencyFormatterWithLocale = (locale: string, style: string, currency: string) => {
  const formatter = new Intl.NumberFormat(locale, {
    style,
    currency,
    minimumFractionDigits: 2,
  })

  return formatter
}

export const currencyFormatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

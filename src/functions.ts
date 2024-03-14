import countryData from './assets/countryData.json'
import { CountryData, NumberValidationData } from './types'

export function getCountryDataByCode(
  countryCode: number
): NumberValidationData {
  const country = countryData.find(
    (country: any) =>
      country.phoneNumberLengthByCountry_CountryCode === countryCode
  ) as CountryData

  if (!country) {
    throw new Error(`Country code ${countryCode} not found`)
  }
  const mappedCountry: NumberValidationData = {
    country: country.country,
    phLengthMax: country.phoneNumberLengthByCountry_phLengthMax,
    phLengthMin: country.phoneNumberLengthByCountry_phLengthMin,
  }

  if (
    country.phoneNumberLengthByCountry_phLengthMax &&
    country.phoneNumberLengthByCountry_phLengthMin
  ) {
    const maxExample = `+${
      country.phoneNumberLengthByCountry_CountryCode
    } xxx-${Math.floor(
      Math.random() * 10 ** (country.phoneNumberLengthByCountry_phLengthMax - 4)
    )}`

    if (
      country.phoneNumberLengthByCountry_phLengthMax ===
      country.phoneNumberLengthByCountry_phLengthMin
    ) {
      mappedCountry.phExample = maxExample
    } else {
      const minExample = `+${
        country.phoneNumberLengthByCountry_CountryCode
      } xxx-${Math.floor(
        Math.random() *
          10 ** (country.phoneNumberLengthByCountry_phLengthMin - 4)
      )}`

      mappedCountry.phExample = `${minExample} , ${maxExample}`
    }
  }
  return mappedCountry
}

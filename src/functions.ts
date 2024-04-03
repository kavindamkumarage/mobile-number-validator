import countryData from './assets/countryData.json'
import {
  CountryData,
  NumberValidationData,
  CommonApiReturnType,
  requestParams,
} from './types'
import { VALIDATION_REGEX } from './utils/constants'

export function getCountryDataByCode({
  countryCode,
  mobileNumber,
  internationalValidation,
}: requestParams): CommonApiReturnType<NumberValidationData> {
  const response: CommonApiReturnType<NumberValidationData> = {
    IsError: true,
    Message: null,
    ReturnObj: null,
  }

  if (typeof countryCode === 'string') {
    countryCode = parseInt(countryCode)
  }

  const country = countryData.find(
    (country: any) =>
      country.phoneNumberLengthByCountry_CountryCode === countryCode
  ) as CountryData

  if (!country) {
    response.Message = 'country not found'
    return response
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
    const maxExample = generatePhoneNumberExample(
      country.phoneNumberLengthByCountry_phLengthMax
    )

    if (
      country.phoneNumberLengthByCountry_phLengthMax ===
      country.phoneNumberLengthByCountry_phLengthMin
    ) {
      mappedCountry.phExample = maxExample
    } else {
      const minExample = generatePhoneNumberExample(
        country.phoneNumberLengthByCountry_phLengthMin
      )

      mappedCountry.phExample = `${minExample} , ${maxExample}`
    }

    response.Message = 'country found'
    response.IsError = false

    if (mobileNumber) {
      response.Message = 'invalid mobile number'
      response.IsError = true

      if (mobileNumber.startsWith('0')) {
        response.Message = 'mobile number should not start with 0'
      } else {
        const regex = VALIDATION_REGEX(
          country.phoneNumberLengthByCountry_phLengthMin,
          country.phoneNumberLengthByCountry_phLengthMax,
          internationalValidation
        )

        if (regex.test(mobileNumber)) {
          mappedCountry.validNumber = mobileNumber
          response.Message = 'valid mobile number'
          response.IsError = false
        }
      }
    }
    response.ReturnObj = mappedCountry
  }
  return response
}

function generatePhoneNumberExample(
  length: number
): string {
  let example: string = '';
  for (let i: number = 1; i <= length; i++) {
      example += (i % 10).toString();
  }
  return example;
}

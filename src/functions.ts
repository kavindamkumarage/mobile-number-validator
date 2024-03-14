import countryData from './assets/countryData.json';
import { CountryData } from './types';

export function getCountryDataByCode(countryCode: number): CountryData {
    const country = countryData.find((country: any) => country.phoneNumberLengthByCountry_CountryCode === countryCode) as CountryData;
    if (!country) {
        throw new Error(`Country code ${countryCode} not found`);
    }
    return country;
}
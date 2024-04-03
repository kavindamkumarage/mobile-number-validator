export type CountryData = {
    country: string;
    phoneNumberLengthByCountry_phLengthMax: number |null;
    phoneNumberLengthByCountry_phLengthMin: number | null;
    phoneNumberLengthByCountry_phLength: string | number;
    phoneNumberLengthByCountry_CountryCode: number | null;
    phoneNumberLengthByCountry_phLength_InternationalPrefix: number | null;
    phoneNumberLengthByCountry_phLength_NationalPrefix: number | null;
    phoneNumberLengthByCountry_Notes: string | null;
}

export type requestParams = {
    countryCode: number | string;
    mobileNumber?: string;
    internationalValidation?: boolean;
}

export type NumberValidationData = {
    country: string;
    phLengthMax: number |null;
    phLengthMin: number | null;
    phExample?: string | number;
    validNumber?: string | null;
}

export type CommonApiReturnType<T> = {
    IsError: boolean;
    Message: string | null;
    ReturnObj : T | null;
}

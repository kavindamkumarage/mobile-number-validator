const fs = require('fs');
const path = require('path');

const countriesData = JSON.parse(fs.readFileSync(path.join(__dirname, 'mobileNumberLengthByCountry.json'), 'utf8'));

const getCountryByCode = (countryCode) => {
    return countriesData.find(country => country.phoneNumberLengthByCountry_CountryCode === countryCode) || null;
  };
  
  module.exports = { getCountryByCode };

# Mobile Number Validation Library

This npm library provides country data validation functionality, allowing you to retrieve data related to phone number lengths by country code.



## Installation

You can install the library via npm:

```bash
  npm install my-country-data-library
```
    
## Usage

```javascript
// Vanilla JS
const { getCountryDataByCode } = require('my-country-data-library');

// React usage
import { getCountryDataByCode } from '@zene/mobile-number-validator';
```
```javascript

// Example usage:
    const params = {
        countryCode: string,
        mobileNumber?: string,
        internationalValidation?: boolean
    }
    const countryData = getCountryDataByCode(params);
    console.log(countryData);
```

```javascript
{
  IsError: bool,
  Message: 'string',
  ReturnObj: {
    country: 'string',
    phLengthMax: int,
    phLengthMin: int,
    phExample: 'string',
    validNumber?: 'string'
  }
}
```
## API Reference

#### getCountryDataByCode

```
getCountryDataByCode({ countryCode: string|number, mobileNumber?: string,    }): NumberValidationData
```

| Parameter   | Type     | Description                |
| :--------   | :------- | :------------------------- |
| `countryCode` | `number or string` | **Required**. The numeric country code for the desired country |
| `mobileNumber` | `string` | Mobile number that needs to be verify |
| `internationalValidation` | `boolean` |  allows for an international dialing code to be in the number |

#### NumberValidationData Interface

```
{
    country: string;
    phLengthMax: number |null;
    phLengthMin: number | null;
    phExample?: string | number;
    validNumber?: string | null;
}

```
## License

[MIT](https://choosealicense.com/licenses/mit/)


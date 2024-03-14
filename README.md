
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

    // Example usage:
    const countryCode = 1; // United States
    const countryData = getCountryDataByCode(countryCode);
    console.log(countryData);
```

```javascript
{
  country: 'United States',
  phLengthMax: 10,
  phLengthMin: 10,
  phExample: '+1 xxx-166314'
}
```
## API Reference

#### getCountryDataByCode

```
getCountryDataByCode(countryCode: number): NumberValidationData
```

| Parameter   | Type     | Description                |
| :--------   | :------- | :------------------------- |
| `countryCode` | `number` | **Required**. The numeric country code for the desired country |

#### NumberValidationData Interface

```
{
    country: string;
    phLengthMax: number |null;
    phLengthMin: number | null;
    phExample?: string | number;
}

```


## License

[MIT](https://choosealicense.com/licenses/mit/)


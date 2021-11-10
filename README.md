
# TCK Lib V2

# Installing

```bash
npm install @yek-plus/tck
yarn add @yek-plus/tck
```

# Basic Usage

```js
const Tck = require("@yek-plus/tck");
const tck = new Tck()
tck.methods.Check({
    tckn: Turkish Identification Number,
    ad: Fist Name,
    soyad: Last Name,
    dogumYili: Birth Year,
  })
  .then(console.log);
```

# Setup

## constructor

### Inputs

| property | type  | required | default                       | description    |
| -------- | ----- | -------- | ----------------------------- | -------------- |
| fetch    | Fetch | false    | Fetch from node-fetch package | fetch function |

## update

### Inputs

| property      | type   | required | default                       | description              |
| ------------- | ------ | -------- | ----------------------------- | ------------------------ |
| options       | object | true     | null                          | contractor fields object |
| options.fetch | Fetch  | false    | Fetch from node-fetch package | fetch function           |

# Methods

## Check

### Inputs

| property  | type     | required | default | description                   |
| --------- | -------- | -------- | ------- | ----------------------------- |
| tckn      | `number` | true     | null    | Turkish Identification Number |
| ad        | `string` | true     | null    | First Name                    |
| soyad     | `string` | true     | null    | Last Name                     |
| dogumYili | `number` | true     | null    | Birth Year                    |

### Response

| property     | type      | description                                      |
| ------------ | --------- | ------------------------------------------------ |
| status       | `boolean` | Shows method is return without error             |
| data         | `object`  | If method return with error, it will be null     |
| data.isValid | `boolean` | Shows result of method                           |
| error        | `error`   | If method return with error, it will shows error |

### Usage

```js
const Tck = require("@yek-plus/tck");
const tck = new Tck()
tck.methods.Check({
    tckn: Turkish Identification Number,
    ad: Fist Name,
    soyad: Last Name,
    dogumYili: Birth Year,
  })
  .then(console.log);
```

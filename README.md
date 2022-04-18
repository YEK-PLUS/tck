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
    name: Fist Name,
    surname: Last Name,
    birthYear: Birth Year,
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

| property | type  | required | default                       | description    |
| -------- | ----- | -------- | ----------------------------- | -------------- |
| fetch    | Fetch | false    | Fetch from node-fetch package | fetch function |

# Methods

## Check

### Inputs

| property  | type     | required | default | description                   |
| --------- | -------- | -------- | ------- | ----------------------------- |
| tckn      | `number` | true     | null    | Turkish Identification Number |
| name      | `string` | true     | null    | First Name                    |
| surnam    | `string` | true     | null    | Last Name                     |
| birthYear | `number` | true     | null    | Birth Year                    |

### Response

| property     | type      | description                          |
| ------------ | --------- | ------------------------------------ |
| status       | `boolean` | Shows method is return without error |
| data         | `object`  | data root                            |
| data.isValid | `boolean` | Shows result of method               |

### Usage

```js
const Tck = require("@yek-plus/tck");
const tck = new Tck()
tck.methods.Check({
    tckn: Turkish Identification Number,
    name: Fist Name,
    surname: Last Name,
    birthYear: Birth Year,
  })
  .then(console.log);
```

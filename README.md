# @sloang/express-json-sender

> For people like who hate typing res.status().json()

```js 
res.status().json() becomes => sender(status, json)
```

## Usage

```js
const express = require('express')
const app = express()

const sender = require('@sloang/express-json-sender')

app.post(sender(200, {test: 'test'}))
```

outputs

```json
{"test": "test"}
```

## API

```js
let sender = require('@sloang/express-json-sender')
```

```js
sender(status)
```

This method will call res.status with status provided, send a empty json response, and call next

```js
sender(status, obj)
```

This method will call res.status, res.json and next

## Install

With [npm](https://npmjs.org/) installed, run

```
$ npm install @sloang/express-json-sender
```

## See Also

- [`noffle/common-readme`](https://github.com/noffle/common-readme)
- ...

## License

MIT


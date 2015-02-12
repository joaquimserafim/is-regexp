# is.regexp

checks the given value is a **RegExp Object**

<a href="https://nodei.co/npm/is.regexp/"><img src="https://nodei.co/npm/is.regexp.png?downloads=true"></a>

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg?style=flat-square)](https://travis-ci.org/joaquimserafim/is-regexp)![Code Coverage 100%](https://img.shields.io/badge/code%20coverage-100%25-green.svg?style=flat-square)[![ISC License](https://img.shields.io/badge/license-ISC-blue.svg?style=flat-square)](https://github.com/joaquimserafim/is-regexp/blob/master/LICENSE)

## API
`var isRegExp = require('is.regexp')`

**isRegExp(*RegExp Object*)**

## Usage

```js
var isRegExp = require('is.regexp');

var obj1 = /2[0-4][0-9]/
var obj2 = {};

isRegExp(obj1);// should return true
isRegExp(obj2);// should return false
```


## Development

##### this projet has been set up with a precommit that forces you to follow a code style, no jshint issues and 100% of code coverage before commit


to run test
``` js
npm test
```

to run jshint
``` js
npm run jshint
```

to run code style
``` js
npm run code-style
```

to run check code coverage
``` js
npm run check-coverage
```

to open the code coverage report
``` js
npm run open-coverage
```

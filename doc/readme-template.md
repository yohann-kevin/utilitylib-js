# Utilitylib-js

utilitylib is a little utils library for javascript developper

[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/) [![Maintainability](https://api.codeclimate.com/v1/badges/ad089b61a2ad86077718/maintainability)](https://codeclimate.com/github/yohann-kevin/utilitylib-js/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/ad089b61a2ad86077718/test_coverage)](https://codeclimate.com/github/yohann-kevin/utilitylib-js/test_coverage) ![GitHub top language](https://img.shields.io/github/languages/top/yohann-kevin/utilitylib-js?color=yellow) ![example workflow](https://github.com/yohann-kevin/utilitylib-js/actions/workflows/node.js.yml/badge.svg)

## Installation, import and usage

install library
```bash
npm install utilitylib-js
```

import all library
```javascript
// import
const util = require('utilitylib-js');

// usage
util.object.clone(objectToClone);
```
or import just a part of library
```javascript
// import
const { object } = require('utilitylib-js');

//usage
object.clone(objectToClone);
```

or just import one method
```javascript
// import
const { clone } = require('utilitylib-js/src/object');

// usage
clone(objectToClone);
```

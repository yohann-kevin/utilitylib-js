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
## Functions

<dl>
<dt><a href="#merge">merge(array, arrayToMerge)</a> ⇒ <code>Array</code></dt>
<dd><p>merge two array</p>
</dd>
<dt><a href="#clone">clone(array)</a> ⇒ <code>Array</code></dt>
<dd><p>clone an array</p>
</dd>
<dt><a href="#diff">diff(arrayOne, arrayTwo)</a> ⇒ <code>Array</code></dt>
<dd><p>Compare two array and return diff</p>
</dd>
<dt><a href="#isArray">isArray(array)</a> ⇒ <code>boolean</code></dt>
<dd><p>check if entry is array</p>
</dd>
<dt><a href="#removeAll">removeAll(array, values)</a> ⇒ <code>Array</code></dt>
<dd><p>remove values in array</p>
</dd>
<dt><a href="#remove">remove(array, ...values)</a> ⇒ <code>Array</code></dt>
<dd><p>remove values in array</p>
</dd>
<dt><a href="#isVowel">isVowel(letter)</a> ⇒ <code>boolean</code></dt>
<dd><p>check if letter is vowel</p>
</dd>
<dt><a href="#isVowels">isVowels(letters)</a> ⇒ <code>array</code></dt>
<dd><p>check if letters have vowel or consumn</p>
</dd>
<dt><a href="#isConsumn">isConsumn(letter)</a> ⇒ <code>boolean</code></dt>
<dd><p>check if letter is consumn</p>
</dd>
<dt><a href="#isConsumns">isConsumns(letters)</a> ⇒ <code>array</code></dt>
<dd><p>check if letters have consumn or vowel</p>
</dd>
<dt><a href="#getInitialName">getInitialName(fullname, separator)</a> ⇒ <code>string</code></dt>
<dd><p>get initial in full name</p>
</dd>
<dt><a href="#isString">isString(string)</a> ⇒ <code>boolean</code></dt>
<dd><p>check if entry is string</p>
</dd>
<dt><a href="#randomNum">randomNum(min, max)</a> ⇒ <code>number</code></dt>
<dd><p>generate random num beetween two number</p>
</dd>
<dt><a href="#isPrime">isPrime(number)</a> ⇒ <code>boolean</code></dt>
<dd><p>check if number is prime</p>
</dd>
<dt><a href="#even">even(number)</a> ⇒ <code>boolean</code></dt>
<dd><p>check if number is even</p>
</dd>
<dt><a href="#odd">odd(number)</a> ⇒ <code>boolean</code></dt>
<dd><p>check if number is odd</p>
</dd>
<dt><a href="#isNumber">isNumber(number)</a> ⇒ <code>boolean</code></dt>
<dd><p>check if entry is number</p>
</dd>
<dt><a href="#isEqual">isEqual(objectOne, objectTwo)</a> ⇒ <code>boolean</code></dt>
<dd><p>compare object equality</p>
</dd>
<dt><a href="#clone">clone(objectToClone)</a> ⇒ <code>object</code></dt>
<dd><p>clone object</p>
</dd>
<dt><a href="#clones">clones(objectsToClone)</a> ⇒ <code>Array.&lt;object&gt;</code></dt>
<dd><p>clone all object in array</p>
</dd>
<dt><a href="#isEmpty">isEmpty(object)</a> ⇒ <code>boolean</code></dt>
<dd><p>check if object is empty</p>
</dd>
<dt><a href="#merge">merge(object, objectToMerge)</a> ⇒ <code>object</code></dt>
<dd><p>merge two object</p>
</dd>
<dt><a href="#isObject">isObject(object)</a> ⇒ <code>boolean</code></dt>
<dd><p>check if entry is object</p>
</dd>
</dl>

<a name="merge"></a>

## merge(array, arrayToMerge) ⇒ <code>Array</code>
merge two array

**Kind**: global function  
**Returns**: <code>Array</code> - return array merged  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | first array |
| arrayToMerge | <code>Array</code> | array for merge |

<a name="clone"></a>

## clone(array) ⇒ <code>Array</code>
clone an array

**Kind**: global function  
**Returns**: <code>Array</code> - return new instance of array  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | array for clone |

<a name="diff"></a>

## diff(arrayOne, arrayTwo) ⇒ <code>Array</code>
Compare two array and return diff

**Kind**: global function  
**Returns**: <code>Array</code> - return array of diff between two array  

| Param | Type | Description |
| --- | --- | --- |
| arrayOne | <code>Array</code> | first array |
| arrayTwo | <code>Array</code> | array for comparaison |

<a name="isArray"></a>

## isArray(array) ⇒ <code>boolean</code>
check if entry is array

**Kind**: global function  
**Returns**: <code>boolean</code> - return true if value is a array  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>any</code> | value for check is array |

<a name="removeAll"></a>

## removeAll(array, values) ⇒ <code>Array</code>
remove values in array

**Kind**: global function  
**Returns**: <code>Array</code> - return array without value to remove  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | array contain values for check |
| values | <code>Array</code> | array of values to remove |

<a name="remove"></a>

## remove(array, ...values) ⇒ <code>Array</code>
remove values in array

**Kind**: global function  
**Returns**: <code>Array</code> - return array without value to remove  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | array contain values for check |
| ...values | <code>any</code> | any values to remove |

<a name="isVowel"></a>

## isVowel(letter) ⇒ <code>boolean</code>
check if letter is vowel

**Kind**: global function  
**Returns**: <code>boolean</code> - return true if letter is vowel  

| Param | Type | Description |
| --- | --- | --- |
| letter | <code>string</code> | string letter |

<a name="isVowels"></a>

## isVowels(letters) ⇒ <code>array</code>
check if letters have vowel or consumn

**Kind**: global function  
**Returns**: <code>array</code> - return array of boolean  

| Param | Type | Description |
| --- | --- | --- |
| letters | <code>array</code> | array of letters |

<a name="isConsumn"></a>

## isConsumn(letter) ⇒ <code>boolean</code>
check if letter is consumn

**Kind**: global function  
**Returns**: <code>boolean</code> - return true if letter is consumn  

| Param | Type | Description |
| --- | --- | --- |
| letter | <code>string</code> | string letter |

<a name="isConsumns"></a>

## isConsumns(letters) ⇒ <code>array</code>
check if letters have consumn or vowel

**Kind**: global function  
**Returns**: <code>array</code> - return array of boolean  

| Param | Type | Description |
| --- | --- | --- |
| letters | <code>array</code> | array of letters |

<a name="getInitialName"></a>

## getInitialName(fullname, separator) ⇒ <code>string</code>
get initial in full name

**Kind**: global function  
**Returns**: <code>string</code> - return initial J S  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| fullname | <code>string</code> |  | fullname 'jhon snow' |
| separator | <code>string</code> | <code>&quot; &quot;</code> | separtor is string for separate initial default ' ' |

<a name="isString"></a>

## isString(string) ⇒ <code>boolean</code>
check if entry is string

**Kind**: global function  
**Returns**: <code>boolean</code> - return true if value is a string  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>any</code> | value for check is string |

<a name="randomNum"></a>

## randomNum(min, max) ⇒ <code>number</code>
generate random num beetween two number

**Kind**: global function  
**Returns**: <code>number</code> - return number generated beetween two values  

| Param | Type | Description |
| --- | --- | --- |
| min | <code>number</code> | min value |
| max | <code>number</code> | max value |

<a name="isPrime"></a>

## isPrime(number) ⇒ <code>boolean</code>
check if number is prime

**Kind**: global function  
**Returns**: <code>boolean</code> - return true if this number is a prime number  

| Param | Type | Description |
| --- | --- | --- |
| number | <code>number</code> | number for check |

<a name="even"></a>

## even(number) ⇒ <code>boolean</code>
check if number is even

**Kind**: global function  
**Returns**: <code>boolean</code> - return true if number is even  

| Param | Type | Description |
| --- | --- | --- |
| number | <code>number</code> | number for check |

<a name="odd"></a>

## odd(number) ⇒ <code>boolean</code>
check if number is odd

**Kind**: global function  
**Returns**: <code>boolean</code> - return true if number is odd  

| Param | Type | Description |
| --- | --- | --- |
| number | <code>number</code> | number for check |

<a name="isNumber"></a>

## isNumber(number) ⇒ <code>boolean</code>
check if entry is number

**Kind**: global function  
**Returns**: <code>boolean</code> - return true if value is a number  

| Param | Type | Description |
| --- | --- | --- |
| number | <code>any</code> | value for check is number |

<a name="isEqual"></a>

## isEqual(objectOne, objectTwo) ⇒ <code>boolean</code>
compare object equality

**Kind**: global function  
**Returns**: <code>boolean</code> - return true if two object is equal  

| Param | Type | Description |
| --- | --- | --- |
| objectOne | <code>object</code> | first object to compare |
| objectTwo | <code>object</code> | other object for comparaison |

<a name="clone"></a>

## clone(objectToClone) ⇒ <code>object</code>
clone object

**Kind**: global function  
**Returns**: <code>object</code> - new instance of this object  

| Param | Type | Description |
| --- | --- | --- |
| objectToClone | <code>object</code> | object to clone |

<a name="clones"></a>

## clones(objectsToClone) ⇒ <code>Array.&lt;object&gt;</code>
clone all object in array

**Kind**: global function  
**Returns**: <code>Array.&lt;object&gt;</code> - return array of object cloned  

| Param | Type | Description |
| --- | --- | --- |
| objectsToClone | <code>Array.&lt;object&gt;</code> | array of object |

<a name="isEmpty"></a>

## isEmpty(object) ⇒ <code>boolean</code>
check if object is empty

**Kind**: global function  
**Returns**: <code>boolean</code> - return true if object is empty  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>object</code> | object for check |

<a name="merge"></a>

## merge(object, objectToMerge) ⇒ <code>object</code>
merge two object

**Kind**: global function  
**Returns**: <code>object</code> - return merged object  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>object</code> | one object |
| objectToMerge | <code>object</code> | object for merge |

<a name="isObject"></a>

## isObject(object) ⇒ <code>boolean</code>
check if entry is object

**Kind**: global function  
**Returns**: <code>boolean</code> - return true if value is a object  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>any</code> | value for check is object |


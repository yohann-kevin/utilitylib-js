## Functions

<dl>
<dt><a href="#isNumber">isNumber(number)</a> ⇒ <code>boolean</code></dt>
<dd><p>check if entry is number</p>
</dd>
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
<dt><a href="#camelCaseToOtherCase">camelCaseToOtherCase(value, separator)</a> ⇒ <code>string</code></dt>
<dd><p>convert value in camelCase to kebab-case or snake_case</p>
</dd>
<dt><a href="#toKebabCase">toKebabCase(value)</a> ⇒ <code>string</code></dt>
<dd><p>convert string in camelCase to kebab-case</p>
</dd>
<dt><a href="#toSnakeCase">toSnakeCase(value)</a> ⇒ <code>string</code></dt>
<dd><p>convert string in camelCase to kebab-case</p>
</dd>
<dt><a href="#toPascalCase">toPascalCase(value)</a> ⇒ <code>string</code></dt>
<dd><p>convert string in camelCase to PascalCase</p>
</dd>
</dl>

<a name="isNumber"></a>

## isNumber(number) ⇒ <code>boolean</code>
check if entry is number

**Kind**: global function  
**Returns**: <code>boolean</code> - return true if value is a number  
**Categry**: Number  
**Since**: 1.1.0  

| Param | Type | Description |
| --- | --- | --- |
| number | <code>any</code> | value for check is number |

**Example**  
```js
isNumber(5)
// => true
```

* * *

<a name="merge"></a>

## merge(array, arrayToMerge) ⇒ <code>Array</code>
merge two array

**Kind**: global function  
**Returns**: <code>Array</code> - return array merged  
**Category**: Array  
**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | first array |
| arrayToMerge | <code>Array</code> | array for merge |

**Example**  
```js
merge([1, 2], [3, 4])
// => [1, 2, 3, 4]
```

* * *

<a name="clone"></a>

## clone(array) ⇒ <code>Array</code>
clone an array

**Kind**: global function  
**Returns**: <code>Array</code> - return new instance of array  
**Category**: Array  
**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | array for clone |

**Example**  
```js
clone([1, 2])
// => [1, 2]
```

* * *

<a name="diff"></a>

## diff(arrayOne, arrayTwo) ⇒ <code>Array</code>
Compare two array and return diff

**Kind**: global function  
**Returns**: <code>Array</code> - return array of diff between two array  
**Category**: Array  
**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| arrayOne | <code>Array</code> | first array |
| arrayTwo | <code>Array</code> | array for comparaison |

**Example**  
```js
diff([1, 2], [1, 3])
// => [2, 3]
```

* * *

<a name="isArray"></a>

## isArray(array) ⇒ <code>boolean</code>
check if entry is array

**Kind**: global function  
**Returns**: <code>boolean</code> - return true if value is a array  
**Category**: Array  
**Since**: 1.1.0  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>any</code> | value for check is array |

**Example**  
```js
isArray([1, 2])
// => true
```

* * *

<a name="removeAll"></a>

## removeAll(array, values) ⇒ <code>Array</code>
remove values in array

**Kind**: global function  
**Returns**: <code>Array</code> - return array without value to remove  
**Category**: Array  
**Since**: 1.1.0  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | array contain values for check |
| values | <code>Array</code> | array of values to remove |

**Example**  
```js
removeAll([1, 2, 2, 3, 4], [2, 4])
// => [1, 3]
```

* * *

<a name="remove"></a>

## remove(array, ...values) ⇒ <code>Array</code>
remove values in array

**Kind**: global function  
**Returns**: <code>Array</code> - return array without value to remove  
**Category**: Array  
**Since**: 1.1.0  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | array contain values for check |
| ...values | <code>any</code> | any values to remove |

**Example**  
```js
remove([1, 2, 3, 4], 1, 2)
// => [3, 4]
```

* * *

<a name="randomNum"></a>

## randomNum(min, max) ⇒ <code>number</code>
generate random num beetween two number

**Kind**: global function  
**Returns**: <code>number</code> - return number generated beetween two values  
**Category**: Number  
**Exmaple**: randomNum(1, 8)
// => 6  
**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| min | <code>number</code> | min value |
| max | <code>number</code> | max value |


* * *

<a name="isPrime"></a>

## isPrime(number) ⇒ <code>boolean</code>
check if number is prime

**Kind**: global function  
**Returns**: <code>boolean</code> - return true if this number is a prime number  
**Category**: Number  
**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| number | <code>number</code> | number for check |

**Example**  
```js
isPrime(7)
// => true
```

* * *

<a name="even"></a>

## even(number) ⇒ <code>boolean</code>
check if number is even

**Kind**: global function  
**Returns**: <code>boolean</code> - return true if number is even  
**Category**: Number  
**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| number | <code>number</code> | number for check |

**Example**  
```js
even(4)
// => true
```

* * *

<a name="odd"></a>

## odd(number) ⇒ <code>boolean</code>
check if number is odd

**Kind**: global function  
**Returns**: <code>boolean</code> - return true if number is odd  
**Category**: Number  
**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| number | <code>number</code> | number for check |

**Example**  
```js
odd(5)
// => true
```

* * *

<a name="isEqual"></a>

## isEqual(objectOne, objectTwo) ⇒ <code>boolean</code>
compare object equality

**Kind**: global function  
**Returns**: <code>boolean</code> - return true if two object is equal  
**Category**: Object  
**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| objectOne | <code>object</code> | first object to compare |
| objectTwo | <code>object</code> | other object for comparaison |

**Example**  
```js
isEqual({ name: 'test' }, { name: 'test' })
// => true
```

* * *

<a name="clone"></a>

## clone(objectToClone) ⇒ <code>object</code>
clone object

**Kind**: global function  
**Returns**: <code>object</code> - new instance of this object  
**Category**: Object  
**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| objectToClone | <code>object</code> | object to clone |

**Example**  
```js
clone({ name: 'test' })
// => { name: 'test' }
```

* * *

<a name="clones"></a>

## clones(objectsToClone) ⇒ <code>Array.&lt;object&gt;</code>
clone all object in array

**Kind**: global function  
**Returns**: <code>Array.&lt;object&gt;</code> - return array of object cloned  
**Category**: Object  
**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| objectsToClone | <code>Array.&lt;object&gt;</code> | array of object |

**Example**  
```js
clones([{ name: 'test' }])
// => [{ name: 'test' }]
```

* * *

<a name="isEmpty"></a>

## isEmpty(object) ⇒ <code>boolean</code>
check if object is empty

**Kind**: global function  
**Returns**: <code>boolean</code> - return true if object is empty  
**Category**: Object  
**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>object</code> | object for check |

**Example**  
```js
isEmpty({})
// => true
```

* * *

<a name="merge"></a>

## merge(object, objectToMerge) ⇒ <code>object</code>
merge two object

**Kind**: global function  
**Returns**: <code>object</code> - return merged object  
**Category**: Object  
**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>object</code> | one object |
| objectToMerge | <code>object</code> | object for merge |

**Example**  
```js
merge({ name: 'snow' }, { firstname: 'jhon' })
// => { name: 'snow', firstname: 'jhon' }
```

* * *

<a name="isObject"></a>

## isObject(object) ⇒ <code>boolean</code>
check if entry is object

**Kind**: global function  
**Returns**: <code>boolean</code> - return true if value is a object  
**Category**: Object  
**Exmaple**: isObject({ name: 'test' })
// => true  
**Since**: 1.1.0  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>any</code> | value for check is object |


* * *

<a name="isVowel"></a>

## isVowel(letter) ⇒ <code>boolean</code>
check if letter is vowel

**Kind**: global function  
**Returns**: <code>boolean</code> - return true if letter is vowel  
**Category**: String  
**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| letter | <code>string</code> | string letter |

**Example**  
```js
isVowel('A')
// => true
```

* * *

<a name="isVowels"></a>

## isVowels(letters) ⇒ <code>array</code>
check if letters have vowel or consumn

**Kind**: global function  
**Returns**: <code>array</code> - return array of boolean  
**Category**: String  
**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| letters | <code>array</code> | array of letters |

**Example**  
```js
isVowels(['a', 'c', 'e'])
// => [true, false, true]
```

* * *

<a name="isConsumn"></a>

## isConsumn(letter) ⇒ <code>boolean</code>
check if letter is consumn

**Kind**: global function  
**Returns**: <code>boolean</code> - return true if letter is consumn  
**Category**: String  
**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| letter | <code>string</code> | string letter |

**Example**  
```js
isConsumn('b')
// => true
```

* * *

<a name="isConsumns"></a>

## isConsumns(letters) ⇒ <code>array</code>
check if letters have consumn or vowel

**Kind**: global function  
**Returns**: <code>array</code> - return array of boolean  
**Category**: String  
**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| letters | <code>array</code> | array of letters |

**Example**  
```js
isConcumns(['a', 'b', 'c'])
// => [false, true, true]
```

* * *

<a name="getInitialName"></a>

## getInitialName(fullname, separator) ⇒ <code>string</code>
get initial in full name

**Kind**: global function  
**Returns**: <code>string</code> - return initial J S  
**Category**: String  
**Since**: 1.0.0  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| fullname | <code>string</code> |  | fullname 'jhon snow' |
| separator | <code>string</code> | <code>&quot; &quot;</code> | separtor is string for separate initial default ' ' |

**Example**  
```js
getInitialName('jhon snow', '-')
// => 'J-S'
```

* * *

<a name="isString"></a>

## isString(string) ⇒ <code>boolean</code>
check if entry is string

**Kind**: global function  
**Returns**: <code>boolean</code> - return true if value is a string  
**Category**: String  
**Since**: 1.1.0  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>any</code> | value for check is string |

**Example**  
```js
isString('test')
// => true
```

* * *

<a name="camelCaseToOtherCase"></a>

## camelCaseToOtherCase(value, separator) ⇒ <code>string</code>
convert value in camelCase to kebab-case or snake_case

**Kind**: global function  
**Returns**: <code>string</code> - return value in kebab-case or snake_case  
**Category**: String  
**Since**: 1.1.0  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value for convert |
| separator | <code>string</code> | separator beetween words |

**Example**  
```js
camelCaseToOtherCase('testTest', '_')
// => test_test
```

* * *

<a name="toKebabCase"></a>

## toKebabCase(value) ⇒ <code>string</code>
convert string in camelCase to kebab-case

**Kind**: global function  
**Returns**: <code>string</code> - return value in kebab-case  
**Category**: String  
**Since**: 1.1.0  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value for convert |

**Example**  
```js
toKebabCase('testTest')
// => test-test
```

* * *

<a name="toSnakeCase"></a>

## toSnakeCase(value) ⇒ <code>string</code>
convert string in camelCase to kebab-case

**Kind**: global function  
**Returns**: <code>string</code> - return value in kebab-case  
**Category**: String  
**Since**: 1.1.0  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value for convert |

**Example**  
```js
toSnakeCase('testTest')
// => test_test
```

* * *

<a name="toPascalCase"></a>

## toPascalCase(value) ⇒ <code>string</code>
convert string in camelCase to PascalCase

**Kind**: global function  
**Returns**: <code>string</code> - return value in PascalCase  
**Category**: String  
**Since**: 1.1.0  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value for convert |

**Example**  
```js
toPascalCase('testTest')
// => TestTest
```

* * *


## Modules

<dl>
<dt><a href="#module_Array">Array</a></dt>
<dd><p>A Array utility functions.</p>
</dd>
<dt><a href="#module_Identifier">Identifier</a></dt>
<dd><p>A Identifier module.</p>
</dd>
<dt><a href="#module_Letter">Letter</a></dt>
<dd><p>A Letter module for manage your string.</p>
</dd>
<dt><a href="#module_Number">Number</a></dt>
<dd><p>A Number utility functions.</p>
</dd>
<dt><a href="#module_Object">Object</a></dt>
<dd><p>A Object utility functions.</p>
</dd>
</dl>

<a name="module_Array"></a>

## Array
A Array utility functions.


* [Array](#module_Array)
    * [merge(array, arrayToMerge)](#exp_module_Array--merge) ⇒ <code>Array</code> ⏏
    * [clone(array)](#exp_module_Array--clone) ⇒ <code>Array</code> ⏏
    * [diff(arrayOne, arrayTwo)](#exp_module_Array--diff) ⇒ <code>Array</code> ⏏
    * [isArray(array)](#exp_module_Array--isArray) ⇒ <code>boolean</code> ⏏
    * [removeAll(array, values)](#exp_module_Array--removeAll) ⇒ <code>Array</code> ⏏
    * [remove(array, ...values)](#exp_module_Array--remove) ⇒ <code>Array</code> ⏏
    * [uniq(array)](#exp_module_Array--uniq) ⇒ <code>Array.&lt;any&gt;</code> ⏏


* * *

<a name="exp_module_Array--merge"></a>

### merge(array, arrayToMerge) ⇒ <code>Array</code> ⏏
merge two array

**Kind**: Exported function  
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

<a name="exp_module_Array--clone"></a>

### clone(array) ⇒ <code>Array</code> ⏏
clone an array

**Kind**: Exported function  
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

<a name="exp_module_Array--diff"></a>

### diff(arrayOne, arrayTwo) ⇒ <code>Array</code> ⏏
Compare two array and return diff

**Kind**: Exported function  
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

<a name="exp_module_Array--isArray"></a>

### isArray(array) ⇒ <code>boolean</code> ⏏
check if entry is array

**Kind**: Exported function  
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

<a name="exp_module_Array--removeAll"></a>

### removeAll(array, values) ⇒ <code>Array</code> ⏏
remove values in array

**Kind**: Exported function  
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

<a name="exp_module_Array--remove"></a>

### remove(array, ...values) ⇒ <code>Array</code> ⏏
remove values in array

**Kind**: Exported function  
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

<a name="exp_module_Array--uniq"></a>

### uniq(array) ⇒ <code>Array.&lt;any&gt;</code> ⏏
return array of uniq value work with array of object

**Kind**: Exported function  
**Returns**: <code>Array.&lt;any&gt;</code> - return array of uniq values  
**Category**: Array  
**Since**: 1.2.0  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array.&lt;any&gt;</code> | of values any type |

**Example**  
```js
uniq([1, 2, 4, 5, 5, 123, 123, 132])

// => [1, 2, 4, 5, 123, 132]
```

* * *

<a name="module_Identifier"></a>

## Identifier
A Identifier module.


* [Identifier](#module_Identifier)
    * [uuid()](#exp_module_Identifier--uuid) ⇒ <code>string</code> ⏏
    * [generateID(length)](#exp_module_Identifier--generateID) ⇒ <code>string</code> ⏏


* * *

<a name="exp_module_Identifier--uuid"></a>

### uuid() ⇒ <code>string</code> ⏏
generate a uuid

**Kind**: Exported function  
**Returns**: <code>string</code> - return a uuid  
**Category**: identifier  
**Since**: 2.0.0  
**Example**  
```js
uuid()
// => '557abf46-ecf7-4464-a37b-c8cc54bcffb2'
```

* * *

<a name="exp_module_Identifier--generateID"></a>

### generateID(length) ⇒ <code>string</code> ⏏
method for generate identifier with a specific length

**Kind**: Exported function  
**Returns**: <code>string</code> - return identifier  
**Category**: identifier  
**Since**: 2.0.0  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| length | <code>number</code> | <code>21</code> | length of id |

**Example**  
```js
// default id
generateID()
// => 'kMqkrcgGzfSspSfBNvwqX'

// with specific length
generateID(10)
// => 'QpNyWcYEG0'
```

* * *

<a name="module_Letter"></a>

## Letter
A Letter module for manage your string.


* [Letter](#module_Letter)
    * [isVowel(letter)](#exp_module_Letter--isVowel) ⇒ <code>boolean</code> ⏏
    * [isVowels(letters)](#exp_module_Letter--isVowels) ⇒ <code>array</code> ⏏
    * [isConsumn(letter)](#exp_module_Letter--isConsumn) ⇒ <code>boolean</code> ⏏
    * [isConsumns(letters)](#exp_module_Letter--isConsumns) ⇒ <code>array</code> ⏏
    * [getInitialName(fullname, separator)](#exp_module_Letter--getInitialName) ⇒ <code>string</code> ⏏
    * [isString(string)](#exp_module_Letter--isString) ⇒ <code>boolean</code> ⏏
    * [camelCaseToOtherCase(value, separator)](#exp_module_Letter--camelCaseToOtherCase) ⇒ <code>string</code> ⏏
    * [toKebabCase(value)](#exp_module_Letter--toKebabCase) ⇒ <code>string</code> ⏏
    * [toSnakeCase(value)](#exp_module_Letter--toSnakeCase) ⇒ <code>string</code> ⏏
    * [toPascalCase(value)](#exp_module_Letter--toPascalCase) ⇒ <code>string</code> ⏏


* * *

<a name="exp_module_Letter--isVowel"></a>

### isVowel(letter) ⇒ <code>boolean</code> ⏏
check if letter is vowel

**Kind**: Exported function  
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

<a name="exp_module_Letter--isVowels"></a>

### isVowels(letters) ⇒ <code>array</code> ⏏
check if letters have vowel or consumn

**Kind**: Exported function  
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

<a name="exp_module_Letter--isConsumn"></a>

### isConsumn(letter) ⇒ <code>boolean</code> ⏏
check if letter is consumn

**Kind**: Exported function  
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

<a name="exp_module_Letter--isConsumns"></a>

### isConsumns(letters) ⇒ <code>array</code> ⏏
check if letters have consumn or vowel

**Kind**: Exported function  
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

<a name="exp_module_Letter--getInitialName"></a>

### getInitialName(fullname, separator) ⇒ <code>string</code> ⏏
get initial in full name

**Kind**: Exported function  
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

<a name="exp_module_Letter--isString"></a>

### isString(string) ⇒ <code>boolean</code> ⏏
check if entry is string

**Kind**: Exported function  
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

<a name="exp_module_Letter--camelCaseToOtherCase"></a>

### camelCaseToOtherCase(value, separator) ⇒ <code>string</code> ⏏
convert value in camelCase to kebab-case or snake_case

**Kind**: Exported function  
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

<a name="exp_module_Letter--toKebabCase"></a>

### toKebabCase(value) ⇒ <code>string</code> ⏏
convert string in camelCase to kebab-case

**Kind**: Exported function  
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

<a name="exp_module_Letter--toSnakeCase"></a>

### toSnakeCase(value) ⇒ <code>string</code> ⏏
convert string in camelCase to kebab-case

**Kind**: Exported function  
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

<a name="exp_module_Letter--toPascalCase"></a>

### toPascalCase(value) ⇒ <code>string</code> ⏏
convert string in camelCase to PascalCase

**Kind**: Exported function  
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

<a name="module_Number"></a>

## Number
A Number utility functions.


* [Number](#module_Number)
    * [isNumber(number)](#exp_module_Number--isNumber) ⇒ <code>boolean</code> ⏏
    * _Number_
        * [randomNum(min, max)](#exp_module_Number--randomNum) ⇒ <code>number</code> ⏏
        * [isPrime(number)](#exp_module_Number--isPrime) ⇒ <code>boolean</code> ⏏
        * [even(number)](#exp_module_Number--even) ⇒ <code>boolean</code> ⏏
        * [odd(number)](#exp_module_Number--odd) ⇒ <code>boolean</code> ⏏


* * *

<a name="exp_module_Number--isNumber"></a>

### isNumber(number) ⇒ <code>boolean</code> ⏏
check if entry is number

**Kind**: Exported function  
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

<a name="exp_module_Number--randomNum"></a>

### randomNum(min, max) ⇒ <code>number</code> ⏏
generate random num beetween two number

**Kind**: Exported function  
**Returns**: <code>number</code> - return number generated beetween two values  
**Category**: Number  
**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| min | <code>number</code> | min value |
| max | <code>number</code> | max value |

**Example**  
```js
randomNum(1, 8)
// => 6
```

* * *

<a name="exp_module_Number--isPrime"></a>

### isPrime(number) ⇒ <code>boolean</code> ⏏
check if number is prime

**Kind**: Exported function  
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

<a name="exp_module_Number--even"></a>

### even(number) ⇒ <code>boolean</code> ⏏
check if number is even

**Kind**: Exported function  
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

<a name="exp_module_Number--odd"></a>

### odd(number) ⇒ <code>boolean</code> ⏏
check if number is odd

**Kind**: Exported function  
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

<a name="module_Object"></a>

## Object
A Object utility functions.


* [Object](#module_Object)
    * [isEqual(objectOne, objectTwo)](#exp_module_Object--isEqual) ⇒ <code>boolean</code> ⏏
    * [clone(objectToClone)](#exp_module_Object--clone) ⇒ <code>object</code> ⏏
    * [clones(objectsToClone)](#exp_module_Object--clones) ⇒ <code>Array.&lt;object&gt;</code> ⏏
    * [isEmpty(object)](#exp_module_Object--isEmpty) ⇒ <code>boolean</code> ⏏
    * [merge(object, objectToMerge)](#exp_module_Object--merge) ⇒ <code>object</code> ⏏
    * [isObject(object)](#exp_module_Object--isObject) ⇒ <code>boolean</code> ⏏


* * *

<a name="exp_module_Object--isEqual"></a>

### isEqual(objectOne, objectTwo) ⇒ <code>boolean</code> ⏏
compare object equality

**Kind**: Exported function  
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

<a name="exp_module_Object--clone"></a>

### clone(objectToClone) ⇒ <code>object</code> ⏏
clone object

**Kind**: Exported function  
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

<a name="exp_module_Object--clones"></a>

### clones(objectsToClone) ⇒ <code>Array.&lt;object&gt;</code> ⏏
clone all object in array

**Kind**: Exported function  
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

<a name="exp_module_Object--isEmpty"></a>

### isEmpty(object) ⇒ <code>boolean</code> ⏏
check if object is empty

**Kind**: Exported function  
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

<a name="exp_module_Object--merge"></a>

### merge(object, objectToMerge) ⇒ <code>object</code> ⏏
merge two object

**Kind**: Exported function  
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

<a name="exp_module_Object--isObject"></a>

### isObject(object) ⇒ <code>boolean</code> ⏏
check if entry is object

**Kind**: Exported function  
**Returns**: <code>boolean</code> - return true if value is a object  
**Category**: Object  
**Since**: 1.1.0  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>any</code> | value for check is object |

**Example**  
```js
isObject({ name: 'test' })
// => true
```

* * *


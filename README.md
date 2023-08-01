# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

# Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

# Usage

**Install it:**

`npm install @calvycoco/lotide`

**Require it:**

`const _ = require('@calvycoco/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

# Documentation

The following functions are currently implemented:

* `assertArraysEqual(firstArray, secondArray)`: Will take in two arrays and console.log an appropriate message to the console.
* `assertEqual(actual, expected)`: Function that takes in 2 values and returns true if they are equal and false otherwise.
* `assertObjectsEqual(actual, expected)`: Will take in two objects and console.log an appropriate message to the console.
* `countLetters(sentence)`: Function that takes in a sentence and returns a count of each of the letters in the sentence.
* `countOnly(allItems, itemsToCount)`: The function takes in a collection of items and returns a specific subset of those items.
* `eqArrays(firstArray, secondArray)`: The function takes in 2 arrays and returns true if the arrays are equal and false otherwise. The function is recursive and supports nested arrays.
* `eqObjects(object1, object2)`: Returns true if both objects have identical keys with identical values. Otherwise you get back a big fat false!
* `findKey(object, callback)`: The function takes in an object and callback and returns the first key that meets the criteria specified in callback.
* `findKeyByValue(myObject, targetValue)`: The function takes in an object and a value and returns the first key that corresponds to that value.
* `flatten(arr)`: The function takes in an array that contains elements including nested array of elements and returns a flattened version of the array.
* `head(arr)`: The function takes in an array and returns the first element in the array.
* `letterPositions(sentence)`: The function takes in a string and returns all indices of letter positions in the string.
* `map(array, callBack)`: The function takes in an array and a callback and returns a new array based on the results of the callback on each item in the array.
* `middle(arr)`: The function takes in an array and returns middle most element of the array.
* `tail(arr)`: The function takes in an array and returns everything except the first element of the array.
* `takeUntil(array, callBack)`: The function takes in an array and callback and returns a slice of the array based on the criteria specified in the callback.
* `without(origin, values)`: Will return a subset of a given array, removing unwanted elements.
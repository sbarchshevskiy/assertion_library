# Twotide

A primitve immitation of [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

## Usage

**Install it:**

`npm install @sergey.barch/twotide`

**Require it:**

`const _ = require('@sergey.barch/twotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

*  `tail`: Tail is meant to be every element except the head (first element) of the array.  
*  `middle`: Returns an array with only the middle element(s) of the provided array.
*  `assertArraysEqual` : Another function for asserting that two arrays are equal.
*  `assertEqual`: The console.assert function prints to the console when an expected outcome is not met (fails).
*  `head` : A commonly used function for arrays is to retrieve the first element from the array.
*  `assertObjectsEqual` :  This assertion function will make use of your eqObjects function for object comparison.
*  `countLetters` : This function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
*  `countOnly` : countOnly will be given an array and an object. It will return an object containing counts of everything that the input object listed.
*  `eqArrays` :  Implementation of a function that can compare two arrays for a perfect match.
*  `eqObjects` : This will take in two objects and returns true or false, based on a perfect match.  
*  `findKey` : It  takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
*  `findKeyByValue` : It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
*  `letterPositions` : Use this function to compare the letters, and their expected positions.
*  `map`: The map function will return a new array based on the results of the callback function.
*  `takeUntil`: The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.
*  `without`: Return a subset of a given array, removing unwanted elements.
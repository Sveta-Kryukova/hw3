# Utility Functions

This repository contains a collection of utility functions written in JavaScript. These functions are designed to be pure and promote immutability whenever possible.

## Functions List

### `calculateDiscountedPrice(products, discount)`

Calculate the discounted prices for a given array of products and a discount percentage.

- Parameters:
  - `products` (Array): An array of numeric values representing the prices of products.
  - `discount` (Number): The discount percentage to apply (e.g., 10 for 10% discount).

- Returns:
  - (Array): A new array with discounted prices based on the given percentage.
  - "Invalid input" if `products` is not an array or `discount` is not a number.

### `calculateTotalPrice(products)`

Calculate the total price of all products in the given array.

- Parameters:
  - `products` (Array): An array of numeric values representing the prices of products.

- Returns:
  - (Number): The total price of all products.
  - "Invalid input" if `products` is not an array.

### `getFullName(obj)`

Get the full name of a person from the given object.

- Parameters:
  - `obj` (Object): An object containing `firstName` and `lastName` properties.

- Returns:
  - (String): The full name in the format "FirstName LastName".
  - "Invalid object" if `obj` does not have both `firstName` and `lastName` properties.

### `filterUniqueWords(str)`

Filter unique words from a given text and return them sorted in alphabetical order.

- Parameters:
  - `str` (String): The input text.

- Returns:
  - (Array): An array of unique words sorted in alphabetical order.
  - "Invalid input" if `str` is not a string.

### `getAverageGrade(students)`

Get the average grade of students from the given array of student objects.

- Parameters:
  - `students` (Array): An array of student objects with `name` and `grades` properties.

- Returns:
  - (Number): The average grade of all students.
  - "Invalid input" if `students` is not an array.

### `createCounter()`

Create a closure-based counter function that increments the count on each call and returns the updated count. Each closure has its own independent count.

- Returns:
  - (Function): The counter function.

### `repeatFunction(fn, n)`

Invoke the provided function `n` times if `n` is a non-negative number. If `n` is negative, the function will be invoked indefinitely until manually stopped.

- Parameters:
  - `fn` (Function): The function to be repeated.
  - `n` (Number): The number of times to repeat the function.

- Returns:
  - (String): An empty string.

### `calculateFactorial(n)`

Calculate the factorial of a given number using recursion.

- Parameters:
  - `n` (Number): The number for which to calculate the factorial.

- Returns:
  - (Number): The factorial of `n`.
  - "Invalid input" if `n` is not a number.

### `power(base, exponent)`

Calculate the power of a given base to the exponent using recursion.

- Parameters:
  - `base` (Number): The base value.
  - `exponent` (Number): The exponent value.

- Returns:
  - (Number): The result of `base` raised to the power of `exponent`.
  - "Invalid input" if `base` or `exponent` is not a number.

### `lazyMap(arr, fn)`

Perform a lazy map operation on the given array using the provided mapping function.

- Parameters:
  - `arr` (Array): The input array.
  - `fn` (Function): The mapping function to apply to each element.

- Returns:
  - (Array): A new array with the mapped values.
  - "Invalid input" if `arr` is not an array or `fn` is not a function.

### `fibonacciGenerator()`

Generate Fibonacci numbers one at a time using lazy evaluation.

- Returns:
  - (Generator): A generator that yields Fibonacci numbers one by one.



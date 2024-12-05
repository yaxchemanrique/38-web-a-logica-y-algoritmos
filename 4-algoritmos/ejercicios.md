# Ejercicios de Algoritmos

## Ejercicios de dos punteros

### Two Sum || Suma de dos

dado un target y un arreglo ordeando de mayor a menor, encuentra un par de numeros que sumados den el target y retorna el indice de esos numeros

```js
input: [2, 4, 6, 8, 10]
target: 14
resultado = [2, 3]
```

```js
arr =  [2, 4, 6, 8, 10]

function twoSum(arr) {
  // body
}

twoSum(arr)
```

### Cuadrados de un arreglo

Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

Dado un arregl de nuemro esteros acomodados de menor a mayor, retorna un arreglo the los cuadrados de cada numero acomodados de menor a mayor.

#### Example 1

```js
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
```

#### Example 2

```js
Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
```

### Palíndromo

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

#### Example 1

``` js
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
```

#### Example 2

```js
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
```

#### Example 3

```js
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
```

### String al revés

Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

#### Example 1

```js
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
```

#### Example 2

```js
Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
```

## Ejercicios de Sliding Window

### Maximum Average Subarray I

You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

#### Example 1

```js
Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
```

#### Example 2

```js
Input: nums = [5], k = 1
Output: 5.00000
```

### Max Consecutive Ones III

Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

#### Example 1

```js
Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
```

#### Example 2

```js
Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
```

### Longest Substring Without Repeating Characters

Given a string `s`, find the length of the longest substring without repeating characters.

#### Example 1

```js
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

#### Example 2

```js
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

#### Example 3

```js
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

/***** JavaScript Programming Test *****/

// Program # 01:
/*
String Manipulation: Reverse a String
Description: Write a PHP function that reverses a given string without using built-in PHP functions like strrev() or implode().
Example Input: "Hello World!"
Expected Output: "!dlroW olleH"
*/

// Solution:
/*
const reverseString = (str) => {
    // console.log("String: ", str);

    const newArr = [];

    for (let char of str) {
        // console.log(char);
        newArr.unshift(char);
    };

    return newArr.join("");
};

const str = "Hello World!";
const output = reverseString(str);
console.log(output);
*/

// Program # 02:
/*
Write a function to determine if a given string containing just the characters '(', ')', '{', '}', '[' and ']' is valid.
A valid parentheses string is one where every open bracket has a corresponding closing bracket of the same type and they are properly nested.

// Test cases
$input1 = "()"; // true
$input2 = "()[]{}"; // true
$input3 = "(]"; // false
$input4 = "([)]"; // false
$input5 = "{[]}"; // true
*/

// Solution:

// const parenthesesData = {
//     "(": ")",
//     "{": "}",
//     "[": "]",
// };
// I did not solve this program just because concept is not clear and i can't cheat.

// Program # 03:
/*
Array Manipulation: Remove Duplicates
Description: Write a PHP function that removes duplicate values from an array while preserving the original order of elements.
Example Input: [1, 2, 3, 2, 4, 1, 5]
Expected Output: [1, 2, 3, 4, 5]
*/

// Solution:
/*
const removeDuplicates = (arr) => {
    // console.log("Array: ", arr);

    const uniqueArr = [];

    for (let item of arr) {
        // console.log(item);

        if (!uniqueArr.includes(item)) {
            uniqueArr.push(item);
        };
    };

    return uniqueArr;
};

const arr = [1, 2, 3, 2, 4, 1, 5];
const result = removeDuplicates(arr);
console.log(result);
*/
/**
 * Exercise 3: Arrays
 * run `npm run try 3` to check your work
 */

/**
 * (++) Add type to the function below to accept an array
 *        of string and return an array of numbers
 */
export function toIntArray(arr) {
    return arr.map((str) => Number(str));
}

let data1 = ["1", "2", "3", "4"];

console.log("Array of numbers ->", toIntArray(data1).concat(5));

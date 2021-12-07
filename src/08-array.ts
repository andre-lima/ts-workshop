/**
 * Array type
 * using square brackets
 */

export let someStringArray: string[]; // Or Array<string>

someStringArray = ["1", "2", "3"]; // Works

someStringArray = [1, false]; // Type 'number' is not assignable to type 'string'.

// What would an array of arrays look like? :D

let someArrayNumberArray: number[][]; // Nested arrays

someArrayNumberArray = [1, 2, 3]; // Type 'number' is not assignable to type 'number[]'.

someArrayNumberArray = [[1, 2, 3]]; // Works!

someArrayNumberArray = [[1], [1, 2], [1, 2, 3]]; // Works

// LET'S GO AHEAD WITH EXERCISE 3

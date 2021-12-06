/**
 * Exercise 2: Unknown
 * run `npm run try 2` to check your work
 */

export let unknownBoolean: unknown = false;

/**
 * (++) Use type assertion to assign an unknownBoolean to someBoolean
 */
let someBoolean: boolean = unknownBoolean;

console.log("someBoolean ->", someBoolean);

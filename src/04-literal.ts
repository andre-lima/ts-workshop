/**
 * Literal types
 * using string characters
 */

export let someLong: "LONG";

someLong = "string"; // Type '"string"' is not assignable to type '"LONG"'.

someLong = "LONG"; // Only works!

// Another way to construct String Literal types is by using 'const' keyword

let someVariable = "SOME_VALUE" as const; // "SOME_VALUE"

someVariable = "some other value?"; // Type '"some other value?"' is not assignable to type '"SOME_VALUE"'.

// LET'S GO AHEAD WITH EXERCISE 1

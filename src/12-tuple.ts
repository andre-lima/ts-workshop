/**
 * Tuple type
 * using square brackets
 */

export let someTuple: [boolean, number, string];

someTuple = [1, "string", false]; // Type 'number' is not assignable to type 'boolean'.

someTuple = [true, 100, "string"]; // Works

someTuple = [false]; // Source has 1 element(s) but target requires 3.

// LET'S GO AHEAD WITH EXERCISE 6

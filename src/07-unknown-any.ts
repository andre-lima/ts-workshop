/**
 * Unknown & Any types
 * using keywords 'unknown' and 'any'
 */

export let someUnknown: unknown;

someUnknown = "string"; // Works

someUnknown = 100; // Works

someUnknown = { prop1: "prop1" }; // Works

export let someAny: any;

someAny = "string"; // Works

someAny = 100; // Works

someAny = { prop1: "prop1" }; // Works!

/**
 *  What is the difference?
 */

// Assignments
let someString: string;

someString = someUnknown; // Type 'unknown' is not assignable to type 'string'.

someString = someAny; // Woops! This is WRONG!

/**
 * Unknown is the loosest type after before
 *
 * Tip: always try to use 'unknown' over 'any'
 */

// Use type assertion to go around it
someString = someUnknown as string;

// LET'S GO AHEAD WITH EXERCISE 2

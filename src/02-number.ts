/**
 * Number type
 * using keyword 'number'
 */

export let someNumber: number; // declaration

someNumber = 100;

someNumber = undefined; // Type 'undefined' is not assignable to type 'number'.

someNumber = "some string"; // Type '"some string"' is not assignable to type 'number'.

someNumber = Number("1"); // Works; results to '1'

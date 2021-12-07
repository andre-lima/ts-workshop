/**
 * String type
 * using keyword 'string'
 */

export let someString: string;


someString = 'some string'; // Works


someString = 100; // Type 'number' is not assignable to type 'string'.


someString = String(100); // Works


someString = String('some string?'); // Works


someString = 1.toString(); // An identifier or keyword cannot immediately follow a numeric literal.

someString = 1.0.toString(); // Works!

someString = (1.).toString(); // Works!

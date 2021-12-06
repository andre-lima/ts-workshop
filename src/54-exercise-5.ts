/**
 * Exercise 5: Union Types
 * run `npm run try 5` to check your work
 */

/**
 * (++) Modify the type 'Foo' to be either 'boolean' or 'number'
 */
type Foo = invalid;

export let someFoo: Foo;

someFoo = false;

someFoo = 100;

console.log("Foo is ->", someFoo);

/**
 * (++) Modify the type 'Bar' to be either 100 or 200
 *        and update the variable to reflect the type
 */
type Bar = invalid;

export let someBar: Bar;

someBar = 300;

console.log("Bar is ->", someBar);

/**
 * (++) Modify the type 'Baz' to be either 'SOME' or 'NONE'
 */
type Baz = invalid;

export let someBaz: Baz;

someBaz = "OPTION";

console.log("Baz is ->", someBaz);

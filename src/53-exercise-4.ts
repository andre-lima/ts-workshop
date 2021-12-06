/**
 * Exercise 4: Interfaces & Types
 * run `npm run try 4` to check your work
 */

/**
 * (++) Update the interface 'Foo' to have property 'value' as string
 */
export interface Foo {
    value: number;
}

let someFoo: Foo = {
    value: "Value of Foo!",
};

console.log("Value of someFoo ->", someFoo);

/**
 * (++) Update the type 'Bar' to have property 'foo' as type 'Foo'
 *        and update the value of 'someBar' to reflect the type
 */
type Bar = {
    foo: string;
};

let someBar: Bar = {
    foo: "string",
};

console.log("Value of someBar ->", someBar);

/**
 * (++) Define the type 'Baz' to be an alias of string
 */

let someBaz: Baz = "some string";

console.log("Baz ->", someBaz);

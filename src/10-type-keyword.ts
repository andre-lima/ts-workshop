/**
 * Defining types
 * using keyword 'type'
 */

type Foo = {
    prop1: boolean;
};

export let foo: Foo = { prop1: false }; // Same as interface

/**
 * What is the difference?
 */

/**
 * Using interface is mostly for object shaped structures
 */
type Bar = string; // An alias type

let bar: Bar; // someT5: string

bar = "some value"; // Works

// LET'S GO AHEAD WITH EXERCISE 4

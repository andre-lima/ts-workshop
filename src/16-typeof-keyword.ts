/**
 * Inferring types
 * using keyword 'typeof'
 */

export const foo = {
    title: "Some Title",
    isReady: false,
    counter: 100,
};

// Note: It's only allowed where resolves to types
export type Foo = typeof foo;

let someFoo: Foo;

// LET'S GO AHEAD WITH EXERCISE 8

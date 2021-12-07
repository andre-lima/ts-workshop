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
 *
 * https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
 *
 * For the most part, you can choose based on personal preference, and TypeScript will tell you if it needs something to
 * be the other kind of declaration. If you would like a heuristic, use interface until you need to use features from type.
 */

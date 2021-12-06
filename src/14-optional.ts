/**
 * Optional properties & arguments
 * using '?' token
 */


interface Foo {
    prop1: string | undefined;
    prop2: number;
}

export let someFoo: Foo

// Works
someFoo = {
    prop1: undefined,
    prop2: 100,
};

// Error
someFoo = { prop2: 100 }; // Property 'prop1' is missing in type '{ prop2: number; }' but required in type 'T1'.


/**
 * We might wanna drop prop1 property completely
 * or it's simply optional!
 */

interface Bar {
    prop1?: string; // (property) T2.prop1?: string | undefined
    prop2: number;
}

export let someBar: Bar;

someBar = { prop2: 100 }; // Works

someBar = { prop1: undefined, prop2: 100 }; // Also Works


/**
 * Take advantage of optional token in function arguments
 */

function fooUtil(arg: string | undefined) {

}

// Still needs the first argument :(
fooUtil(); // Expected 1 arguments, but got 0.


// Make argument optional
function barUtil(arg?: string) {

}

// Better :)
barUtil(); // arg?: string | undefined
barUtil(undefined); // Also works :)

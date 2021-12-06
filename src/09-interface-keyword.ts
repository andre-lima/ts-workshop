/**
 * Defining types
 * using keyword 'interface'
 */

interface T1 {

}

export let someT1: T1;

someT1 = {}; // Works... Duh!


interface T2 {
    prop1: string;
}

let someT2: T2;

someT2 = {}; // Property 'prop1' is missing in type '{}' but required in type 'T2'.



// Extending another interface

interface T3 extends T2 {
    prop2: T2;
}

let someT3: T3;


someT3 = {
    prop1: 'some string',
    prop2: {
        prop1: 100, // Type 'number' is not assignable to type 'string'.
    },
}

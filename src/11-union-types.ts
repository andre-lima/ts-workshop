/**
 * Union types
 * using '|' operator
 */

// Essentially means either 'this' or 'that'

type BooleanX = true | false; // infers to 'boolean' :))

export let someBooleanX: BooleanX;

someBooleanX = false;

someBooleanX = true;

type BooleanY = 0 | 1;

export let someBooleanY: BooleanY;

someBooleanY = false; // Type 'false' is not assignable to type 'BooleanY'.

someBooleanY = 0; // Works

someBooleanY = 1; // Also works

someBooleanY = 3; // Type '3' is not assignable to type 'BooleanY'.

type Mixed = string | number | boolean;

export let someMixed: Mixed;

someMixed = false;

someMixed = 100;

someMixed = "some string";

// LET'S GO AHEAD WITH EXERCISE 5

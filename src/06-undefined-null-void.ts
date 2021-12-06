/**
 * Null, Undefined & Void types
 * using keywords 'null', 'undefined' and 'void'
 */

export let someNull: null;
export let someUndefine: undefined;
export let someVoid: void;


someNull = undefined; // Type 'undefined' is not assignable to type 'null'.


someUndefine = null; // Type 'null' is not assignable to type 'undefined'.


someVoid = undefined; // No difference between undefined and void!


someVoid = null; // Type 'null' is not assignable to type 'void'.


let voidVariable = void 0; // void 0 evaluates to undefined in JS

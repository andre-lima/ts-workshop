/**
 * Exercise 6: Tuples
 * run `npm run try 6` to check your work
 */

/**
 * (++) We have the function 'foo' that returns an array.
 *        modify the types so the function returns a tuple of "[102, '204']"
 *        with no errors in typings
 */
const [first, second] = foo(102);

const someNumber: number = first * 2;
const someString: string = second.concat("04");

console.log(`204, '10204' ->`, someNumber, someString);

export function foo(input) {
    return [input, String(input)];
}

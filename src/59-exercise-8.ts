/**
 * Exercise 8
 * run `npm run try 8` to check your work
 */

/**
 * Update type OperationX using Union to define a function that
 *  1. Accept the first and second parameter as 'string' and return a tuple of '[string, number]'
 *
 *  2. Accept the first argument as 'number' and return 'string'
 *     Note in this case second argument is not needed.
 */

type OperationX = unknown;

const someOperation1: OperationX = (...args) => {
    const [first, second] = args;
    if (typeof first === "string" && typeof second === "string") {
        return [second, Number(first)];
    }
    if (typeof first === "number") {
        return String(first);
    }
    throw new TypeError("Invalid arguments");
};

console.log(`'[string, number]' ->`, someOperation1("100", "NUMBER"));

console.log(`'string' ->`, someOperation1(100));

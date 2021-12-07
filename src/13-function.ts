/**
 * Function type
 * using arrow '=>' token
 */

type Foo = () => boolean;

export let someFn: Foo;

someFn = () => {
    // Works
    return false;
};

someFn = (a: unknown) => {}; // Type '(a: unknown) => void' is not assignable to type 'Foo'.

// Using 'interface' keyword
interface Bar {
    (): string;
}

export let someBar: Bar;

someBar = () => "string";

/**
 * Take away:
 * In most cases you don't need to add types the return type of your functions
 * TypeScript infers the return type automatically
 */

export function foo() {
    // function foo(): boolean
    return false;
}

export function bar(a: string) {
    // function bar(a: string): string
    return a;
}

export function baz(a: number) {
    // function baz(a: number): string
    return a + " some string";
}

export function someVoid() {
    // function someVoid(): void
}

/**
 * Typing deconstructed arguments and tuples
 */

export function bat({ a, b }: { a: number; b: number }): [number, number] {
    return [a, b];
}

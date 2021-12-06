/**
 * Missing type and implicit any
 */


function buildFoo(arg) { // Parameter 'arg' implicitly has an 'any' type.
    return arg;
}

// Type annotation is required when TS cannot infer the type automatically

function buildBar(a: string) {
    return a;
}

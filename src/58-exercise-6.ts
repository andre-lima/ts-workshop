/**
 * Exercise 6: Functions and optional arguments
 * run `npm run try 6` to check your work
 */

/**
 * (++) Make these 3 changes:
 *       1. Add missing types to the following function to accept first argument to be custom type 'Data'
 *       2. Make property 'value' in the custom type 'Data' to be optional
 *       3. Make sure 'value' receives a default value or handles the case where no value is passed
 *       4. Add a type for the 'count' argument
 */

interface Data {
    title: string;
    value: number;
}

function buildData(sample, count) {
    return Array(count)
        .fill(null)
        .map((_, idx) => ({
            title: sample.title + ` ${idx + 1}`,
            value: sample.value + Math.random(),
        }));
}

export let sampleData = { title: "Title", value: 1000 };

console.log(buildData(sampleData, 10));

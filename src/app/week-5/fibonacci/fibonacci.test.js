const { describe, it } = require("@jest/globals");
const fibonacci = require("./fibonacci");
const exp = require("constants");

describe("Fibonacci Tests", () => {
    describe("Is every element at index i equal to the two previous elements?", () => {
        const n = 3;
        const fibonaccisUpToN = fibonacci(n);

        if (n === 3) {
            it("correctly generates the first three elements of the fibonacci sequence", () => {
                expect(fibonaccisUpToN[0]).toBe(0);
                expect(fibonaccisUpToN[1]).toBe(1);
                expect(fibonaccisUpToN[2]).toBe(1);
            });
        } else if (3 < n) {
            it("checks if the last three elements are correct", () => {
                const lastIndex = fibonaccisUpToN.length - 1;

                const lastElement = fibonaccisUpToN[lastIndex];
                const secondLastElement = fibonaccisUpToN[lastIndex - 1];
                const thirdLastElement = fibonaccisUpToN[lastIndex - 2];

                expect(lastElement).toBe(secondLastElement + thirdLastElement);
            });
        }
    });
    // remember to implemnent test for sequences with less than 3 elements
});

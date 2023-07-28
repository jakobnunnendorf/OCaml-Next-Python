const { describe, it } = require("@jest/globals");
const quadraticSolver = require("./quadraticSolver");

describe("Quadratic Solver Tests", () => {
    describe("Test for invalid input", () => {
        it.each([
            ["string"],
            [1],
            ["1", "2", "3"],
            [true, "2", 3],
            [1, 2],
            [1, 2, 3, 4],
            [1, 2],
            [0, 0, 0],
        ])(`Throw errors for invalid input: %s`, (input) => {
            expect(() => quadraticSolver(input)).toThrow();
        });
    });

    describe("Test for different number of roots", () => {
        it("Should return an empty array for 0 roots", () => {
            expect(quadraticSolver([1, 0, 1])).toEqual([]);
        });
        it("Should return correct roots for 1 root", () => {
            expect(quadraticSolver([0, 1, 0])).toEqual([0]);
            expect(quadraticSolver([1, 0, 0])).toEqual([0]);
        });
        it.each([
            { input: [1, 0, -1], expected: [1, -1] },
            { input: [-1, 0, 1], expected: [-1, 1] },
        ])("Should return %p for input %p", ({ input, expected }) => {
            expect(quadraticSolver(input).sort((a, b) => a - b)).toEqual(
                expected.sort((a, b) => a - b)
            );
        });
    });

    describe("test using decimal inputs", () => {
        it.each([
            { input: [1.1, 2.14, 3.56], expected: [-1.072, 3.018] },
            { input: [3.2, 3.5, -1.2], expected: [-1.368, 0.274] },
        ])("Should return %p for input %p", ({ input, expected }) => {
            const resultSorted = quadraticSolver(input).sort((a, b) => a - b);
            const expectedSorted = expected.sort((a, b) => a - b);
            expect(resultSorted).toEqual(expectedSorted);
        });
    });
});

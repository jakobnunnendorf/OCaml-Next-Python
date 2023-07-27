const quadraticSolver = require("./quadraticSolver");
// What are the inputs?
// (a, b, c) * (x^2, x, 1)^T = ax^2 + bx + c
// variables * base -> base doesnt change
// Therefore we are only interested in base: (a,b,c)
// input: a,b,c
// output: x1?, x2?, x3?
xtest("Throw errors for invalid input", () => {
    expect(() => quadraticSolver("string")).toThrow();
    expect(() => quadraticSolver(1)).toThrow();
    expect(() => quadraticSolver("1", "2", "3")).toThrow();
    expect(() => quadraticSolver(true, "2", 3)).toThrow();
    expect(() => quadraticSolver(1, 2)).toThrow();
    expect(() => quadraticSolver(1, 2, 3, 4)).toThrow();
    expect(() => quadraticSolver(1, 2)).toThrow();
});

test("Test base case", () => {
    expect(Object.is(quadraticSolver([0, 0, 0]), []));
});

test("Test for different number of roots", () => {
    // 0 roots
    expect(quadraticSolver([1, 0, 1])).toBe();
    // 1 root
    expect(quadraticSolver([0, 1, 0])).toBe(0);
    expect(quadraticSolver([1, 0, 0])).toBe(0);
    // 2 roots
    expect(quadraticSolver([1, 0, -1])).toBe(0);
    expect(quadraticSolver([-1, 0, 1])).toBe(0);
});

test("decimal inputs", () => {
    expect(quadraticSolver([-1.1, 2.14, 3.56])).toBeCloseTo(-1.072, 3.018);
});

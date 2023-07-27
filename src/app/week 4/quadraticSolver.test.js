const quadraticSolver = require("./quadraticSolver");
// What are the inputs?
// (a, b, c) * (x^2, x, 1)^T = ax^2 + bx + c
// variables * base -> base doesnt change
// Therefore we are only interested in base: (a,b,c)
// input: a,b,c
// output: x1?, x2?, x3?
test("Throw errors for invalid input", () => {
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
    expect(quadraticSolver([1, 0, 1])).toEqual([]); // shallow equality
    // 1 root
    // expect(quadraticSolver([0, 1, 0])).toEqual([0]);
    expect(quadraticSolver([1, 0, 0])).toEqual([0]);
    // 2 roots
    expect(quadraticSolver([1, 0, -1])).toEqual([1, -1]);
    expect(quadraticSolver([-1, 0, 1])).toEqual([-1, 1]);
});

test("decimal inputs", () => {
    const result = quadraticSolver([-1.1, 2.14, 3.56]);
    const a = result[0];
    const b = result[1];
    expect(a).toBeCloseTo(-1.072);
    expect(b).toBeCloseTo(3.018);
});

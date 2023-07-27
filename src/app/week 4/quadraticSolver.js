// -b ± √(b^2 - 4ac)) / 2a
// pq: x^2 + px + q = 0 => x1/2 = -p/2 ± √(p^2/4 - q)
function quadraticSolver(coefficientArray) {
    console.log(coefficientArray.length);
  if (coefficientArray.length !== 3) {
      throw new Error("Array must have 3 elements");
  }

    const a = coefficientArray[0];
    const b = coefficientArray[1];
    const c = coefficientArray[2];

    if (
        // base case
        a === 0 &&
        b === 0 &&
        c === 0
    ) {
        return [];
    }

    if (a !== 0) {
        const discriminant = b * b - 4 * a * c;

        if (discriminant < 0) {
            return [];
        }
        if (discriminant === 0) {
            const intermediateResult = b / (2 * a);
            return intermediateResult === 0 ? [0] : [-intermediateResult];
        }
        if (discriminant > 0) {
            const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            console.log([x1, x2]);
            return [x1, x2];
        }
    } else {
        return [-c / b];
    }
}
quadraticSolver([0, 0, 0]);

module.exports = quadraticSolver;

// node quadraticSolver.js

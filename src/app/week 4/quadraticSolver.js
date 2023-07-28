function quadraticSolver(coefficientArray) {
    if (coefficientArray.length !== 3) {
        throw new Error("Array must have 3 elements");
    }

    const [a, b, c] = coefficientArray;
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        throw new Error("Array must contain only numbers");
    }

    if (a === 0 && b === 0 && c === 0) {
        throw new Error("Infinite solutions");
    }

    if (a !== 0) {
        const discriminant = b * b - 4 * a * c;

        if (discriminant < 0) {
            return [];
        }
        if (discriminant === 0) {
            return b === 0 ? [0] : [-b / (2 * a)];
        }
        if (discriminant > 0) {
            const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            console.log([x1, x2]);
            return [x1, x2].sort();
        }
    } else {
        if (b === 0) {
            return [];
        } else return c === 0 ? [0] : [-c / b];
    }
}

module.exports = quadraticSolver;

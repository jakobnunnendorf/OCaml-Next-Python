function quadraticSolver(coefficientArray) {
    /*if( coefficientArray.length === 3)){
    throw new Error()
  }*/
    const a = coefficientArray[0];
    const b = coefficientArray[1];
    const c = coefficientArray[2];
    /*
  if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number'){
    throw new Error()
  }*/

    if (
        // base case
        a === 0 &&
        b === 0 &&
        c === 0
    ) {
        console.log([]);
        return [];
    }
}
quadraticSolver([0, 0, 0]);

module.exports = quadraticSolver;

// node quadraticSolver.js

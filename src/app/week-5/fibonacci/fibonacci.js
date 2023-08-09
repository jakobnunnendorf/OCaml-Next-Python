function fibonacci(n) {
    // take in an argument based on which we will return an output
    const fibonaccisUpToN = []; // this will store the result
    const fibonaccisUpTo3 = [0, 1, 1]; // this is the result for n = 3

    // handle cases for n=0, n=1, n=2
    

    // manipulate the array to contain the first n fibonacci numbers
    if (n === 3) {
        fibonaccisUpToN[0] = 0;
        fibonaccisUpToN[1] = 1;
        fibonaccisUpToN[2] = 1;
    }

    if (3 < n) {
        fibonaccisUpToN[0] = 0;
        fibonaccisUpToN[1] = 1;
        fibonaccisUpToN[2] = 1;

        while (fibonaccisUpToN.length < n) {
            const lastIndex = fibonaccisUpToN.length - 1;

            const lastElement = fibonaccisUpToN[lastIndex];
            const secondLastElement = fibonaccisUpToN[lastIndex - 1];

            const nextElement = lastElement + secondLastElement;
            fibonaccisUpToN.push(nextElement);

            


        }
    }

    return fibonaccisUpToN; // this returns the result
}

module.exports = fibonacci;

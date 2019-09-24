// Basic Algorithm Scripting: Factorialize a Number
// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Only integers greater than or equal to zero will be supplied to the function.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

function factorialize(num) {
    let factorial = 1;
    if (num === 1 || num === 0) {
        return 1;
    } else {
        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }
    }
    return factorial;
}

factorialize(5);
factorialize(10);
factorialize(20);
factorialize(0)
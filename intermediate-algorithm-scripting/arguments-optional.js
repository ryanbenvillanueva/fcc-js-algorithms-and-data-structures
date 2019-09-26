// Intermediate Algorithm Scripting: Arguments Optional
// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3)should return 5, and addTogether(2)should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);

// sumTwoAnd(3)returns 5.

// If either argument isn't a valid number, return undefined.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// addTogether(2, 3)should return 5.
// addTogether(2)(3)should return 5.
// addTogether("http://bit.ly/IqT6zt")should return undefined.
// addTogether(2, "3")should return undefined.
// addTogether(2)([3])should return undefined.

function addTogether() {
    function isNumber(num) {
        return typeof (num) === "number" ? num : undefined;
    }

    let a = isNumber(arguments[0]);
    let b = isNumber(arguments[1]);

    if (arguments.length === 2) {
        return a && b ? a + b : undefined;
    } else {
        if (a) {
            return function (c) {
                if (isNumber(c)) {
                    return a + c;
                } else {
                    return undefined;
                }
            };
        } else {
            return undefined;
        }
    }
}

addTogether(2, 3);
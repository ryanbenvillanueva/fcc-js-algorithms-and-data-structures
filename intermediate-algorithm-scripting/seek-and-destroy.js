// Intermediate Algorithm Scripting: Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Note
// You have to use the argumentsobject.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

function destroyer(arr) {
    let args = [];

    for (let i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
    }

    const newArr = args.shift();

    const resultArr = newArr.filter(element => !args.includes(element));

    return resultArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
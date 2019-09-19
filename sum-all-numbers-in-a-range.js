// Intermediate Algorithm Scripting: Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

// The lowest number will not always come first.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function sumAll(arr) {
    
    const num1 = arr[0];
    const num2 = arr[1];
    const maxNum = Math.max(arr[0], arr[1]);
    const minNum = Math.min(arr[0], arr[1]);
    let sum = 0;

    for (let i = minNum; i <= maxNum; i++) {
        sum += i;
    }

    return sum;

  }
  
  sumAll([1, 4]);
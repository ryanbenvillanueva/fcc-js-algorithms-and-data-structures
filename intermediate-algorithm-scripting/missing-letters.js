// Intermediate Algorithm Scripting: Missing letters
// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function fearNotLetter(str) {
    const charCodeArray = [];
    let missingLetter;
    let differenceEqualsTwo;

    for (let i = 0; i < str.length; i++) {
        charCodeArray.push(str.charCodeAt(i));
    }

    for (let j = 0; j < charCodeArray.length; j++) {
        if (charCodeArray[j + 1] - charCodeArray[j] === 2) {
            missingLetter = charCodeArray[j] + 1;
            differenceEqualsTwo = true;
        }
    }

    if (differenceEqualsTwo) {
        return String.fromCharCode(missingLetter);
    } else {
        return undefined;
    }
}
fearNotLetter("abce");
fearNotLetter("abcdefghjklmno");
fearNotLetter("stvwx");
fearNotLetter("bcdf");
fearNotLetter("abcdefghijklmnopqrstuvwxyz");
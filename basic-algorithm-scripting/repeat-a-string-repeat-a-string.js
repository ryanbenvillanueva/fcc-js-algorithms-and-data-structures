// Basic Algorithm Scripting: Repeat a String Repeat a String
// Repeat a given string str(first argument) for numtimes (second argument). Return an empty string if num is not a positive number.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

// repeatStringNumTimes("*", 3)should return "***".
// repeatStringNumTimes("abc", 3)should return "abcabcabc".
// repeatStringNumTimes("abc", 4)should return "abcabcabcabc".
// repeatStringNumTimes("abc", 1)should return "abc".
// repeatStringNumTimes("*", 8)should return "********".
// repeatStringNumTimes("abc", -2)should return "".
// The built-in repeat()-method should not be used

function repeatStringNumTimes(str, num) {
    let repeated = [];

    if (num <= 0) {
        return str = "";
    } else {
        for (let i = 1; i <= num; i++) {
            repeated.push(str);
        }
    }

    return repeated.join("");
}

repeatStringNumTimes("abc", 3);
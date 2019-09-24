// Basic Algorithm Scripting: Reverse a String
// Reverse the provided string.

// You may need to turn the string into an array before you can reverse it.

// Your result must be a string.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

function reverseString(str) {
    let arr = str.split("");
    let reversed = arr.reverse();
    str = reversed.join("");
    return str;
}

reverseString("hello");
reverseString("Howdy");
reverseString("Greetings from Earth");
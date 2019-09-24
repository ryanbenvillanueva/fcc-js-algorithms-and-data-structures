// Basic Algorithm Scripting: Mutations
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"]should return false because the string "hello" does not contain a "y".

// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

// mutation(["hello", "hey"])should return false.
// mutation(["hello", "Hello"])should return true.
// mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])should return true.
// mutation(["Mary", "Army"])should return true.
// mutation(["Mary", "Aarmy"])should return true.
// mutation(["Alien", "line"])should return true.
// mutation(["floor", "for"])should return true.
// mutation(["hello", "neo"])should return false.
// mutation(["voodoo", "no"])should return false.

function mutation(arr) {
    const arr1 = arr[0].toLowerCase().split("");
    const arr2 = arr[1].toLowerCase().split("");
    let result = [];

    for (let i = 0; i < arr2.length; i++) {
        if (arr1.includes(arr2[i])) {
            result[i] = true;
        } else {
            result[i] = false;
        }
    }
    return result.includes(false) ? false : true;
}

mutation(["hello", "hey"]);
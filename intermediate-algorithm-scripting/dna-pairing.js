// Intermediate Algorithm Scripting: DNA Pairing
// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function pairElement(str) {
    const dnaArray = str.split("");

    for (let i = 0; i < dnaArray.length; i++) {
        
        if (dnaArray[i] === "A") {
            dnaArray[i] = ["A", "T"];
        } else if (dnaArray[i] === "T") {
            dnaArray[i] = ["T", "A"];
        } else if (dnaArray[i] === "C") {
            dnaArray[i] = ["C", "G"];
        } else {
            dnaArray[i] = ["G", "C"];
        }   
    }
    return dnaArray;
}

pairElement("GCG");
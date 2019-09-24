// Intermediate Algorithm Scripting: Convert HTML Entities
// Convert the characters &, <, >, "(double quote), and '(apostrophe), in a string to their corresponding HTML entities.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function convertHTML(str) {
    let arr = str.split("");

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "&") {
            arr[i] = "&amp;";
        } else if (arr[i] === "<") {
            arr[i] = "&lt;";
        } else if (arr[i] === ">") {
            arr[i] = "&gt;";
        } else if (arr[i] === "\"") {
            arr[i] = "&quot;";
        } else if (arr[i] === "\'") {
            arr[i] = "&apos;"
        }
    }

    return arr.join("");
}

convertHTML("Dolce & Gabbana");
convertHTML("Hamburgers < Pizza < Tacos");
convertHTML("Sixty > twelve");
convertHTML('Stuff in "quotation marks"')
convertHTML("Schindler's List");
convertHTML("<>");
convertHTML("abc");
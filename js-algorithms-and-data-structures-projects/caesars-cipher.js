// JavaScript Algorithms and Data Structures Projects: Caesars Cipher
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipherthe meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// rot13("SERR PBQR PNZC")should decode to FREE CODE CAMP
// rot13("SERR CVMMN!")should decode to FREE PIZZA!
// rot13("SERR YBIR?")should decode to FREE LOVE?
// rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.

function rot13(str) { // LBH QVQ VG!
    let decoded = [];

    for (let i = 0; i < str.length; i++) {
        let num = str.charCodeAt(i);
        
        if (num >= 65 && num <= 77) {
           num += 13;
        } else if (num >= 78 && num <= 90) {
            num -= 13;
        }
        
        decoded.push(String.fromCharCode(num));
    }

    return decoded.join("");
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
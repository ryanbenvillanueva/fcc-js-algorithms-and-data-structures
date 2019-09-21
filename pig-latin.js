// Intermediate Algorithm Scripting: Pig Latin
// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

// Input strings are guaranteed to be English words in all lowercase.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function translatePigLatin(str) {
    const firstVowel = str.match(/[aeiou]/);
    const index = str.indexOf(firstVowel);
    let checkForVowels = true;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            checkForVowels = true;
        } else {
            checkForVowels = false;
        }
    }

    if (checkForVowels === true) {
        if (index > 0) {
            return (str.slice(index) + str.slice(0, index) + 'ay');
        }
        return str + 'way';

    } else {
        return str + 'ay';
    }
}

translatePigLatin("consonant");
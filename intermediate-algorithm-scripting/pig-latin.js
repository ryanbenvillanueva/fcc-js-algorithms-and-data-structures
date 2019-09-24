// Intermediate Algorithm Scripting: Pig Latin
// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

// Input strings are guaranteed to be English words in all lowercase.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function translatePigLatin(str) {
    const vowelMatch = str.match(/[aeiou]/);            // Check the string for any vowel
    const vowelIndex = str.indexOf(vowelMatch);         // Find the index of a vowel if it exists;


    if (vowelIndex === -1) {                            // When the string has no vowels
        return str + 'ay';                              // Return the string and end it with 'ay'
    }

    if (vowelIndex === 0) {                             // When the string starts with a vowel
        return str + 'way';                             // Return the string and end it with 'way'
    }

    if (vowelIndex > 0) {                               // When the string starts with a consonant
        return (str.slice(vowelIndex) + str.slice(0, vowelIndex) + 'ay');       // Return the string removing the consonant(s) and placing
    }                                                                           // it at the end before adding 'ay'
}

translatePigLatin("consonant");
translatePigLatin("california");
translatePigLatin("paragraphs");
translatePigLatin("glove");
translatePigLatin("eight");
translatePigLatin("blyth");

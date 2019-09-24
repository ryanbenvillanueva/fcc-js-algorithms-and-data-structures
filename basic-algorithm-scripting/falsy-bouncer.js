// Basic Algorithm Scripting: Falsy Bouncer
// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

// bouncer([7, "ate", "", false, 9])should return [7, "ate", 9].
// bouncer(["a", "b", "c"])should return ["a", "b", "c"].
// bouncer([false, null, 0, NaN, undefined, ""])should return [].
// bouncer([1, null, NaN, 2, undefined])should return [1, 2].

function bouncer(arr) {
    let falsy = [undefined, null, NaN, 0, "", false];

    return arr.filter(element => !falsy.includes(element));
}

bouncer([7, "ate", "", false, 9]);
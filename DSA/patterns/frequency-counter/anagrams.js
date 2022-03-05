/**
 * Given two strings, write a function to determine if the second string is an anagram of the first.
 * An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
 */

function createFrequencyCounter(str) {
    const result = {};
    for(let char of str) {
        if(!result[char]) {
            result[char] = 1;
        } else {
            result[char] += 1;
        }
    }
    return result;
}

function validAnagram(str1, str2) {
    if(str1.length !== str2.length) {
        return false;
    }
    const frequencyCounter1 = createFrequencyCounter(str1);
    const frequencyCounter2 = createFrequencyCounter(str2);
    for(let key in frequencyCounter1) {
        if(!frequencyCounter2[key] || frequencyCounter2[key] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}

// const isValid = validAnagram('', '');
// const isValid = validAnagram('aaz', 'zza');
// const isValid = validAnagram('anagram', 'nagaram');
// const isValid = validAnagram('rat', 'car');
// const isValid = validAnagram('abc', 'ab');
// console.log(isValid);
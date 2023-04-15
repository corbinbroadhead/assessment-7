const addToZero = (arr) => {
    doThey = false;
    for (let i = 0; i < arr.length; i++) {
        for (let e = 0; e < arr.length; e++) {
            if (i !== e) {
                if (arr[i] + arr[e] === 0) {
                doThey = true;
                }
            }
        }
    }
    return doThey;
}

let array1 = [12, 3, 6, -12, 29];


const start = performance.now();
console.log(addToZero(array1));
const end = performance.now();
// console.log(`Execution time: ${end - start} ms`);

// Execution time: 2.8431668281555176 ms
// Space complexity O(n)

const hasUniqueChars = (word) => { 
    for(let i = 0; i <= word.length; i++) {
        for(let j = i+1; j <= word.length; j++) {
            if(word[j] == word[i]) {
                return false;
            }
        }
    }
    return true;
}

const start1 = performance.now();
console.log(hasUniqueChars("Crows"));
const end1 = performance.now();
// console.log(`Execution time: ${end1 - start1} ms`);

// Execution time: 0.061167240142822266 ms
// Space complexity O(1)

const isPangram = (str) => {
    let strLower = str.toLowerCase();
    let strArr = strLower.split('');
    let uniqueCharCount = 0;
    let alphabetArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for (let i = 0; i < strArr.length; i++) {
        for (let j = 0; j < alphabetArr.length; j++) {
            if (strArr[i] === alphabetArr[j]) {
                uniqueCharCount += 1;
                alphabetArr.splice(j, 1);
            }
        }
    }
    if (uniqueCharCount === 26) {
        return true;
    } else {
        return false;
    }

}
const myString = 'Hello, how are you today?';
const myString1 = 'The quick brown fox jumps over the lazy dog.';
const start2 = performance.now();
console.log(isPangram(myString1));
const end2 = performance.now();
// console.log(`Execution time: ${end2 - start2} ms`);

// Execution time: 0.06691598892211914 ms
// Space complexity O(n)

const findLongestWord = (arr) => {
    let longestCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestCount) {
            longestCount = arr[i].length;
        }
    }
    return longestCount;
}
const wordArr = ['Hi', 'kangaroo', 'gerenuk', 'Lego', 'waffle'];

const start3 = performance.now();
console.log(findLongestWord(wordArr));
const end3 = performance.now();
// console.log(`Execution time: ${end3 - start3} ms`);

// Execution time: 0.05441570281982422 ms
// Space complexity O(n)
/**
 * Given an UNSORTED array, find the most frequent element in it.
 * In case of ties, print the value of the one with the smallest index.
 * Complexity: Theta(n^2)
 * @param {int} arr  | UNSORTED array of integers
 * @return {int} frequentValue | value of the most frequent element in the array
 */

function mostFrequent(arr) {

    let counter = 1;    // current count of a[i] is in the array, in each iteration of the second for loop
    let frequentValue = arr[0]; // value of the most frequent item
    let frequentCounter = 1;    // count of frequent 

    for (let i = 0; i < arr.length; i++) {
        counter = 1;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                counter++;
            }
        }
        if (counter > frequentCounter) {
            frequentCounter = counter;
            frequentValue = arr[i];
        }
    }

    return frequentValue;
}

const a = [1, 2, 4, 2, 3, 5, 100, 0, 2, 100, 100];
console.log(mostFrequent(a));
/**
 * Given an UNSORTED array, find the most frequent element in it.
 * If there are multiple elements that appear maximum number of times, print the value of the one with smallest index.
 * Transform & conqure (Instant Simplification) - first sort the array, then linearly traverse the array.
 * @param {int} arr  | UNSORTED array of integers
 * @return {int} frequentValue | value of the most frequent element in the array
 */
function mostFrequent(arr) {

    let counter = 1;    // current count of a[i] is in the array, in each iteration of the second for loop
    let frequentValue = arr[0]; // value of the most frequent item
    let frequentCounter = 1;    // count of frequent 

    // sorts integer arrays
    arr.sort(function(a, b) {
        return a - b;
    });

    console.log(arr);
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i-1]) {
            counter++;
        } else {
            if (counter > frequentCounter) {
                frequentCounter = counter;
                frequentValue = arr[i-1];
            }
            counter = 1; // to start counting a new chunk
        }   
    }
    // If last element is most frequent
    if (counter > frequentCounter) {
        frequentCounter = counter;
        frequentValue = arr[i-1];
    }

    return frequentValue;
}
const a = [1, 2, 4, 2, 3, 5, 100, 2, 100, 100];
console.log(mostFrequent(a));
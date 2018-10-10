/**
 * Given an UNSORTED array, find the most frequent element in it.
 * Transform & conqure (Instant Simplification) - first sort the array, then linearly traverse the array.
 * In case of ties, print the value of the one with the smallest index.
 * Complexity: create the map: Theta(n) traverse: Theta(n) => Theta(n)
 * @param {int} arr  | UNSORTED array of integers
 * @return {int} frequentValue | value of the most frequent element in the array
 */
function mostFrequent(arr) {

    var map = new Map();
    // create a hash table and store elements and their frequency counts as key value pairs
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            let currentVal = map.get(arr[i]);
            map.set(arr[i], currentVal + 1);
        } else {
        map.set(arr[i], 1);
        }
    }
    // traverse the hash table and print the key with maximum value.
    let frequentCounter = 0;
    let frequentValue = -1;
    for (let [key, value] of map) {
        if (value > frequentCounter) {
            frequentCounter = value;
            frequentValue = key;
        }
    }
    return frequentValue; 
}

const a = [1, 2, 4, 2, 3, 5, 100, 2, 100, 100];
console.log(mostFrequent(a));
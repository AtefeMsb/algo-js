/**
 * 167. Two Sum II - Input array is sorted
 * Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.
 * @param {number[]} numbers | sorted array
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    
    const map = new Map();

    for (let i = 0; i < numbers.length; i++) {
        let diff = target - numbers[i];
        
        if (map.has(diff)) {
            let diffIndex = map.get(diff);
            return [diffIndex + 1, i + 1];
        }
        map.set(numbers[i], i);
    }

    return null;
};

let numbers = [2,7,11,15];
let target = 9;

let result = twoSum(numbers, target);
console.log(result);
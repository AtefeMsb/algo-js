/** 
 * Given an array, rotate the array to the right by k steps,
 *  where k is non-negative.
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {

    /*
    // way 1: returning a new array
    let length = nums.length;
    let result = [];

    for (let i = 0 ; i < length; i++) {
        result [(i + k) % length] = nums[i];
    }

    return result;
    */

    /*
    // way 2: returning a new array
    let length = nums.length;
    let secondPortion = nums.slice(length - k);
    let firstPortion = nums.slice(0, length - k);

    let result = secondPortion.concat(firstPortion);
    return result;
    */

    // way 3: in place shifting
    let length = nums.length;
    let backupNums = nums.slice(0);

    for (let i = 0; i < length; i++) {
        const newIndex = (i + k) % length;
        nums[newIndex] = backupNums[i];
    }
};

let nums = [-1,-100,3,99];
let result = rotate(nums, 2);
console.log(result);

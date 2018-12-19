/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    let start = 0;
    let end = nums.length - 1;
    let middleIndex;

    while (start <= end) {

        if (start === end) {
            middleIndex = start;
        } else {
            middleIndex = Math.floor((end - start) / 2) + start;
        }

        if (target === nums[middleIndex]) { 
            return middleIndex;
        }
        // RIGHT half of the array is sorted 
        if (nums[middleIndex] <= nums[end]) {
            if (target > nums[middleIndex] && target <= nums[end]) {
                start = middleIndex + 1;
            } else {
                end = middleIndex - 1;
            }
        // LEFT half of the array is sorted 
        } else if (nums[start] <= nums[middleIndex]) {
            if (target >=  nums[start] && target < nums[middleIndex]) {
                end = middleIndex - 1;
            } else {
                start = middleIndex + 1;
            }
        }

    }

    return -1;
};

console.log(search([4,5,6,7,0,1,2], 0));
console.log(search([4,5,6,7,0,1,2], 3));


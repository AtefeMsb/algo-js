/**
 * Given an array of integers,
 * return indices of the two numbers such that they add up to a specific target.
 * @param {array} nums
 * @param {number} target
 * @return {array}  array of two indices
 */
function twoSum (nums, target) {
    let neededValue;
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        neededValue = target - nums[i];
        if (map.has(neededValue)) {
            return [map.get(neededValue), i];
        }
        map.set(nums[i], i);
    }
}

const nums = [2, 11, 9, 15, 7];
console.log(twoSum(nums, 9));

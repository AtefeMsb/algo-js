/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    
    let resultSet = new Set();
    let nums1Set = new Set(nums1);
    console.log("nums1Set", nums1Set);

    for (let num of nums2) {
        if (nums1Set.has(num)) {
            resultSet.add(num);
        }
    }

    let resultArray = [...resultSet];
    return resultArray;
};

let nums1 = [4,9,5];
let nums2 = [9,4,9,8,4];
let intersectionSet = intersection(nums1, nums2);
console.log(intersectionSet);


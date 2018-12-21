/**
 * 941. Valid Mountain Array
 * Given an array A of integers, return true if and only if it is a valid mountain array.
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {

    if (A.length < 0) {
        return false;
    }

    // walk up
    let n = A.length;
    let i = 0;
    while (i + 1 < n && A[i] < A[i+1]) {
        i++;
    }

    // makes sure peak is not first or last element
    if (i === 0 || i === n - 1) {
        return false;
    }

    // walk down
    while (i + 1 < n && A[i] > A[i+1]) {
        i++;
    }

    // makes sure all array was checked
    return i === n - 1;
};

let nums = [0,3,2,1];
let result = validMountainArray(nums);
console.log(result);
/*
An array is monotonic if it is either monotone increasing or monotone decreasing.
An array A is monotone increasing if for all i <= j, A[i] <= A[j].
An array A is monotone decreasing if for all i <= j, A[i] >= A[j].
Return true if and only if the given array A is monotonic. 
 */
/**
 * @param {number[]} A
 * @return {boolean}
 */
/*
 // first way:
var isMonotonic = function(A) {

    let monotonic = true;

    for (let i = 1; i < A.length; i++) {
        if (A[i - 1] <= A[i]) {
            continue;
        } else {
            monotonic = false;
            break;
        }
    }
    
    if (!monotonic) {
        monotonic = true;
        for (let i = 1; i < A.length; i++) {
            if (A[i - 1] >= A[i]) {
                continue;
            } else {
                monotonic = false;
                break;
            }
        }
    }
    return monotonic;
};
*/

// second way: one pass
var isMonotonic = function(A) {
    let incresing = true;
    let decresing = true;

    for (let i = 1; i < A.length; i++) {
        if (A[i - 1] > A[i]) {
            incresing = false; 
        }
        if (A[i - 1] < A[i]) {
            decresing = false; 
        }
    }

    return incresing || decresing;

}

let arr1 = [1,2,2,3];
let arr2 = [1,3,2];
let arr3 = [6,5,4,4];

console.log(isMonotonic(arr1));
console.log(isMonotonic(arr2));
console.log(isMonotonic(arr3));


/**
 * Given an array of integers A, a move consists of choosing any A[i],
 *  and incrementing it by 1.
 * Return the least number of moves to make every value in A unique.
 * Complexity O(n)
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function(A) {
    let count = 0;

    A.sort(function(a, b) {
        return a - b;
      });

    // each element should be bigger than the previous one at least by 1.
    for (let i = 0; i < A.length; i++) {
        // if smaller than previous elemnt
        if (A[i] <= A[i - 1]) {
            // add ones to the number as much asdiffrence of two numbers.
            count += A[i-1] + 1 - A[i];
            // each number needs to be at least 1 more than previous one.
            A[i] = A[i - 1] + 1;
        }
    }
    return count;
};

let A = [3,2,1,2,1,7];
let count = minIncrementForUnique(A);
console.log("count ", count);
console.log("A ", A);
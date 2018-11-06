/**
 * fibonacci: 1 1 2 3 5 . . .
 * calculate the nth number in the series
 * Memoization Solution: O(n)
 * @param {integer} n 
 * @param {array or map} memo | saves 
 */
/*
// memo: map
function fiboMemoization(num, memo) {
    memo = memo || {};
  
    if (memo[num]) return memo[num];
    if (num < 3) return 1;
  
    return memo[num];
    memo[num] = fiboMemoization(num - 1, memo) + fiboMemoization(num - 2, memo);
  }
*/
// memo: array
  function fiboMemoization(num, memo = []) {
  
    if (memo[num]) return memo[num];
    if (num < 3) return 1;
  
    return memo[num] = fiboMemoization(num - 1, memo) + fiboMemoization(num - 2, memo);
  }

console.log(fiboMemoization(6));
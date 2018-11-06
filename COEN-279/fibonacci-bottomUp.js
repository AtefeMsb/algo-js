/**
 * fibonacci: 1 1 2 3 5 . . .
 * calculate the nth number in the series
 * Bottom-up Solution: O(n)
 * @param {integer} num 
 */
function fiboBottomUp(num) {

    let bottomUp = [0, 1, 1];
    for (let i = 3; i <= num; i++) {
        bottomUp[i] = bottomUp[i - 1] + bottomUp[i - 2];
    }

    return bottomUp[num];   
}

console.log(fiboBottomUp(5));
/**
 * fibonacci: 1 1 2 3 5 . . .
 * calculate the nth number in the series
 * iterative - O(n)
 * @param {integer} num 
 */
function fibonacci(num) {
    let a = 1;
    let b = 1;
    let temp;

    if (num === 1 || num === 2) {
        return a;
    }

    while (num - 2 > 0) {
        temp = a + b;
        a = b;
        b = temp;
        num--;
    }

    return temp;
}

console.log(fibonacci(5));
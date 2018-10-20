/**
 * finding the Greatest Common Divisor (GCD) of two integers A and B.
 * Euclidean Algorithm
 * @param {integer} a
 * @param {integer} b
 * @return {integer} gcd | the greatest common divior of a and b.
 */
function gcd(a, b) {
    // base cases
    if(a === 0) { return b;}
    if(b === 0) { return a;}
    // decrease and conqure - recursion
    return gcd(b, a % b);
}

// output: 3
console.log(gcd(9, 6));
// output: 3
console.log(gcd(6, 9));
// output: 9
console.log(gcd(0, 9));

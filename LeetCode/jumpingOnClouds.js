/**
 * returns the least number of hops if c will be traversered with 1 or 2 step long steps.
 * 0 are allowed to step on. 1 are not allowed.
 * @param {int} c | a binary array 
 */
function jumpingOnClouds(c) {

    // If c (array) empty or it is falsy
    if (!c || c.length == 0) 
        { return null;}

    let position = 0;
    let hopCount = 0;

    while (position < c.length - 1) {

        if (c[position + 2] === 0) {
            position += 2;
            hopCount++;
        } else {
            position += 1;
            hopCount++;
        } 
    }

    return hopCount;
}

let binaryArr = [0, 0, 0];
console.log(jumpingOnClouds(binaryArr));
/**
 * returns a random number between min - max
 * @return {integer}
 */
function randomNumber(min, max) {

    // 0 <= num < 1
    let num = Math.random();

    num = Math.floor(num * (max - min)) + min;
    return num;
}

console.log(randomNumber(5, 100));
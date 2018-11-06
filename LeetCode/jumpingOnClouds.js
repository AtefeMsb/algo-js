function jumpingOnClouds(c) {

    // If c (array) empty or does not exist
    if (c === undefined || c.length == 0) 
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
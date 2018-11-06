/** The hike always start from level 0 and return to level 0.
 * return the number of valleys
 * U: one step up
 * D: one step down
 */

/*
function countingValleys(n, s) {
    let valleyCount = 0;

    let isValley = false;
    let elevation = 0;

    for (let char of s) {
        if (elevation === 0 && isValley) {
            valleyCount++;
            isValley = false;
        }

        if (char === 'U') {
            if (elevation === 0) {
                isValley = false;
            }
            elevation++;

        } else if (char === 'D') {
            if (elevation === 0) {
                isValley = true;
            }
            elevation--;
        }
    }

    if (elevation === 0 && isValley) {
        valleyCount++;
    }
    return valleyCount;
}
*/


function countingValleys(n, s) {

    let height = 0;
    let valleyCount = 0;

    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i);
        if (char === 'U') {
            height++;
            if (height === 0) {
                valleyCount++;
            }
        } else {
            height--;
        }
    }

    return valleyCount;
}

// U D D D U D U U
let value = countingValleys(8, "UDDDUDUUDDDUUU");
console.log(value);
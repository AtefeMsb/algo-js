function maxmin (arr, firstIndex = 0, lastIndex) {

    // check for exceptions
    if (!arr || !arr.length) {
        throw new Error('array did not exist or it was empty');
    }
  
    if (!lastIndex) {
        lastIndex = arr.length - 1;
    }

    let first = arr[firstIndex];
    let last = arr[lastIndex];

     // base condition - 1 record
    if (firstIndex === lastIndex) {
        return [first, last];
    }

    // base condition - 2 records
    if (lastIndex - firstIndex === 1) {
        // return min of 2 and max of 2
        return [
            Math.max(first, last), 
            Math.min(first,last)
        ];
    }

    // process left half - extract minA and maxA 
    let middleIndex = firstIndex + Math.floor((lastIndex - firstIndex) / 2);
    let [leftMax, leftMin] = maxmin(arr, firstIndex, middleIndex);

    // process right half - extract minB and maxB
    let [rightMax, rightMin] = maxmin(arr, middleIndex + 1, lastIndex);

    // array
    return [
        Math.max(leftMax, rightMax),
        Math.min(leftMin, rightMin)
    ]; 
}

let num = [3, 5, 100, 5, 9, 900, 55];
console.log(maxmin(num, 0, 6));
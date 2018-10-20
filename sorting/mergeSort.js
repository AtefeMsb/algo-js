/**
 * Merge Sort: using divide and conqure split array into two pices and reapet that till get to 1 item.
 * then start merging the sorted subarrays from down to up to get to the sorted array.
 * @param {array} arr   |  unsorted array
 * @return {arr} arr    |  sorted array
 */ 
function mergeSort(arr) {
    // if there is only one item in the array, it is already sorted.
    if (arr.length === 1) {
        return arr;
    }
    // divide array into two almost equally subarrays.
    const middle = Math.floor (arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);

    // solve each subarray recursively and merge their result together and RETURN the result.
    return merge (mergeSort(left), mergeSort(right) );

}
/**
 * this function merge two sorted arrays together
 * @param {array} leftArr 
 * @param {array} rightArr 
 * @returns {array} result | sorted array
 */
function merge(leftArr, rightArr) {
    let i = 0;
    let j = 0;
    let resultArr = [];

    // If none of the arrays reach to the end
    while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] <= rightArr[j]) {
            resultArr.push(leftArr[i]);
            i++;
        } else {
            resultArr.push(rightArr[j]);
            j++;
        }
    }
    // one of them would be empty at this point
    // if left array is empty, add the rest of right array to the result 
    if (i >= leftArr.length) {
        for (let k = j ; k < rightArr.length; k++) {
            resultArr.push(rightArr[k]);
        }
    } else {
        for (let k = i ; k < leftArr.length; k++) {
            resultArr.push(leftArr[k]);
        }
    }

    return resultArr;
}

let arr = [2, 4, 1, 3];
console.log(mergeSort(arr));
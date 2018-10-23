function findMax(arr) {

    if (arr.length == 1) {
        return arr[0];
    }
    let max = findMax(arr.slice(0, arr.length - 1));
    return max > arr[arr.length - 1] ? max : arr[arr.length - 1];
    
}

let a = [3, 5, 2, 6, 8, 100];
console.log(findMax(a));
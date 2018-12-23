let nums = [0, [1, 2, 3,[4, [5]]], [6, [7]], 8];

function flattenRecursive(nums) {
    let arr = [];

    for (let num of nums) {
        if (Array.isArray(num)) {
            arr = arr.concat(flatten(num));
        } else {
            arr.push(num);
        }
    }

    return arr;
}

let result = flattenRecursive(nums);
console.log(result);
let nums = [0, [1, 2, 3,[4, [5]]], [6, [7]], 8];

// use a stack 
// iterate over array from the end

function flattenIterative(nums) {
    let result = [];
    let stack = [nums];

    while (stack.length) {
        const record = stack.pop();
        if (Array.isArray(record)) {
            for (let i = record.length - 1; i >= 0; i--) {
                stack.push(record[i]);
            }
        } else {
            result.push(record);
        }
    }

    return result;
}

let result = flattenIterative(nums);
console.log(result);
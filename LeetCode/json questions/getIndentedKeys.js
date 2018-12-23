const json = require('./chalkers.json');

function isObject(obj) {
    return Object.getPrototypeOf(obj) === Object.prototype;
}

// using BFS algorithm and a Queue
function getIndentedKeys(json) {
    const keys = [];
    const queue = [json];

    while (queue.length) {
        let node = queue.shift();
        for (let key in node) {
            let record = node[key];
            // skipping the keys in prototype
            if (!node.hasOwnProperty(key)) {
                continue;
            }
            if (isObject(record)) {
                queue.push(record);
            }
            keys.push(key);
        }
    }
    return keys;
}

let result = getIndentedKeys(json);
console.log(result);
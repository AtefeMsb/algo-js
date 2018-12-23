const json = require('./chalkers.json');

function isObject(obj) {
    return Object.getPrototypeOf(obj) === Object.prototype;
}

function getLeafKeys(json) {
    const keys = [];
    const queue = [json];

    while (queue.length) {
        let node = queue.shift();
        for (let key in node) {
            let record = node[key];

            if (!node.hasOwnProperty(key)) {
                continue;
            }
            // push the key just when it is not an object
            if (isObject(record)) {
                queue.push(record);
            } else {
                keys.push(key);
            }
           
        }
    }
    
    return keys;
}               

let result2 = getLeafKeys(json);

console.log(result2);
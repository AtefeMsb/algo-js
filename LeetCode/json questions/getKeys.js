const json = require('./chalkers.json');

function isObject(obj) {
    return Object.getPrototypeOf(obj) === Object.prototype;
}

function getKeys(json) {
    const keys = [];

    for (let key in json) {
        if (json.hasOwnProperty(key) && isObject()) {
            keys.push(key);
        }
    }
    return keys;
}

let result = getKeys(json);
console.log(result);

// json.hasOwnProperty(key) && isObject()      for keys that are objects
// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    
    // gets each color from the string and then put in a map
    // var colors = ar().split(' ');
    
    // map: element: key , frequency: value
    var map = new Map();
    
    // put each color as a key in map, increment the frequency if the color already exist in map.
    for (let color of ar) {
        if(map.has(color)) {
            let currentValue = map.get(color);
            map.set(color, currentValue + 1);
        } else {
            map.set(color, 1);
        }
    }
    
    let pairCount = 0;
    
    // divide each value by 2, to find number of pairs in each color
    console.log("map.values()", map.values());
    console.log("map.keys()", map.keys());
    console.log("map.entries()", map.entries());
    
    for (let frequency of map.values()) {
        let pair = Math.floor(frequency / 2);
        pairCount += pair;
    }
    
    return pairCount;
}

let str = [10,20,20,10,10,30,50,10,20];
console.log(sockMerchant(9, str));
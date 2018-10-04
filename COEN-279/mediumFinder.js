function mediumFinder(arr) {

    let larger, smaller;
    const arrayLength = arr.length;

    for(let i = 0; i < arrayLength; i++) {

        let larger = 0;
        let smaller = 0;

        for (let j = 0; j < arrayLength; j++) {
            if (arr[j] > arr[i]) {
                larger++;   
            } else {
                smaller++;
            }
        }

        if (larger == arrayLength/2 && smaller == arrayLength - arrayLength/2)
                return arr[i]
        }
}

let fruit = ['apple', 'orange', 'pear', 'peach', 'banana'];
console.log(mediumFinder(fruit));

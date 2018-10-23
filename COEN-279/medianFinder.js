/**
 * Brute Force Solution
 * Complexity: Theta(n^2)
 * The function returns the (left) median of an unsorted array.
 * @param {string|integer} arr | unsorted array of strings or numbers
 * @returns {string|integer} arr[i] | the median of the array.
 */
function medianFinder(arr) {

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

        if (larger == Math.floor(arrayLength/2) && smaller == arrayLength - Math.floor(arrayLength/2))
                return arr[i]
        }
}

let fruit = ['a', 'bat', 'cate','mom' , 'case', 'zoo'];
console.log(medianFinder(fruit));
let num = [1, 3, 8, 0, 15];
console.log(medianFinder(num));

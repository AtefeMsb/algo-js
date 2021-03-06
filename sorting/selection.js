// swap function helper
function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

function selectionSort(arr) {

    let minIndex, temp;

    for (let i = 0; i < arr.length; i++) {

        minIndex = i;
        
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
            // swap the two elements, if the minimum isn't in the position
        if (i !== minIndex) {
                swap(arr, i, minIndex);
        }
    }

    return arr;
}
const arr = [9, 8, 1, 5, 4];
selectionSort(arr);
console.log(arr);
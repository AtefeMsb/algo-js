/**
 * Insersion Sort
 * @author Atefe Mosayebi
 * @param {Array} arr 
 */
function insertion(arr) {
    for (let i = 1; i < arr.length; i++) {
        let value = arr[i];
        let hole = i;

        while (hole > 0 && arr[hole - 1] > value) {
            arr[hole] = arr[hole - 1]; // shift values to the right
            hole--;
        }

        arr[hole] = value;
    }

    return arr;
}

const arr = [9, 8, 1, 5, 4];

insertion(arr);

console.log(arr);
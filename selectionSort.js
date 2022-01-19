//find smallest item and move it to first position- repeat this multiple time
// BIG O(n^2)
function selectionSort(arr) {
    let length = arr.length;
    for (let i = 0; i < length; i++) {
        let min = i;
        let temp = arr[i];
        for (let j = i + 1; j < length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        arr[i] = arr[min];
        arr[min] = temp
    }
    return arr;
}
const array = [4, 5, 8, 3, 1, 7, 46, 34, 24, 88, 19]
console.log(selectionSort(array));
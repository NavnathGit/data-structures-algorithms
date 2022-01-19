// BIG O - O(n^2)
function bubbleSort(arr) {
    let length = array.length;
    for (let i = 0; i < length; i++) {
        for (j = 0; j < length; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
const array = [4, 5, 8, 3, 1, 7, 46, 34, 24, 88, 19]
console.log(bubbleSort(array));
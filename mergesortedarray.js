// Merge two sroted array's
// [0,3,4,31] [4,6,30]
// O/P [0,3,4,4,6,30,31]
function mergeSortedArray(arr1, arr2) {
    const finalArray = [];
    let array1Item = arr1[0];
    let array2Item = arr2[0];
    let i = 1;
    let j = 1;
    //Check Input 
    if (arr1.length === 0) {
        return arr2;
    }
    if (arr2.length === 0) {
        return arr1;
    }
    while (array1Item || array2Item) {
        if (!array2Item || array1Item < array2Item) {
            finalArray.push(array1Item)
            array1Item = arr1[i];
            i++;
        }
        else {
            finalArray.push(array2Item)
            array2Item = arr2[j];
            j++;
        }
    }
    console.log(finalArray);
    return finalArray;
}
mergeSortedArray([0, 3, 4, 31], [4, 6, 30]);
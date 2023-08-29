
function sort(arr) {
    for (let element of arr) {
        for (let j = 0; j < arr.length-1; j++) {
            if (arr[j] > arr [j+1]) {
                let a = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = a;
            }
        }
    }
    return arr;
}
console.log(sort([1, 1, 40, -5, 10, 0]));

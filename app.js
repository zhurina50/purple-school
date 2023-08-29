const task = [1, 1, 40, -5, 10, 0];
function sort(arr) {
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = 0; j < arr.length-1; j++) {
            if (arr[j] > arr [j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}
console.log(sort(task));

const example = [1,2,3,-5,0,-10,4];

const searchPositiveNumber = (a) => a >= 0;

function arrayFiltering(initialArray, search) {
    for (let i=0; i < initialArray.length; i++) {
       if (!search(initialArray[i])) {
        initialArray.splice(i,1);
       }
    }
    return initialArray;
}

console.log(arrayFiltering(example, searchPositiveNumber));

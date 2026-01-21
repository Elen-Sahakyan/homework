function every(arr, fn) {
    const size = arr.length;

    for(let i = 0; i < size; i++) {
        if(!(isSmallerThan50(arr[i]))) {
            return false;
        }
    }
    return true;
}

const arr = [1, 4, 6, 8, 10, 15, 49];

function isSmallerThan50(value) {
    return value < 50;
}

console.log(every(arr, isSmallerThan50));






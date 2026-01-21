function indexOf(arr, elem) {
    const size = arr.length;

    for(let i = 0; i < size; i++) {
        if(arr[i] == elem) {
            return i;
        }
    }
    return -1;
}

const arr = [10, 20, 30, 40, 50];

const elem = 30;

console.log(indexOf(arr, elem));



function map(arr, fn) {
    const new_arr = [];
    const size = arr.length;

    for(let i = 0; i < size; i++) {
        new_arr[i] = fn(arr[i]);
    }
    return new_arr;
}

const arr = [11, 13, 14, 16, 19, 20];

function addTwo(value) {
    return value + 2;
}

console.log(map(arr, addTwo));
console.log(arr);

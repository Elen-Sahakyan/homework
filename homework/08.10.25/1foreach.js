function forEach(arr, fn) {
    const size = arr.length;

    for(let i = 0; i < size; i++) {
        arr[i] = fn(arr[i]);
    }
}

const arr = [1, 2, 3, 4, 5];

function toIncrement(num) {
    return ++num;
}

forEach(arr, toIncrement)

console.log(arr);

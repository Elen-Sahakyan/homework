function filter(arr, fn) {
    const new_arr = [];
    const size = arr.length;
    let j = 0;

    for(let i = 0; i < size; i++) {
        if(fn(arr[i])) {
            new_arr[j] = arr[i];
            j++;
        }
    }
    return new_arr;
}

const arr = [10, 15, 20, 22, 24, 29, 30, 31];

function devidesBy5(value) {
    if(value % 5 == 0) { return true; }
    else { return false; }
}

console.log(filter(arr, devidesBy5));

function find_idx(arr, idx) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == idx) {
            return i;
        }
    }
    return -1;
}

let numList = [3, 6, 9, 12];
let idx = 9;

console.log("The index is:", find_idx(numList, idx));

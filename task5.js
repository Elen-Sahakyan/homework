function merge_arrays(arr1, arr2) {
    let new_arr = "";
    new_arr = arr1 + arr2;
    return new_arr;
}

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

console.log("The new arr is:", merge_arrays(arr1, arr2));

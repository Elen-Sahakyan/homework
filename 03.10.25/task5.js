function merge_arrays(arr1, arr2) {
    let new_arr = [];

    for(let i = 0; i < arr1.length; i++) {
        new_arr.push(arr1[i]);
    }

    for(let i = 0; i < arr2.length; i++) {
        new_arr.push(arr2[i]);
    }

    return new_arr;
}

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

console.log("The new arr is:", merge_arrays(arr1, arr2));

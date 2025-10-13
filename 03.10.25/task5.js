function merge_arrays(arr1, arr2) {
    const new_arr = [];
    let j = 0;
    for(let i =0; i < arr1.length; i++) {
        new_arr[j] = arr1[i];
        j++;
    }

    for(let i = 0; i < arr2.length; i++) {
        new_arr[j] = arr2[i];
        j++;
    }

    return new_arr;
}

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

console.log("New arr is:", merge_arrays(arr1, arr2));

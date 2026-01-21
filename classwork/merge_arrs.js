function merge(arr1, arr2) {
    const new_arr = [];

    const size_arr1 = arr1.length;
    const size_arr2 = arr2.length;
    let i = 0;
    let j = 0;

    while(i < size_arr1 && j < size_arr2) {
        if(arr1[i] < arr2[j]) {
            new_arr.push(arr1[i]); // karanq ham el grenq arr1[i++], kogtagorci heto kmecacni
            i++;
        }
        else {
            new_arr.push(arr2[j]);
            j++;
        }
    }

    while(j < size_arr2) {
        new_arr.push(arr2[j]);
        j++;
    }
    while(i < size_arr1) {
        new_arr.push(arr1[i]);
        i++;
    }

    return new_arr;
}

const arr1 = [1, 2, 4, 5, 8];
const arr2 = [3, 4, 6, 7, 8, 9];

console.log(merge(arr1, arr2));



function arr1(arr, target) {
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === target) {
            return [i, j]; // zangvace texum stexcum arjeqavoruma
             }
        }
    }
    return [-1, -1];
}

const arr = [1, 2, 3, 5, 1, 6];
const target = 6;

console.log(arr1(arr, target));

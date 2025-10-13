function sum_is(arr) {
    let res = 0;
    for(let i = 0; i < arr.length; i++) {
        res += arr[i];
    }
    return res;
}

let arr = [10, 6, 7];

console.log("The sum is:", sum_is(arr));

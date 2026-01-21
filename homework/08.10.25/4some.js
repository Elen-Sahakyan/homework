function some(arr, fn) {
    const size = arr.length;
    for(let i = 0; i < size; i++) {
        if(i in arr) {
            if (fn(arr[i])) {
                return true;
            }
        }
    }
    return false;
}

let arr = [11, 20, 31, 41, 51];

function foo(value) {
    if(value % 2 == 0) {return true;}
    else {return false;}
}

console.log(some(arr, foo));

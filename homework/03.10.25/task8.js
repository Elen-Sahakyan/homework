function addElems (arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

let expances = [50, 21, 45, 97];

console.log("The sum of the elemnts is:", addElems(expances));

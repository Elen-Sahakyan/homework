let str = "Hello World";

function elem_counter(str) {
    let i = 0; 
    while(str[i] !== undefined) {
        i++
    }
    return i;
}

let num = elem_counter(str);

console.log("The number of the elements of the string is:", num);

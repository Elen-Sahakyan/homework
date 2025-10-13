function reverseStr(str) {
    let str1 = "";
    for(let i = str.length - 1; i >= 0; i--) {
        str1 += str[i];
    }
    return str1;
}

let str = "Hello";
let res = reverseStr(str);
console.log("The reversed str is:", res);




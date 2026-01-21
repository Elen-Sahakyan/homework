function toUppercase(str) {
    let new_str = "";
    let i = 0;
    while(str[i] != undefined) {
        let code = str.charCodeAt(i);
        if(code >= 97 && code <= 122) {
            code -= 32;
        }
        new_str += String.fromCharCode(code); //is method on string, thats why string.
        i++
    }
    return new_str;
}

let string = "hello";

console.log(toUppercase(string));

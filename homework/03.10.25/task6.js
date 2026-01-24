let str1 = "Learning JavaScript";
let str2 = "Java";

function foo(str1, str2) {
    const str1_size = str1.length;
    const str2_size = str2.length;

    for(let i = 0; i < str1_size; i++) {
        for(let j = 0; j < str2_size; j++) {
            if(str1[i] == str2[j]) {
                continue;
            }
        }
    }
}

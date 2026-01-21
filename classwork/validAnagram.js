function isAnagram(str1, str2) {
    const arr1 = new Array(26).fill(0);
    const arr2 = new Array(26).fill(0);

    for(let i = 0; i < str1.length; i++){
        const char_code = str1.charCodeAt(i) - 97; // 97 ->a-i askii-code-na
        ++arr1[char_code]; // arr-i mej tarin hamapatasxanox indexy dardznuma 1
    } 
    for(let i = 0; i < str2.length; i++) {
        const char_code = str2.charCodeAt(i) - 97;
        ++arr2[char_code];
    }

    for(let i = 0; i < 26; i++) {
        if(arr1[i] != arr2[i]) {
            return false;
        }
    }
    return true;
}

const st1 = "cat";
const st2 = "rat";

console.log(isAnagram(st1, st2));

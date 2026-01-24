/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let sum = 0;
    let res = 0;
    while(num > 0) {
        sum += num % 10;
        num /= 10;
        while(sum < 10) {
            num = sum;
        }
    }
    return num;
}

console.log(addDigits(38));









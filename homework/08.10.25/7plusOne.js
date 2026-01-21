function plusOne(digits) {
    const size = digits.length;
    let carrybit = 0;
    let i = size - 1;
        if(digits[i] + 1 > 9) {
            for(; i >= 0; i--) {
            digits[i] 
            }
        }
    digits[i] += 1;

    return digits;
};

const arr = [1, 2, 3, 4];

console.log(plusOne(arr));

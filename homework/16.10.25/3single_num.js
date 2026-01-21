const singleNumber = function(arr) {
    const size = arr.length;
    if(size == 1) {
        return arr[0];
    }
    for(let i = 0; i < size; ++i) {
        let flag = true;
        for(let j = 0; j < size; ++j) {
            if(i !== j && arr[i] === arr[j]) {
                flag = false;
                break;
            }
        }
    if(flag) {
        return arr[i];
    }          
    }      
};

const arr = [2, 2, 1, 4, 5, 1, 4];

console.log(singleNumber(arr));

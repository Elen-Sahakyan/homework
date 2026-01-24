function isEvenOrOdd(num) {
    if (num % 2 == 0) {
        return 1;
    }
    else return 0;
}

let num = 2;

if(isEvenOrOdd(num) == 1) {
    console.log("The number is even");
}
else {
    console.log("The number is odd");
}

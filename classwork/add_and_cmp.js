//Number.EPSILON -> amenapoqr tive
function foo(a, b, c) {
    return Math.abs((a + b) - c) < Number.EPSILON; //absalute numbern enq ditarkum,bbacasakan depqi hamar
}

let a = 0.1;
let b = 0.2;
let c = 0.3;

console.log(foo(a, b, c));

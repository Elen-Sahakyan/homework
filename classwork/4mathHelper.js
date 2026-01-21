class MathHelper {
    add(a, b) {
        return a + b;
    }
    sub(a, b) {
        return a - b;
    }
    div(a, b) {
        if(b == 0) {
            throw new Error('Can not devide be zero!')
        }
        return a / b >> 0;
    }
    mul(a, b) {
        return a * b;
    }
    isSimple(num) {
        for(let i = 2; i < num; ++i) {
            if(num % i === 0) {
                return false;
            }
        }
        return true;
    }
    pow(base, exp) {
        let res = 1;
        for(let i = 1; i <= exp; ++i) {
            res *= base;
        }
        return res;
    }
    factorial(num) {
        if(num <= 1) return 1;
        return num * this.factroial(num - 1); 
    }

}


const math = new MathHelper();

console.log(math.add(2, 3));

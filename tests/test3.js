//Exam test
/*
const grand = {val: 1};
const child = Object.create(grand);

const grandchild = Object.create(child);

delete child.val;

console.log(grandchild.val);
*/

/*
function* generator() {
	for(let i = 0; i < 3; i++) {
		yield i;
	}
}

const gen = generator();

console.log(gen.next().value, gen.next().value);

console.log(gen.return());

//Flanagan: chapter 6: objects
*/

//map
/*
const map = new Map();

let ObjKey = {};

map.set(ObjKey, "Object value");
map.set("key", "primitive value");

ObjKey.foo = () => "object method";

console.log(map.get(ObjKey), map.get("key"), map.size);
*/

/*
const set = new Set();

const obj1 = {a: 'same property'};

const obj2 = {a: 'same property'};

set.add(obj1);
set.add(obj2);
set.add(obj1);

console.log(set.size);
*/

/*
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);

  for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0);
  }
}

*/

/*
const obj = {
	a: 10,
	b: "hello",
}

for(let i in obj) { //prints also own properties, if enumerable
	console.log(i);
}

for(let i in obj) {
	if(!obj.hasOwnProperty(i)) { //skips inherited properties
		continue;
	}
	console.log(i);
}
*/

/*
const sym = Symbol("sym");

const obj = {
	[sym]: "-1",
	"-1": "0",
	1: "1",
	2: "2",
	"-3": "3",
	5: "4",
	4: "5",
}

console.log(Reflect.ownKeys(obj));
//console.log(Object.getOwnPropertyNames(obj));
*/
/*
const obj = { a: 1, b: 2, };
const obj2 = { c: 3, d: 3};

//for(let key of Object.keys(obj2)) {
//	obj[key] = obj2[key];
//}

console.log(obj);
console.log(Object.assign(obj, obj2, { c: 4}));
console.log(obj2);
*/
/*
const defaults = {
	age: 18,
	name: "Bob",
}

obj = {
	age: 20,
}

//Object.assign(obj, defaults);// overrides the existing props
console.log(obj);

obj = Object.assign({}, defaults, obj);//the existing props remain the same
console.log(obj);
*/

//obj = {};
//console.log(obj.toString());

/*
const a = 5, b = 10;
const obj = { a, b, };

console.log(obj);
*/
/*
const obj = {
	a: 10,
	b:  20,
}

const obj2 = {
	...obj,
	c: 4,
}

console.log(obj2);
*/

//K. Sypson: YDKJS: this and Prototypes
/*
const arr = [1, 2, 3];
arr["4"] = "foo";

console.log(arr[4]);
console.log(arr[3]);
*/

/*
const obj = {};

Object.defineProperty(obj, "a", {
	value: 10,
	writable: true, 
	configurable: false,//after config is set to false
});

Object.defineProperty(obj, "a", {
	writable: false, //we can set writable to false
});

Object.defineProperty(obj, "a", {
	writable: true, //but we can not set it to true
});
*/
/*
const arr = [1, "foo", 3];
const it = arr[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
*/
/*
function foo() {
	console.log(this.a);
}

var a = 1; //not global in node as the whole code is run in IIFE

//a = 10; //global var

function bar() {
	'use strict';
	foo();
}

bar();
*/
/*
function foo() {
	console.log(this.a);
}

const obj2 = {
	a: 100,
	foo: foo,
}

const obj1 = {
	a: 10,
	obj2: obj2,
}

obj1.obj2.foo(); //this = obj2
*/

/*
const obj = {
	[{}]: "James",
	[{}]: "Bob",
}

console.log(obj);
console.log(obj[{}]);
console.log(obj["[object Object]"]);
*/
/*
const sym = Symbol("id");

console.log(sym); // Symbol(id)
console.log(sym.description); // id
console.log(typeof sym); // symbol
*/
/*
const mp = new Map();

mp.set({}, "Bob");
mp.set({}, "James");
mp.set(1, "one");
mp.set(1, "one2");
mp.set(2, "two");

console.log(mp);

const mp2 = new Map([
	["name", "James"],
	["age", 23],
]);

console.log(mp2);
*/

/*
//K. Symspson
const obj = {
	a: 2,
}

const newObj = Object.create(obj, {
	b: {
	value: 10,
	writable: true,
	enumerable: true,
	configurable: true,
	}
})

console.log(newObj);
*/

//Flanagan - Chapter 13
/*
console.log("Hello");

setTimeout(() => {
	console.log("In setTimeout");
}, 1000);

console.log("After setTimeout");
*/
/*
let count = 0;

const ID = setInterval(() => {
	if(count === 4) {
		clearInterval(ID);
	}
	console.log("every 1 second");
	count++
}, 1000);
*/

/*
const p = new Promise((resolve, reject) => {
	reject(10);
});

console.log(p);

p.then((val) => {console.log(`value -> ${val}`);}, (err) => {console.log(`reject -> ${err}`);});
*/

/*
const p = new Promise(() => { //referanceError, resolve is not defined
	resolve(10);
})

console.log(p);
*/

/*
const p = new Promise((res, rej) => { //OK, we can name them otherwise
	res(10);
})

console.log(p);
*/

/*
const p = new Promise((resolve, reject) => {
	resolve(10);
});

//es tarberakum errore tpum enq u kode sharunakum
p.then((val) => { throw new Error("Error inside callback"); })
.catch((err) => {console.log(err);})
.then((err) => {console.log("third then");})

//es tarberakum, araj chi gnum el chainov
//p.then((val) => {throw new Error("Error");}).then((err) => {console.log("third then");})
*/

/*
const m = new Map([["one", 1], ["two", 2]]);

for(let [k, v] of m) {
	console.log(k, v);
}

console.log(...m);
console.log(...m.entries());
console.log(...m.values());
console.log(...m.keys());
*/

/*
const p = new Promise((resolve, reject) => {
	reject("bye");
});

p.then(() => {
	console.log("Hi!")
}, () => {
	console.log("Error handled");
});
*/

/*
class EvenNum {
	static [Symbol.hasInstance](value) {
		return typeof value === "number" && value % 2 === 0;
	}
}

console.log(2 instanceof EvenNum);
*/

/*
class Mlas { 
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	static [Symbol.hasInstance] = function () {
		return true;
	}
} 

const obj = {};

console.log(obj instanceof Mlas);
*/

/*
// hasInstance
class Person {
	static [Symbol.hasInstance] (obj) {
		const keys = ["name", "age"];
		const objKeys = Object.keys(obj);
		for(let i = 0; i < objKeys.length; ++i) {
			if(!keys.includes(objKeys[i])) {
				return false;
			}		
		}
		return true;
	}
}

const obj = {
	name: "Bob",
	age: 22,
};

const obj2 = {
	name: "Alice",
	age: 12,
};

console.log(obj instanceof Person);
console.log(obj2 instanceof Person);
*/

/*
//toPrimitive
const obj = {
	name: "Alice",
	age: 22,

	[Symbol.toPrimitive]: function (hint) {
		if(hint === "number") {
			return this.age;
		} else if(hint === "string") {
			return this.name;
		}
	}
}

console.log(Number(obj));
*/

/*
function* innerGen() {
	yield 1;
}

function* Primes() {
	yield 2;
	yield 3;
	console.log("2nd yield has happend, but third - not yet");
	yield 5;
	yield* innerGen(); // without () -> error, cause function is not iterable
	yield 7;
}

const it = Primes();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

console.log([...Primes()]);
*/

/*
const obj = {
	name: "James",
}


Object.defineProperty(obj, "name", {
	value: "Bob",
});

console.log(Object.getOwnPropertyDescriptors(obj));
*/

/*
//shorthand syntax in classes/objects

const obj = {
	a: 10,
	b: 20,
	c: 30,
	d: 40,

	*iter () {
		for(let key of Object.keys(this)) {
			yield key;
		}
	}
};

const it = obj.iter();
console.log([...it]);
*/

/*
class C {
	method() {}
}

const obj = new C();

console.log(obj.__proto__);
console.log(Object.getOwnPropertyNames(obj.__proto__));
console.log(Object.getOwnPropertyNames(Object.prototype));
*/

/*
const obj = {}

console.log(obj.a);
obj.a = 10;
console.log(obj.a);
console.log(obj1.a);
*/

/*
const a = {};

a.__proto__ = a;

console.log(a.isPrototypeOf(a));
console.log(Object.getPrototypeOf(a) === a);
*/

/*
console.log(Function.prototype.__proto__);
console.log(Function.__proto__ === Function.prototype);
*/

/*
function A() {}

A.prototype = A;

const obj = new A();
console.log(obj.__proto__ === A);
console.log(obj.__proto__.__proto__);
*/

/*
const o = {};

Object.defineProperty(o, "x", {
	value: 1,
	writable: true,
	configurable: true,
});

Object.defineProperty(o, "x", {
	get() { return 99; }
});

console.log(Object.getOwnPropertyDescriptor(o, "x"));
*/

/*
const sym = Symbol("a");

const obj = {
	[sym]: "hello",
}

console.log(Object.getOwnPropertySymbols(obj));
*/

/*
for(var i = 0; i < 3; i++) {
	setTimeout(() => console.log(i), 1);
	for(var i = 0; i < 3; i++) {
	setTimeout(() => console.log(i), 1);	
	}
}
*/

//task 1
/*
class MathHelper {
	static square(num) {
		return num * num;
	}

	static factorial(num) {
		if(num === 0) {
			return 1;
		}
		return num * this.factorial(num - 1);
	}

	static isPrime(num) {
		return !(num % 2);
	}

	static randomBetween(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);		
	}

}

console.log(MathHelper.square(2));
console.log(MathHelper.factorial(5));
console.log(MathHelper.isPrime(2));
console.log(MathHelper.randomBetween(3, 9));
*/

//task 2
/*
class Person {
	constructor(name) {
		this.name = name;
	}
} 

class Student extends Person {
	constructor(name, grade) {
		super(name);
		this.age = age;
	}
}
*/

/*
function Person(name) {
	this.name = name;
}

//static method
Person.sleep = function() { 
	console.log("the person sleeps");
}

Person.prototype.eat = function() {
	console.log("The person eats");
}

function Student(name, grade) {
	Person.call(this, name); // we call superclass to initialize this hear
	this.grade = grade;
}

Student.__proto__ = Person; // for static methods
Student.prototype.__proto__ = Person.prototype; 

const st = new Student("Alice", 100);

Person.sleep();
Student.sleep();
st.eat();

*/

/*
//task 7
function Calculator() {}

Calculator.prototype.add = function(a, b) {
  return a + b;
};

const calc1 = new Calculator();
const calc2 = new Calculator();

console.log(calc1.add(2, 3));
console.log(calc1.__proto__ === Calculator.prototype);
console.log(calc1.__proto__ === calc2.__proto__);

Calculator.prototype.multiply = function(a, b) {
  return a * b;
};

console.log(calc1.__proto__);


console.log(calc1.multiply(4, 5));

Calculator.prototype = {
  subtract: function(a, b) {
    return a - b;
  }
};

const calc3 = new Calculator();
console.log(calc1.subtract);
console.log(calc3.subtract(10, 3));
console.log(calc3.add);
//console.log(calc3.subtract);

console.log(Calculator.prototype);
console.log(calc3.__proto__);
*/

/*
class C {
	method() {}
}

const obj = new C();

console.log(obj.__proto__);
*/

/*
function C () {}

C.prototype.method = function() {}

const obj = {};

obj.__proto__ = C.prototype;

console.log(obj.__proto__);
*/

/*
//task 9

console.log('Start');

setTimeout(() => {
    console.log('setTimeout 1');
    Promise.resolve().then(() => console.log('Promise inside setTimeout'));
}, 0);

Promise.resolve().then(() => {
    console.log('Promise 1');
    setTimeout(() => console.log('setTimeout inside Promise'), 0);
}).then(() => {
    console.log('Promise 2');
});

setTimeout(() => {
    console.log('setTimeout 2');
}, 0);

console.log('End');
*/


/*
//task 10

console.log('Start');

setTimeout(() => {
    console.log('Timeout 1');
    setTimeout(() => {
        console.log('Nested Timeout 1');
        Promise.resolve().then(() => console.log('Promise in Nested Timeout 1'));
    }, 0);
    
    queueMicrotask(() => {
        console.log('queueMicrotask in Timeout 1');
        setTimeout(() => console.log('Timeout in queueMicrotask'), 0);
    });
}, 0);

Promise.resolve().then(() => {
    console.log('Promise 1');
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Promise with setTimeout');
            resolve();
        }, 0);
    });
}).then(() => {
    console.log('Promise 2');
    queueMicrotask(() => console.log('queueMicrotask in Promise chain'));
});

setTimeout(() => {
    console.log('Timeout 2');
}, 0);

console.log('End');
*/

/*
function* gen() {
  try {
    console.log("start");
    yield 1;
    console.log("between");
    yield 2;
    console.log("end");
  } finally {
    console.log("cleanup");
  }
}

for (const x of gen()) {
  console.log("got", x);
  break;                
}
*/

/*
setTimeout(() => {
  console.log("T");
  Promise.resolve().then(() => console.log("M inside T"));
}, 0);

Promise.resolve().then(() => console.log("M outside"));
console.log("S");
*/

/*
console.log("Sync 1");

setTimeout(() => console.log("Timeout 1"), 0);

queueMicrotask(() => console.log("Microtask 1"));

Promise.resolve().then(() => console.log("Promise 1"));

console.log("Sync 2");
*/

/*
Promise.resolve().then(() => {
    console.log("Promise A");
    queueMicrotask(() => console.log("Microtask in Promise A"));
});

queueMicrotask(() => console.log("Microtask 1"));

console.log("Sync");
*/

/*
setTimeout(() => {
    console.log("Timeout 1");
    setTimeout(() => console.log("Nested Timeout 1"), 0);
}, 0);

setTimeout(() => console.log("Timeout 2"), 0);
*/

/*
Promise.resolve().then(() => {
    console.log("Promise 1");
    setTimeout(() => console.log("Timeout in Promise"), 0);
});

setTimeout(() => console.log("Timeout 1"), 0);
*/

/*
console.log("Start");

queueMicrotask(() => console.log("Microtask 1"));

setTimeout(() => {
    console.log("Timeout 1");
    queueMicrotask(() => console.log("Microtask in Timeout 1"));
}, 0);

Promise.resolve().then(() => {
    console.log("Promise 1");
});

console.log("End");
*/

/*
console.log("A");

queueMicrotask(() => {
    console.log("B");
    Promise.resolve().then(() => {
        console.log("C");
        setTimeout(() => console.log("D"), 0);
    });
});

setTimeout(() => {
    console.log("E");
    queueMicrotask(() => {
        console.log("F");
        Promise.resolve().then(() => console.log("G"));
    });
}, 0);

Promise.resolve().then(() => {
    console.log("H");
    setTimeout(() => {
        console.log("I");
        queueMicrotask(() => console.log("J"));
    }, 0);
});

console.log("K");
*/

/*
Promise.resolve()
  .then(() => {
    console.log("A");
    return new Promise(resolve => {
      setTimeout(() => {
        console.log("B");
        resolve();
      }, 0);
    });
  })
  .then(() => {
    console.log("C");
  });

queueMicrotask(() => console.log("M"));

console.log("Sync");
*/










// Assign Implementation
/*
Object.customAssign = function(target, ...source) {
	for(let j = 0; j < source.length; ++j) {
		const keyArr = Object.keys(source[j]);
		for(let i = 0; i < keyArr.length; ++i) {
			target[keyArr[i]] = source[j][keyArr[i]];
		}
	}
}

// testing Assign
const target = {
	a: 10,
}

const source = {
	b: 20,
}

Object.customAssign(target, source);
console.log(target);
*/

// Mixin Implementations

//VARIANT I -> Object.assign
/*
const canFly = {
	fly() { console.log("flying..."); }
}

const canSwim = {
	swim() { console.log("swimming..."); }
}

class Duck {
	quack() { console.log("quacking..."); }
}

Object.assign(Duck.prototype, canFly, canSwim);

const donald = new Duck;

//testing
donald.swim();
donald.fly();
donald.quack();
*/

//VARIANT II -> functions
/*
class Duck {
	quack() { console.log("quacking..."); }
}

const canFly = (Base) => class extends Base {
	fly() { console.log("flying..."); }
}

const canSwim = (Base) => class extends Base {
	swim() { console.log("swimming..."); }
}

const extendedDuck = canFly(canSwim(Duck));//this becomes our mixin class

const donald = new extendedDuck();

//testing
donald.swim();
donald.fly();
donald.quack();
*/

//VARIANT III -> constructors

//NOT a good method, as methods are being added directly on objects
/*
const canFly = (obj) => {
	function fly() { console.log("flying..."); }
	obj["fly"] = fly;
} 

const canSwim = (obj) => {
	function swim() { console.log("swimming..."); }
	obj["swim"] = swim;
}

function Duck() { //this for the constructor is the newly created object
	canFly(this); // we pass donald to these functions, and they add the emthods on it
	canSwim(this);
}

const donald = new Duck();

//Testing
donald.fly();
donald.swim();
*/

//Abstract classes
/*
class Animal {
	constructor() {
		if(new.target === Animal) {throw new Error ("Abtract class can not be inctantiated");}
		//can also have properties
	}
	
	//at least one abstract method
	eat() { throw new Error ("Abtract method must have implemantation"); }
	//but also not abstract ones
	sleep() { console.log("Animal sleeps"); }
}

class Tiger extends Animal {
	eat() { console.log("Tiger eats"); }	
}

const t = new Tiger();
t.eat()
t.sleep();
*/

//Interface classes
/*
class Animal {
	constructor() {
		if(new.target === Animal) { throw new Error("Abtract class can not be instatiated") }
		//can NOT have properties
	}
	//all methods must be abstract
	eat() { throw new Error("Abstruct method must have implementation")}
	sleep() { throw new Error("Abstruct method must have implementation")}
}

class Tiger extends Animal {
	//MUST override all Abstract methods of the Interface
	eat() { console.log("Tiger eats"); }
	sleep() { console.log("Tiger sleeps"); }
}

const t = new Tiger();

t.eat();
t.sleep();

//new Animal(); //this causes an error
*/


//Symbol.iterator implementation
/*
const obj = {
	a: 10,
	[Symbol.iterator]: function() {
		const ourThis = this;
		const keys = Object.keys(ourThis);
		const size = keys.length;
		let i = 0;

		return {
			next: function() {
				return {
					value: ourThis[keys[i++]],
					done: i > size,
				};
			}
		};
	}
};

//const it = obj[Symbol.iterator]();

for(key of obj) {
	console.log(key);
}

//console.log(it.next());
//console.log(it.next());

*/


//Promise implementation
/*
const STATE = {
	PENDING: "pending",
	FULFILLED: "fulfilled",
	REJECTED: "rejected",
}

function resolvePromise(thenPromise, x, resolve, reject) {
	//self-resolution check
	if(thenPromise === x) {
		return reject(new TypeError("Cannot resolve promise with itself")); 
	}

	//if x is promise ore thenable object
	if(x !== null && (typeof x === "object" || typeof x === "function")) {
		let then = null;
		let called = false;

		try {
			then = x.then;
			
		} catch(err) {
			reject(err);
		}

		if(typeof then === "function") {
			try{
				then.call(
				x,
				f => {
					if(called) return;
					called = true;
					resolvePromise(thenPromise, y, resolve, reject)
				},
				r => {
					if(called) return;
					called = true;
					reject(r);
				}
				)	
			} catch(err) {
				reject(err);
			}
		} else { resolve(x); }
	} else { resolve(x); }
}


class myPromise {
	constructor(executor) {
		this.state = STATE.PENDING;
		this.value = null;
		this.reason = null;

		this.onFulfilledCallbacks = [];
		this.onRejectedCallbacks = [];

		const resolve = (value) => {
			if(this.state === STATE.PENDING) {
				this.state = STATE.FULFILLED;
				this.value = value;

				this.onFulfilledCallbacks.forEach(fn => fn());
				this.onFulfilledCallbacks = [];
				this.onRejectedCallbacks = [];
			}
		}

		const reject = (reason) => {
			if(this.state === STATE.PENDING) {
				this.state = STATE.REJECTED;
				this.reason = reason;

				this.onRejectedCallbacks.forEach(fn => fn());
				this.onRejectedCallbacks = []
				this.onFulfilledCallbacks = [];
			}
		}
	
		//try-catch-ov enq kanchum, vorpisi errori depqum kode chkangni
		try {
			executor(resolve, reject);
		} catch (err) {
			reject(err);
		}
	}

	then(onFulfilled, onRejected) {
		onFulfilled = typeof onFulfilled === "function"
			? onFulfilled
			: value => value;

		onRejected = typeof onRejected === "function"
			? onRejected
			: reason => { throw reason; };

		const thenPromise = new myPromise((resolve, reject) => {
			const handleFulfilled = () => {
				queueMicrotask(() => {
					try {
						const x = onFulfilled(this.value);
						resolvePromise(thenPromise, x, resolve, reject);
					} catch(err) {
						reject(err);
					}
				})
			}
			const handleRejected = () => {
				queueMicrotask(() => {
					try {
						const x = onRejected(this.reason);
						resolve(thenPromise, x, resolve, reject)
					} catch(err) {
						reject(err);
					}
				})
			}
			if(this.state === STATE.FULFILLED) {
				handleFulfilled();
			} else if(this.state === STATE.REJECTED) {
				handleRejected();
			} else {
				this.onFulfilledCallbacks.push(handleFulfilled);
				this.onRejectedCallbacks.push(handleRejected);
			}
		})

		return thenPromise;

	}

	catch(onRejected) {
		return this.then(null, onRejected);
	}

}

const p = new myPromise((res, rej) => res(20));

//console.log(p);

p.then(val => val + 1).then(console.log);
*/


// yield* implementation
/*
function yieldAst(iterable) {
	const iter = iterable[Symbol.iterator]();
	let {value, done} = iter.next();

	while (!done) {
		console.log(value);
		const next = iter.next();

		value = next.value;
		done = next.done;
	}
}

yieldAst("hello")
*/

/*
//call implementation

Function.prototype.myCall = function(context, ...args) {
 const tmp = Symbol("something");
 
 Object.defineProperty(context, tmp, {
  value: this,
  configurable: true,
                enumerable false;
 });
 const res = context[tmp](...args);
 delete context[tmp];
 //console.log(context);
 return res;
}


const obj = {
 a: 10,
 add: function(b) {
  return this.a + b;
 }
}

const a = obj.add;

//console.log(a(10));

console.log(a.myCall(obj, 10));
*/

/*
//apply implementation
Function.prototype.myApply = function (context, args) {
 const tmp = Symbol("something");

 Object.defineProperty(context, tmp, {
  value: this,
  configurable: true,
                enumerable false;
 });
 const res = context[tmp](...args);
 delete context[tmp];
 return res;
}

const obj = {
 a: 1,
}

function foo(b, c) {
 return this.a + b + c;
}

//foo();

console.log(foo.myApply(obj, [1, 5]));
*/

/*
//bind implementation

Function.prototype.myBind = function(context, ...some) {
 const fixedThis = this;
 return function(...args) {
  return fixedThis.apply(context, [...some, ...args])
 }
}

const obj = {
 a: 10,
}

function foo(b) {
 return this.a * b;
}

const newFoo = foo.myBind(obj, 10);

console.log(newFoo(2, 3));
*/

/*
//Object.create implementation

function CustomCreate(proto) {
	const obj = {};
	Object.setPrototypeOf(obj,proto);
	return obj;
}

function CustomCreate2(proto) {
	return { __proto__: proto };
}

const obj = CustomCreate({ x: 1, });

console.log(obj.x);
console.log(Object.getPrototypeOf(obj));

const obj2 = CustomCreate2({ y: 100, });

console.log(obj2.y);
console.log(Object.getPrototypeOf(obj2));
*/

/*
//Classes Inheritance with Constructor Function

function Animal(name) {
	this.name = name;
}

Animal.prototype.eat = function() {
	console.log(`${this.name} eats`);
} 

function Dog(name, breed) {
	Animal.call(this, name);
	this.breed = breed;
}

Object.setPrototypeOf(Dog, Animal); //for static methods to be inherited
//the same as Dog.__proto__ = Animal;

//Object.setPrototypeOf(Dog.prototype, Animal.prototype);
//kariq chka Dog.prototype.constructor = Dog, vorovhetev override chenq arel prototype-y

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog; //ete Object.create enq ogtagorcel partadir e
// hakarak depqum instance-nere vorpes constructor cuyc ktan Animal


Dog.prototype.bark = function() {
	console.log(`${this.breed} ${this.name} barks`);
}

const rex = new Dog("Rex", "Shepherd");

rex.bark();
rex.eat();

console.log(rex.constructor.name);
*/

/*
//NEW implementation

function myNew(constructor, ...args) {
	const obj = Object.create(constructor.prototype);
	const res = constructor.apply(obj, args); //constructor-y kanchum enq u this-y hxum enq obj-i vra
	return res instanceof Object ? res : obj; // contructory ete objecta ret anum, henc ed el returnk kanenq
}

function Person(name, age) {
	this.name = name;
	this.age = age;
}

const p1 = myNew(Person, "Alice", 18);

console.log(p1);

console.log(p1 instanceof Person);
*/

/*
// Cutom MAP

Array.prototype.customMap = function(fn, thisArg) {
	const newArr = [];

	for(let i = 0; i < this.length; i++) {
		if(i in this) {
			newArr.push(fn.call(thisArg, this[i], i, this));
		//thisArg -> sets this inside the callback
		//this[i] -> is the value
		//i -> index
		//this -> is the array itself
		}
	}

	return newArr;
}

const arr = [1, 2, 3, 4, 5];
const obj = {
	a: 0,
}

const newAr = arr.customMap(function(x) {
	return x * this.a;
}, obj);

console.log(newAr);
*/


/*
// Custom SOME

Array.prototype.customSome = function(fn, thisArg) {
	for(let i = 0; i < this.length; i++) {
		if(i in this) {
			if(fn.call(thisArg, this[i], i, this)) {
				return true;
			}
		}
	}
	return false;
}

const arr = [1, 2, 3];

console.log(arr.customSome((x) => {
	return x === 10;
}));
*/

/*
//forEach Implementation

Array.prototype.customEach = function(fn, thisArg) {
	for(let i = 0; i < this.length; i++) {
		if(i in this) {
			fn.call(thisArg, this[i], i, this);
		}
	}
}

const arr = [1, 2, 3, 4];

arr.customEach((x, i) => {
	arr[i] = x * 2;
});

console.log(arr);
*/

/*
//Every implementation

Array.prototype.customEvery = function (fn, thisArg) {
	for(let i = 0; i < this.length; i++) {
		if(i in this) {
			if(!(fn.call(thisArg,this[i], i, this))) {
				return false;
			}
		}
	}
	return true;
}
*/


/*
//filter implementation

Array.prototype.customFilter = function (fn, thisArg) {
	const arr = [];
	for(let i = 0; i < this.length; i++) {
		if(i in this) {
			if(fn.call(thisArg, this[i], i, this)) {
				arr.push(this[i]);
			}
		}
	}
	return arr;
}


*/





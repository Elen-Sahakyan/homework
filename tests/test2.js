/*
const arr = [1, 2, 3, 4];

arr.prop = "property";

for(key in arr) {
	console.log(arr[key]);
}

*/

/*
function foo(a) {
eval("a = a + 10");
console.log(a);
}
foo(5);
*/

/*
function foo() {
eval("var x = 10");
console.log(x);
}
foo();
*/

/*
var x = 5;
function test() {
eval("var x = 100");
}
test();
console.log(x);
*/

/*
"use strict";
let a = 10;
eval("a = 30");
console.log(a);
*/


/*
let a = 10;
eval("a = 20");
console.log(a);
*/

/*
var a = 1;
const obj = {
a: 2,
f: function () {
return function () {
console.log(this.a);
};
}
};
const fn = obj.f();
fn();
*?

/*
var a = 1;
const obj = {
a: 2,
f: function () {
return () => {
console.log(this.a);
};
}
};
const fn = obj.f();
fn();
*/


/*
const foo = () => console.log(this.val);
const bar = foo.bind({ val: 10 });
bar();
*/


/*
const obj = {
x: 10,
getX() {
return this.x;
}
};
const y = {
x: 50,
getX: obj.getX
};
const fn = y.getX;
console.log(fn());
*/


/*
function test() {
return {
name: "A",
print: function () {
console.log(this.name);
}

};
}
const a = test();
const p = a.print;
p();
*/

/*
var length = 4;
function fn() {
console.log(this.length);
}
const o = {
length: 5,
method(...args) {
args[0]();
}
};
o.method(fn, 1, 2);
*/


/*
function fn() {
console.log(this.length);
}
const obj = {
length: 5,
method(fn) {
fn();
}
};
obj.method(fn);
*/


/*
function B() {
this.v = 77;
}
B
.prototype.show = () => {
console.log(this.v);
};
new B().show();
*/

/*
function A() {
this.v = 10;
}
A
.prototype.show = function () {
console.log(this.v);
};
const a = new A();
const method = a.show;
method();
*/


/*
const obj = {
arr: [1, 2, 3],
sum() {
return this.arr.map(function (v) {
return v + this.inc;
}, { inc: 5 });
}
};
console.log(obj.sum());
*/

/*
const obj = {
count: 0,
inc() {
setTimeout(function () {
console.log(++this.count);
}.bind(this), 0);
}
};
obj.inc();
*/


/*
const obj = {
count: 0,
inc() {
setTimeout(function () {
console.log(this.count);
}, 0);
}
};
obj.inc();
*/


/*
class Test {
x = 10;
static x = 20;
show() {
console.log(this.x);
}
static show() {
console.log(this.x);
}
}
const t = new Test();
t.show();
Test.show();
*/

/*
class A {
constructor() {
this.x = 10;
}
show() {
console.log(this.x);
}
}
const f = new A().show;
f();
*/

/*
function User() {
this.name = "Alice";
}
const u = User();
console.log(u);
console.log(name);
*/


/*
var x = 100;
const obj = { x: 200 };
const foo = () => console.log(this.x);
foo.call(obj);
*/

/*
function Person() {
this.age = 20;
setTimeout(() => {
console.log(this.age);
}, 0);
}
new Person();
*/

/*
function Person() {
this.age = 20;
setTimeout(function () {
console.log(this.age);
}, 0);
}
new Person();
*/


/*
const obj = {
x: 10,
show() {
const inner = () => console.log(this.x);
inner();
}
};
obj.show();
*/


/*
const obj = {
x: 10,
show: () => {
console.log(this.x);
}
};
obj.show();
*/


/*
function foo() {
console.log(this.v);
}
const a = foo.bind({ v: 1 });
const b = a.bind({ v: 2 });
b();
*/

/*
const user = {
age: 25,
print() {
console.log(this.age);
}
};
user.print.call({ age: 99 });
*/

/*
function sum() {
return this.a + this.b;
}
const obj = { a: 10, b: 20 };
const f = sum.bind(obj);
console.log(f());
console.log(sum());
*/

/*
function foo() {
console.log(this.x);
}
const a = { x: 1 };
const b = { x: 2 };
foo.call(a);
foo.call(b);
foo();
*/


/*
let obj = {
x: 100,
inner: {
x: 200,
print() {
console.log(this.x);
}
}
};
const p = obj.inner.print;
p();
*/

/*
const user = {
name: "John",
show() {
console.log(this.name);
}
};
const fn = user.show;
fn();
*/


/*
const obj = {
a: 5,
show() {
console.log(this.a);
}
};
obj.show();
*/

/*
"use strict";
var a = 20;
function test() {
console.log(this.a);
}
test();
*/

/*
function foo() {
console.log(this.a);
}
var a = 10;
foo();
*/

/*
"use strict";
function foo() {
console.log(this);
}
foo();
*/


//tasks from prototypes
/*
//task1
const a = { x: 1 };
const b = { y: 2 };
const c = { z: 3 };

//b.__proto__ = a; //legacy
//c.__proto__ = b;

Object.setPrototypeOf(b, a; //skzbum nshum enq childe heto cnoxe

Object.setPrototypeOf(c, b);

//console.log(c.x, c.y, c.z);

console.log(Object.getPrototypeOf(b));

console.log(Object.getPrototypeOf(c));
*/

//task2
/*
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
//task3

const obj = {};

obj.key1 = 100;

Object.defineProperty(obj, "key2", {
	value: 1000,
	writable: true,
	enumerable: true,
	configurable: true,
});

console.log(Object.keys(obj)); //iterate a anum, non-enumerable-nere cuyc chi talis

console.log(Object.getOwnPropertyNames(obj));
*/

/*
//task7

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

//Object.setPrototypeOf(Dog.prototype, Animal.prototype);//kariq chka Dog.prototype.constructor = Dog, nuyn objne

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

//task8

console.log(Dog.prototype.constructor === Dog);//true, manual arel em
console.log(Animal.prototype.constructor === Animal); //true
console.log(Dog.__proto__ === Animal); //true, qani vor manual set em arel
console.log(Object.getPrototypeOf(Dog));//Function Animal
*/

/*
//task9

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
//task 10

class Car {
	drive() {}
}

console.log(Car.prototype);
console.log(Object.getOwnPropertyNames(Car));
console.log(Object.getOwnPropertyDescriptors(Car));
*/

/*
//task11
class Person {
	walk() {
		console.log("The person walks");
	}
}

class Student extends Person {
	study() {
		console.log("The student studies");
	}	
}

const std = new Student();

std.study();
std.walk();

console.log(Object.getPrototypeOf(Student));
console.log(Object.getPrototypeOf(Student.prototype));
console.log(Student.prototype.__proto__ === Person.prototype);
console.log(Object.getOwnPropertyNames(Student.prototype.__proto__));
*/

/*
//task12
function Vehicle(name) {
	this.name = name;
}

Vehicle.prototype.transport = function () {
	console.log("The Vehicle is for transportation");
}

function Car(name, model) {
		Vehicle.call(this, name);
		this.model = model;
}

Object.setPrototypeOf(Car, Vehicle);
Object.setPrototypeOf(Car.prototype, Vehicle.prototype);

Car.prototype.ride = function () {
	console.log("The car is riding");
}

const bmw = new Car("BMW", "E60");

bmw.transport();
bmw.ride();
*/

/*
class Vehicle {
	constructor(name) {
		this.name = name;
	}
	
	transport() { console.log("The Vehicle is for transportation"); }

}

class Car extends Vehicle {	
	constructor(name, model) {
		super(name);
		this.model = model;
	}

	ride() { console.log("The car is riding"); }

}

const bmw = new Car("BMW", "E60");

bmw.transport();
bmw.ride();
*/

/*
class C {
	method() {}
}

const obj = new C;

console.log(obj.__proto__);

console.log(Object.getOwnPropertyNames(obj.__proto__));
*/

/*
function A() {}
A.prototype.val = 42;

A.staticVal = 100;

const a = new A();

console.log(a.staticVal);
console.log(A.staticVal);
*/

/*
'use strict';
const obj = {};

Object.defineProperty(obj, "x", {
  value: 10,
  writable: true,
  configurable: true,
  enumerable: false
});

Object.defineProperty(obj, "x", {
  get() { return 99; }
});

console.log(obj.x);
*/

/*
class Parent {
  say() { return "parent"; }
}

class Child extends Parent {
  say() {
    return super.say() + " + child";
  }
}
console.log(new Child().say());
*/

/*
 function A() {}
A.count = 0;

function B() {}
B.__proto__ = A;
console.log(B.count);
*/

/*
class X {
  static val = 5;
  constructor() { this.val = 2; }
}
const x = new X();
console.log(x.val);
console.log(X.val);
*/

/*
const base = { a: 1 };
const obj = Object.create(base);
obj.b = 2;

console.log(obj.a, obj.b);
*/

/*
function User() {}
User.prototype.get = function() { return "instance"; };
User.get = function() { return "static"; };

const u = new User();

console.log(u.get());
console.log(User.get());
console.log(User.prototype.get());
*/

/*
console.log(Function.__proto__ === Function.prototype);
console.log(Object.__proto__ === Function.prototype);
*/

/*
'use strict';

function A() {}
Object.preventExtensions(A);

A.x = 10;
console.log(A.x);
*/

/*
const obj = {};
Object.defineProperty(obj, "x", {
  value: 1,
  writable: false,
  configurable: true
});

obj.x = 100;
console.log(obj.x);
*/

/*
class A { }
class B extends A { }

console.log(Object.getPrototypeOf(B) === A);
console.log(Object.getPrototypeOf(B.prototype) === A.prototype);
*/

/*
class A {
  constructor() {
    this.val = 1;
  }
}
class B extends A {
  constructor() {
    super();
    this.val = 2;
  }
}
console.log(new B().val);
*/

/*
console.log(Object.prototype.__proto__);
console.log(Function.prototype.__proto__);
console.log(Function.__proto__ === Function.prototype);
console.log(Object.__proto__ === Function.prototype);
*/

/*
function A() {}
A.prototype = A;

const obj = new A();
console.log(obj.__proto__ === A);
console.log(obj.__proto__.__proto__);
*/

/*
function A() {}
A.prototype.x = 10;

const obj = new A();
obj.x = 20;

delete obj.x;
console.log(obj.x);
*/

/*
const o = {};
Object.defineProperty(o, "x", {
  value: 1,
  writable: true,
  configurable: true
});

Object.defineProperty(o, "x", {
  get() { return 99; }
});

console.log(Object.getOwnPropertyDescriptor(o, "x"));
*/

/*
const obj = {
	x: 10,
	method() { console.log(this) }
}

Function.prototype.myC = function(obj) {
	obj.tmp = this;
	const res = obj.tmp();
	delete obj.tmp;
	return res;
}

const f = obj.method;

f.myC({ x: 10, });
*/

/*
'use strict'

const obj = {
	x: 10,
}

const method = () => {
	console.log(this);
}

method.call(obj);
*/

/*
const obj = {
	name: "James",
	method: function() {
		function foo() {
			console.log(this);
		}
		foo();
	}
}

obj.method();
*/

/*
const obj2 = {
	name: "Alex",
	method: function() {
		return function () {
			console.log(this.name);
		}
	}
}

obj2.method()(); // the reurned function is called immidiatlt, without any context, as a plain function
*/

/*
const obj = {
	age: 10,
	foo: function () {
		const f = () => console.log(this.age);//arrow functione lucuma es xndire
		f(); //qani vor ira thise, ira cnoxi thisn e, vore ays depqum foon e
	} //vorn el kanchvel e obj-i vra
}


obj.foo();
*/

/*
//call implementation

Function.prototype.myCall = function(context, ...args) {
	const tmp = Symbol("something");
	
	Object.defineProperty(context, tmp, {
		value: this,
		configurable: true,
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
		configurable: false,
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



























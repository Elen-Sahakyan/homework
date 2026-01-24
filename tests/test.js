/* 
{
if (typeof a === "undefined") {
console.log( "cool:;
}
if (typeof b === "undefined") { // ReferenceError!
// ..
}
// ..
let b;
} 
*/

//String.raw

/* 
function showraw(strings, ...values) {
    console.log(string;
    console.log(strings.raw);
}

showraw`Hello\nWorld`; 
*/


//arrow function

/*
var foo = (x, y) => x + y;

var x = 1;
var y = 2;

console.log(foo(x, y)); 
*/

/* 
var foo = () => 12; 
var foo = x => x * 2; 
var foo = (x, y) => {
    var z = x * 2 + y;
    y++;
    x += 3;
    return (x + y + z) / 2;
}  
console.log(foo(2, 1)); 
*/

/*
var a  = [1, 2, 3, 5, 7];

a = a.map(b => b * 5);

console.log(a);
*/

//for..in

/*
var arr = ["a", "b", "c", "d"];

for (var index in arr) {
    console.log(arr[index]);
}

for (var idx in arr) {
    console.log(idx);
}
*/

//for..of

/*
var arr = ["Mike", "Bob", "Alice"],
key = Object.keys(arr);

for (var value of arr) {
    console.log(value);
}

for (var val = 0, i = 0; i < key.length; i++) {
    val = arr[key[i]];
    console.log(val);
}

for (var chr of "Hello World!") {
    console.log(chr);
}

var obj = {};

for (obj.a of arr) {
    console.log(obj.a);
}
*/

//accessing object-properties

/*
var obj = { 
    "name": "Alice", 
    "surname": "Smith",
}

console.log(obj["name"]);
*/


//regex

/* 
//unicode flag - u
console.log(/^. here/.test("𝄞 here")); //false as 𝄞 is not one character by BMP

console.log(/^. here/u.test("𝄞 here"));
*/

//sticky flag - y
/*
var re1 = /foo/y,
    str = "ab_foo_cd";

//console.log(re1.exec(str));

console.log(re1.lastIndex);
re1.lastIndex = 3;
console.log(re1.test(str));
console.log(re1.lastIndex);
*/

/*
var re = /^foo/y,
    str = "foo123";

console.log(re.test(str));

console.log(re.test(str)); //sticky flag y changes last lastIndex after finding a match
*/

//unicode
/*
var snowman = "\u2603";
console.log(snowman);
*/

//classes - Flanagan

/*
function Foo () {
    console.log(new.target);        
}

foo();

new foo();
*/

/*
function Foo(name, age) {
    this.name = name;
    this.age = age;
}

const mem = new Foo("Bob", 22);

console.log(mem);

console.log(mem instanceof Foo);

function Moo() {};

Moo.prototype = Foo.prototype;

console.log(new Moo() instanceof Foo);


*/


//class keyword
/*
class Range {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
    
    includes(x) {
        return this.start <= x && x <= this.end;
    }
}

const r1 = new Range(1, 5);

console.log(r1);

console.log(r1.includes(3));

*/

//Sympson, scope and closures

/*
function foo(a) {
    console.log(a + b); //referance error -> RHS Look up
    b = a;
}

foo(5);
*/

/*
x = 10; // declares x as global
console.log(x); //not an arror -> LHS Look up 

console.log(globalThis);

console.log(globalThis.x);

*/


//obj
/*
function foo(str, b) {
    eval(str);
    console.log(a, b);
}

var a = 10;

foo("var a = 5;", 1);
*/


//with
/*
let obj = {
    a: 1,
    b: 2,
    c: 3,
};

with (obj) {  //intead of writing obj.a every time
    a = 4;
    b = 5;
    c = 6;
}

console.log(obj);
*/

//IIFE

/*
(function foo() {
    var x = 1;
    console.log(x);
}()); // executes immidiatly without calling the function

(function moo() {
    var x = 5;
    console.log(x);
})(); // just a stylistic choice, this also works the same way

(function() {
    console.log("IIFE");
})(); //it can also be anonymus

var x = 3;
console.log(x);
*/


//hoisting

/*
foo();

function foo() { // hoisted first
    console.log("It will be first");
}

var foo = function() {
    console.log("This wouldn't be printed");
}

//foo(); //if this works 2nd foo will run

*/

/*
console.log(a);

if(true) {
    var a = 10;
}

foo();

if(true){
    function foo() {
        console.log("foo is hoisted to the enclosing scope");
    }
}

*/

//Flanagan - functions

/*
function getPropertyNames(obj, arr2) {
    //if(arr2 === undefined) { arr2 = []; }
    arr2 = arr2 || [];

    for(let property in obj) { arr2.push(property); }
    
    return arr2;
}

let obj = { 
    x: 100,
    y: 200,
    z: 45,
};

let arr = ["x", "w", "f"];

console.log(getPropertyNames(obj, arr));

console.log(getPropertyNames(obj));

//defauls values for params
function foo(obj, arr = []) {
    for(let key in obj) { arr.push(key); }

    return arr;
}

console.log(foo(obj));
*/


//rest parameter ...
/*
function max(first = -Infinity, ...rest) {
    let maxVal = first;

    for(let num of rest) {
        if(num > maxVal) {
            maxVal = num;
        }
    }
    
    return maxVal;
}
*/

/*
//the Arguments object - arguments
function foo(num) {
    let maxVal = -Infinity;

    for(let i = 0; i < arguments.length; i++) {
        maxVal = arguments[i];
    }

    return maxVal;
}


console.log(foo(2, 5, 6, 8, 500));
*/

/*
//spread operator
function min(...arr) {
    let minVal = +Infinity;
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < minVal) {
            minVal = arr[i];
        }
    }
    
    return minVal;
}

let array = [10, 87, 94, 6, 34, 0];

console.log(min(...array));

console.log(min(4, 6, 7, 90));
*/

/*
const arr = [40, 67, 8, 34, 1, -6, 0];

console.log(Math.min(...arr));
*/

/*
//destructuring
const arr = [10, 5, 78];

const [num1, num2, num3] = arr;

console.log(num1, num2, num3);

const obj = {
    name: "Elen",
    age: 22,
}

let { name, age } = obj; // stexcum e popoxoakanner assign e anum

name = "Alice";

console.log(name, age)
*/

/*
const obj = {
	name: "Elen",
	age: 22,
	height: 168,
};

let { name: objName, age: objAge } = obj; // renaming params while destructuring

objName = "Alice";

console.log(objName, objAge);

let { weight } = obj; //there is no such prop in obj

console.log(weight);
*/

/*
//type checking
function sum(nums) {
	let total = 0;
	
	for(let elem of nums) {
		if(typeof elem !== "number") {
			throw new Error("The array passed to sum() must consist of numbes")
		}
		total += elem;
	}

	return total;
}

console.log(sum(["hello", 1, 5, 7]));
*/

/*
//object property descriptors

class Person {
	constructor(name) {
		this.name = name;
	}

	toSpeak() {
		console.log("I am speaking");
	}

}

const pers1 = new Person("Ani");

//console.log(Object.getOwnPropertyDescriptors(pers1.__proto__));

//console.log(pers1.__proto__);

//console.log(Object.getOwnPropertyNames(pers1));

//console.log(Object.getOwnPropertyNames(pers1.__proto__));

//console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(pers1)));


//console.log(pers1.name);

//pers1.toSpeak();

//Object.preventExtensions(pers1); //dardznum e nun extensiable, chenq karox prop avelacnel

//console.log(Object.isExtensible(pers1)); //false



Object.defineProperty(pers1, "age", {
	value: 22,
	configurable: false, // chenq karox propy jnjel
});

//Object.seal(pers1); // is not extensible, config = false

//console.log(pers1.age);

//Object.freeze(pers1); //in not extensible, config, write = false

delete pers1.age; // 

console.log(pers1.age);
*/
/*
function Foo(name) {
	this.name = name;
}

Foo.prototype.toSpeak = function() {
	console.log("Hello!");
}

const obj = new Foo("Ani");

console.log(obj.__proto__);

console.log(Object.getPrototypeOf(obj));
*/
/*
//Flanagan Functions

uniqueInteger.counter = 0;

function uniqueInteger() {
	return uniqueInteger.counter++; // returns unique numbers each time
}

//console.log(uniqueInteger());

//sa karogh enq rewrite anel closure-ov
//ogtagorcum enq nayev IIFE

uniqueInt = (function () {
	let count = 0;
	return function() { return count++; }
})();

console.log(uniqueInt());
console.log(uniqueInt());
*/
/*
const f = new Function();

console.log(foo.name, foo.length);

function foo() {}

const newfoo = foo;

console.log(newfoo.name);
*/

/*
let a = 15;

const obj = {
	a: 10,
	b: 20,
}

function foo() {
	console.log(this.a);
}

//obj.foo(); //this can't work as obj doesn\t have foo method

//foo.call(obj);


function add(num) {
	return (this.a + this.b) * num;
}

//console.log(add.call(obj, 2));

function prod(y, z) {
	return this.b * (y + z);
}

console.log(prod.apply(obj, [1, 1])); //apply nuyn callna uxxaki argere []-ov enq talis
*/

/*
function foo(num) {
	return this.a + num;
}

const obj = {
	a: 5,
	b: 1,
}

const newFoo = foo.bind(obj);// return a num nor function, vore bind exaca skzbnakan objin

const obj2 = {
	a: 100,
	newFoo,
}

console.log(obj2.newFoo(1)); // el ira kontexte chi poxvum
*/

/*
const sum = num => this.a + num;

a = 1000;

const obj = {
	a: 10,
}

const newSum = sum.bind(obj);

const newObj = {
	a: 100,
	newSum,
}

console.log(newObj.newSum(0)); //NaN, vorovhetev, node-um es depqum this.a = undefined

//console.log(newSum.name); //bound sum
*/

/*
//toString for functions
console.log(console.log.toString());

function add(a, b) {
	return a + b;
}

console.log(add.toString());
*/

//const foo = new Function("x", "y", "return x * y;");
//console.log(foo(1, 2));

/*
const sum = (x, y) => x + y;

const arr = [1, 2, 4, 5, 6];

let mid = arr.reduce(sum)/arr.length;

console.log(mid);
*/

//prototypes

console.log(Object.getOwnPropertyNames(Object.prototype));











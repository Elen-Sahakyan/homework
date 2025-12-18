class Shape {
	constructor(color) {
		if(new.target === Shape) {
			throw new Error("Abstract class can not be instantiated");
		}
	this.type = "shape";
	this.color = color;
	}

	area() {
		throw new Error("Abstract method must have an implementation");
	}

	perimeter() {
		throw new Error("Abstract method must have an implementation");
	}

	describe() {
		console.log(`Type: ${this.type}`);
		console.log(`Color: ${this.color}`);
		console.log(`Area: ${this.area()}`)
		console.log(`Perimeter: ${this.perimeter()}`);
	}

}

class Circle extends Shape {
	constructor(color, radius) {
	super(color);
	this.radius = radius;
	this.type = "circle";
	this.p = 3.14;
	}

	area() {
		return this.p * this.radius ** 2;
	}

	perimeter() {
		return 2 * this.p * this.radius;
	}

}

class Rectangle extends Shape {
	constructor(color, width, height) {
		super(color);
		this.width = width;
		this.height = height;
		this.type = "rectangle";
	}

	area() {
		return this.width * this.height;
	}

	perimeter() {
		return this.width * 2 + this.height * 2;
	}

}

class Triangle extends Shape {
	constructor(color, a, b, c, height) {
		super(color);
		this.a = a;
		this.b = b;
		this.c = c;
		this.type = "triangle";
		this.height = height;
	}

	area() { 
		return (this.a * this.height) / 2;
	}

	perimeter() {
		return this.a + this.b + this.c;
	}
}

const c = new Circle("blue", 6);

console.log(c.area());
console.log(c.perimeter());
c.describe();
console.log("\n");

const r = new Rectangle("green", 2, 3);
console.log(r.area());
console.log(r.perimeter());
r.describe()
console.log("\n");

const t = new Triangle("grey", 4, 5, 6, 5);

console.log(t.area());
console.log(t.perimeter());
t.describe()






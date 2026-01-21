class Transport {
	constructor(name) {
		if(new.target == Transport) {
			throw new Error("Abstract class");
		}
		this.name = name;
	}
	
	move() {
		throw new Error("Abstract method must be implemented");
	}

	maxSpeed() {
		throw new Error("Abstract methid must be implemented");
	}

	info() {
		console.log(`Type: ${this.type}`)
		console.log(`Maximum Speed: ${this.maxSpeed()}`);
	}

}

const fuelMixin = {
	refuel(amount) {
		this.fuel += amount;
	},

	consume(amount) {
		if(this.fuel < amount) {
			console.log(`No fuel Left! cannot consume ${amount} liters of fuel`);
			this.fuel = 0;
			return;
		}
		this.fuel -= amount;
	},

};

class Car extends Transport {
	constructor(name, fuel) {
		super(name);
		this.fuel = fuel;
		this.type = "Car";
	}

	move() {
		console.log(`${this.name} is going fast`);
	}

	maxSpeed() {
		return 305;
	}

}

Object.assign(Car.prototype, fuelMixin);

class Plane extends Transport {
	constructor(name, fuel) {
		super(name);
		this.fuel = fuel;
		this.type = "Plane";
	}

	move() {
		console.log(`${this.name} is flying`);
	}

	maxSpeed() {
		return 1098;
	}

}

Object.assign(Plane.prototype, fuelMixin);

class Ship extends Transport {
	constructor(name, fuel) {
		super(name);
		this.fuel = fuel;
		this.type = "Ship"
	}

	move() {
		console.log(`${this.name} is sailing`);
	}

	maxSpeed() {
		return 56;
	}

}

Object.assign(Ship.prototype, fuelMixin);

const c1 = new Car("BMW M5", 50);

const p1 = new Plane("Boing 777", 70000);

const s1 = new Ship("Black Pearl", 150000);

c1.move();
console.log(c1.maxSpeed());
c1.info();
c1.refuel(10);
c1.consume(30);
console.log(`${c1.fuel} liters of fuel left`);


console.log("\n");

p1.move();
console.log(p1.maxSpeed());
p1.info();
p1.refuel(5000);
p1.consume(40000);
console.log(`${p1.fuel} liters of fuel left`);

console.log("\n");

s1.move();
console.log(s1.maxSpeed());
s1.info();
s1.refuel(10000);
s1.consume(30500);
console.log(`${s1.fuel} liters of fuel left`);



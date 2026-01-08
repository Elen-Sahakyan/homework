const Flyable = (Base) => class extends Base {
	fly() {
		console.log(`${this.name} is flying`);
	}
}

const Swimmable = (Base) => class extends Base {
	swim() {
		console.log(`${this.name} is swimming`);
	}
}

class Duck {
	constructor() {
		this.name = "Duck";
	}
}

const extendedDuck = Flyable(Swimmable(Duck));

class Penguin {
	constructor() {
		this.name = "Penguin";
	}
}

const newPenguin = Swimmable(Penguin);

class Eagle {
	constructor() {
		this.name = "Eagle";
	}
}

const newEagle = Flyable(Eagle);

const donald = new extendedDuck();

donald.fly();
donald.swim();

const pin = new newPenguin();

pin.swim();
pin.fly();




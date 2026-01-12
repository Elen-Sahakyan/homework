class CarNotAvailableError extends Error {
	constructor(m) {
		super(m);
		this.name = "CarNotAvailableError";
	}
}

class InvalidRentalDurationError extends Error {
	constructor(m) {
		super(m);
		this.name = "InvalidRentalDurationError"; 
	}
}

class ValidationError extends Error {
	constructor(m) {
		super(m);
		this.name = "ValidationError";
	}
}

class Car {
	constructor(make, model, rentalPricePerDay) {
		this.make = make;
		this.model = model;
		this.rentalPricePerDay = rentalPricePerDay;
		this.availability = true;
		this.orderRate = 0;
	}
	
	set make(value) {
		if(!value) {
			throw new ValidationError("Make cannot be an empty");
		}
		if(typeof value !== "string") {
			throw new ValidationError("Make must be a sting");
		}
		this._make = value;
	}

	get make() {
		return this._make;
	}

	set model(value) {
		if(!value) {
			throw new ValidationError("Model cannot be empty");
		}
		if(typeof value !== "string") {
			throw new ValidationError("Model must be a string");
		}
		this._model = value;
	}

	get model() {
		return this._model;
	}

	set rentalPricePerDay(value) {
		if(!value) {
			throw new ValidationError("Rental price per day cannot be empty");
		}

		if(typeof value !== "number") {
			throw new ValidationError("Rental price must be an error");
		}

		if(!(value > 0)) {
			throw new ValidationError("Price must be positive");
		}
		this._rentalPricePerDay = value;
	}

	get rentalPricePerDay() {
		return this._rentalPricePerDay;
	}

	markRented() {
		this.availability = false;
		this.orderRate++;
	}

	markAvailable() {
		this.availability = true;
	}
	
}

class EconomyCar extends Car {
	constructor(make, model, rentalPricePerDay) {
		super(make, model, rentalPricePerDay);
	}
}

class LuxuryCar extends Car {
	constructor(make, model, rentalPricePerDay, insurance, premiumService) {
		super(make, model, rentalPricePerDay);
		this.insurance = insurance;
		this.premiumService = premiumService;
	}

	set insurance(value) {
		if(!value) {
			throw new ValidationError("Insurance cannot be empty");
		}
		if(typeof value !== "string") {
			throw new ValidationError("Insurance must be a string");
		}
		this._insurance = value;
	}

	get insurance() {
		return this._insurance;
	}

	set premiumService(value) {
		if(!value) {
			throw new ValidationError("Premium service cannot be empty");
		}
		if(typeof value !== "boolean") {
			throw new ValidationError("Premium service must be a boolean");
		}
		this._premiumService = value;
	}

}

class Customer {
	constructor(name, contactInfo) {
		this.name = name;
		this.contactInfo = contactInfo;
		this.rentalHistory = [];
	}
	
	set name(value) {
		if(!value) {
			throw new ValidationError("Name cannot be empty");
		}
		if(typeof value !== "string") {
			throw new ValidationError("Name must be a string");
		}
		this._name = value;
	}

	get name() {
		return this._name;
	}

	set contactInfo(value) {
		let email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
		let phone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
		if(!value) {
			throw new ValidationError("Contact Info is missing");
		}
		if(!(email.test(value) || phone.test(value))) {
			throw new ValidationError("Contact info - email/phone-number is incorrect");
		}
		this._contactInfo = value;
	}

	get contactInfo() {
		return this._contactInfo;
	}

	searchCars(filters) { 
		if(!(filters && filters instanceof Filters)) {
			throw new ValidationError("Filters must be an instance of class Filters");
		}
		return Rental.cars.filter(car => {
			if(filters.make && filters.make !== car.make) {
				return false;
			}
			if(filters.model && filters.model !== car.model) {
				return false;
			}
			if(filters.priceFrom && filters.priceFrom > car.rentalPricePerDay) {
				return false;
			}
			if(filters.priceTo && filters.priceTo < car.rentalPricePerDay) {
				return false;
			}
			if(filters.availability !== car.availability) {
				return false;
			}
			return true;
		});		
	}

	viewRentalHistory() {
		return [...this.rentalHistory];
	}

}

class Filters {
	constructor(make, model, priceFrom, priceTo, availability) {
		this.make = make;
		this.model = model;
		this.priceFrom = priceFrom;
		this.priceTo = priceTo;
		this.availability = availability;
	}
	
	set make(value) {
		if(value && typeof value !== "string") {
			throw new ValidationError("Make must be a string");
		}
		this._make = value;
	}

	get make() {
		return this._make;
	}

	set model(value) {
		if(value && typeof value !== "string") {
			throw new ValidationError("Model must be a non-empty string");
		}
		this._model = value;
	}

	get model() {
		return this._model;
	}

	set priceFrom(value) {
		if(value && !(typeof value === "number" && value > 0)) {
			throw new ValidationError("Price range must start from a positive number");
		}
		this._priceFrom = value;
	}

	get priceFrom() {
		return this._priceFrom;
	}

	set priceTo(value) {
		if(value && !(typeof value === "number" && value > 0)) {
			throw new ValidationError("Price range must end at a positive number");
		}
		this._priceTo = value;
	}

	get priceTo () {
		return this._priceTo;
	}

	set availability (value) {
		if(value && typeof value !== "boolean") {
			throw new ValidationError("The type of availability must be boolean: true/false");
		}
		this._availability = value;
	}

	get availability() {
		return this._availability;
	}

}

class Rental {
	static cars = [];
	static rentalId = 1;
	constructor(customer, car, rentalDuration) {
		if(new.target === Rental) {
			throw new TypeError("Abstract class cannot be instantiated");
		}
		this.customer = customer;
		this.car = car;
		this.rentalDuration = rentalDuration;
	}

	set customer(value) {
		if(!value) {
			throw new ValidationError("Customer cannot be empty");
		}
		if(!(value instanceof Customer)) {
			throw new ValidationError("Customer must be an instance of class Customer");
		}
		this._customer = value;
	}

	get customer() {
		return this._customer;
	}

	set car(value) {
		if(!value) {
			throw new ValidationError("Car cannot be empty");
		}
		if(!(value instanceof Car)) {
			throw new ValidationError("Car must be an instance of class Car");
		}
		this._car = value;
	}

	get car() {
		return this._car;
	}

	set rentalDuration(value) {
		if(!value) {
			throw new InvalidRentalDurationError("Rental Duration cannot be empty");
		}
		if(!Number.isFinite(value)) {
			throw new InvalidRentalDurationError("Rental duration must be passed as a number");
		}
		if(!(value > 0 && value < 30)) {
			throw new InvalidRentalDurationError("Rental duration must be between 1-30 days");
		}
		this._rentalDuration = value;
	}

	get rentalDuration() {
		return this._rentalDuration;
	}

	rentCar() {
		throw new TypeError("Abstract method must be implemented");
	}

	returnCar() {
		throw new TypeError("Abstract method must be implemented");
	}

	calculateRentalPrice() {
		throw new TypeError("Abstract method must be implemented");
	}

	static addCar(car) {
		if(!car) {
			throw new ValidationError("Car cannot be empty");
		}
		if(!(car instanceof Car)) {
			throw new ValidationError("Car must be an instance of class Car");
		}
		Rental.cars.push(car);
	}

	calculateDemandFactor() {
		let orderRateArray = [];
		for(let i in Rental.cars) {
			orderRateArray.push(Rental.cars[i].orderRate);
		}
		if(this.car.orderRate >= Math.max(...orderRateArray)/2) {
			this.car.rentalPricePerDay * 0.2;	
		}	
}

	calculateSeasonFactor(season) {
		if(!(
			season && 
			typeof season === "string" &&
			season === "summer" || 
			season === "spring"
			)) {
			throw new ValidationError("The string summer/spring is missing");
		}
		if(season === "spring") {
			this.car.rentalPricePerDay *= 0.1;
		}
		else if(season === "summer") {
			this.car.rentalPricePerDay *= 0.3;
		}
	} 

}

class MainRental extends Rental {
	constructor(customer, car, rentalDuration) {
		super(customer, car, rentalDuration);
	}

	rentCar() {
		if(!this.car.availability) {
			throw new CarNotAvailableError("This car is not available");
		}
		this.car.markRented(this.car);
		this.customer.rentalHistory.push({
			make: this.car.make,
			model: this.car.model,
			duration: this.rentalDuration,
			price: this.calculateRentalPrice(this.car, this.rentalDuration),
			id: MainRental.rentalId++,
		});
	}

	returnCar() {
		this.car.markAvailable();
	}

	calculateRentalPrice() {
		return this.car.rentalPricePerDay * this.rentalDuration;
	}

}

const car1 = new LuxuryCar("BMW", "M5", 70000, "Ingo", true);

console.log(car1);

const cust1 = new Customer("Elen", "elensahakyann@gmail.com");

const filters1 = new Filters("BMW", "M5", 6000, 71000, true);

Rental.addCar(car1);

console.log(cust1.searchCars(filters1));

const rental = new MainRental(cust1, car1, 5);

rental.rentCar();

console.log(cust1.viewRentalHistory());

console.log(rental.calculateRentalPrice());


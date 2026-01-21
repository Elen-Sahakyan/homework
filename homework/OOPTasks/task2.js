class DishNotFoundError extends Error {
	constructor(m) {
		super(m);
	}
}

class InvalidOrderError extends Error {
	constructor(m) {
		super(m);
	}
}

class ValidationError extends Error {
	constructor(m) {
		super(m);
	}
}

class Dish {
	constructor(name, price) {
		this._name = name;
		this._price = price;
	}

	set name(value) {
		if(!value) {
			throw new ValidationError("Name cannot be an empty string");
		}
		this._name = value;
	}

	get name() {
		return this._name;
	}

	set price(value) {
		if(value < 0) {
			throw new ValidationError("Price cannot be negative");
		}
		this._price = value;
	}

	get price() {
		return this._price;
	}

	increasePrice(dishName, percent) {
		
	}

}

class Appetizer extends Dish {
	constructor(name, price, orderingHours) {
		super(name, price);
		this._orderingHours = orderingHours;
	}

	set orderingHours(value) {
		if (typeof orderingHours !== "object") {
			throw new ValidationError("Ordering hours' must be passed as an object");
		}
		if(!(orderingHours?.start && orderingHours?.end)) {
			throw new ValidationError("The object must contain start and end hours for ordering  the appetizer");
		}
		this._orderingHours = orderingHours;
	}

}

class Entree extends Dish {
	constructor(name, price, ingredients) {
		super(name, price);
		this._ingredients = ingredients
	}

	set ingredients(value) {
		if(!value) {
			throw new ValidationError("Ingredients are missing");
		}
		if(!(value instanceof Array)) {
			throw new ValidationError("Ingredients must be passed as an array");
		}
		this._ingredients = value;
	}

	get ingredients() {
		return this._ingredients;
	}

}

class Dessert extends Dish {
	#maxPrepTime;
	constructor(name, price, prepTime) {
		super(name, price);
		this._prepTime = prepTime;
		this.#maxPrepTime = 30;
	}

	set prepTime(value) {
		if(!value) {
			throw new ValidationError("Preparation time is missing");
		}
		if(value > this.#maxPrepTime) {
			throw new ValidationError("Preparation time can maximum be 30 mins");
		}
		this._prepTime = value;
	}

	get prepTime() {
		return this._prepTime;
	}

}

class Menu {
	#dishes = {};
	constructor() {
		if(new.target === Menu) {
			throw new TypeError("Abstract class cannot be instantiated");
		}
	}

	modifyDishesAdd(dish) {
		let key = 0;
		Object.defineProperty(this.#dishes, key, {
			value: dish,
			writable: true,
			enumerable: true,
			configurable: true,
		});
		key++;
	}

	modifyDishesRemove(dishName) {
		for(let i in this.#dishes) {
			if(this.#dishes[i].name === dishName) {
				delete this.#dishes[i];
				break;
			}
		}
	}

	addDish(dish) {
		throw new TypeError("Abstract method must be implemented");
	}

	removeDish(dishName) {
		throw new TypeError("Abstract method must be implemented");
	}

	viewMenu() {
		return this.#dishes;
	}

}


class AppetizersMenu extends Menu {
	constructor() {
		super();
	}
	addDish(dish)	{
		if(!dish) {
			throw new ValidationError("Appetizer cannot be empty");
		}
		if(!(dish instanceof Dish)) {
			throw new ValidationError("Appetizer msut be an instance of class Dish");
		}
		if(!dish.orderingHours) {
			throw new ValidationError("Ordering hours for appetizer missing");
		}
		this.mutateDishesAdd(dish);
	}

	removeDish(dishName)	{
		if(!dishName) {
			throw new ValidationError("The Name of Appetizer cannot be an empty string");
		}
		this.mutateDishesRemove(dishName);
	}

}

class EntreesMenu extends Menu {
	constructor() {
		super();
	}

	addDish(dish) {
		if(!dish) {
			throw new ValidationError("Entree cannot be empty");
		}
		if(!(dish instanceof Dish)) {
			throw new ValidationError("Entree must be an instance of the class Dish");
		}
		if(!dish.ingredients) {
			throw new ValidationError("The Entree must have ingridients");
		}
		this.modifyDishesAdd(dish);
	}

	removeDish(dishName) {
		if(!dishName) {
			throw ValidationError("The Name of Entree cannot be an empty string");
		}
		this.modifyDishesRemove(dishName);
	}

}

class DessertsMenu extends Menu {
	constructor() {
		super();
	}

	addDish(dish) {
		if(!dish) {
			throw new ValidationError("Dessert cannot be empty");
		}
		if(!(dish instanceof Dish)) {
			throw new ValidationError("Dessert must be an instance of the class Dish");
		}
		if(!dish.prepTime) {
			throw new ValidationError("Dessert must have a preperation time");
		}
		this.modifyDishesAdd(dish);
	}

	removeDish(dishName) {
		if(!dishName) {
			throw new ValidationError("The name of a dessert cannot be an empty string");
		}
		this.modifyDishesRemove(dishName);
	}

}

class Order {
	#totalPrice = 0;
	#prices = [];
	constructor(customer) {
		this._customer = customer;
		this._dishes = [];
	}

	set customer(value) {
		if(!value) {
			throw new InvalidorderError("Customer is missing");
		}
		if(!(value instanceof Customer)) {
			throw new InvalidOrderError("Customer must be an instance of class Customer");
		}
		this._customer = value;
	}

	get customer() {
		return this._customer;
	}

	addDish(dishName, menu) {
		if(!(dishName && menu)) {
			throw new InvalidOrderError("The dish name and/or menu missing");
		} 
		let MU = menu.viewMenu();
		let found = false
		for(let i in MU) {
			if(MU[i].name === dishName) {
				this._dishes.push(dishName);
				this.#prices.push(MU[i].price);
				found = true;
				break;
			}
		}
		if(!found) {
			throw new DishNotFoundError(`The ${dishName} not fund in ${menu}`);
		}
	}

	getTotal() {
		let sum = 0;
		for(let i of this.#prices) {
			sum += i;
		}
		this.#totalPrice = sum;
		return sum;
	}

	viewSummery() {
		console.log(`Ordered dishes: ${this._dishes}`);
		console.log(`Total: ${this.#totalPrice}`);
	}

}

class Customer {
	#orderHistory = [];
	constructor(name, contactInfo) {
		this._name = name;
		this._contactInfo = contactInfo;
	}
		
	set name(value) {
		if(!value) {
			throw new ValidationError("Name is missing");
		}
		this._name = value;
	}

	get() {
		return this._name;
	}

	set contactInfo(value) {
		if(!(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value))) {
			throw new ValidationError("E-Mail-Adress incorrect");
		}
		this._contactInfo = value;
	}

	get() {
		return this.contactInfo;
	}

	placeOrder(order) {
		if(!order) {
			throw new InvalidOrderError("Order-details missing");
		}
		if(!(order instanceof Order)) {
			throw new InvalidOrderError("Order must be an instace of class Order");
		}
		this.#orderHistory.push(order);
	}

	viewOrderHistory() {
		return this.#orderHistory;
	}

}

const entr = new Entree("pizza", 4500, ["pepperoni", "cheese", "tomato"]);

const menuE = new EntreesMenu();

menuE.addDish(entr);

console.log(menuE.viewMenu());

const cus1 = new Customer("Elen", "example@gmail.com");

const ord1 = new Order(cus1);

ord1.addDish("pizza", menuE);

console.log(ord1.getTotal());

ord1.viewSummery();






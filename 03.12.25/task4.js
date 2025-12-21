class Payment {
	constructor() {
		if(new.target === Payment) {
			throw new Error ("Abstract class cannot be instantiated");
		}
	}

	pay(amount) {
		throw new Error("Abstract mehtod must be implemented");
	}

	refund(id) {
		throw new Error("Abstract mehtod must be implemented");
	}

	getStatus(id) {
		throw new Error("Abstract mehtod must be implemented");
	}

}


class Stripe extends Payment {
	constructor() {
		super();
		this.transactions = [];
		this.id = 0;
	}

	pay(amount) {
		this.id++;
		this.transactions.push({amount, id: this.id, state: "paid"});
		
		console.log(`Stripe Payment in amount of ${amount} recieved successfully: ID - ${this.id}`);
		
		return this.id;
	}

	refund(id) {
		//.find looks for a transaction in the array, the id of which is equal to the given id
		//if the transaction is found find returns it, else undefined
		const transac = this.transactions.find(tr => tr.id === id);
		
		if(!transac) {
			return `Refund failed: A Transaction with ID ${id} does not exist`;
		}

		transac.state = "refunded";
		console.log(`Refund succeeded: Transaction with ID ${id} is refunded`);
	}

	getStatus(id) {
		const transac = this.transactions.find(tr => tr.id === id);

		if(!transac) {
			return `Search failed: ID ${id} not found`;
		}
		
		return transac.state;		
	}

}

class PayPal extends Payment {
	constructor() {
		super();
		this.transactions = [];
		this.id = 0;
	}

	pay(amount) {
		this.id++;
		this.transactions.push({amount, id: this.id, state: "paid"});
	
		console.log(`PayPal Payment in amount of ${amount} recieved successfully: ID - ${this.id}`);
		
		return this.id;
	}

	refund(id) {
		const transac = this.transactions.find(tr => tr.id === id);

		if(!transac) {
			return `Refund failed: A transaction with ID ${id} does not exist`;
		}

		transac.state = "refunded";

		console.log(`Refund succeeded: Transaction with ID ${id} is refunded`);
	}

	getStatus(id) {
		let transac = this.transactions.find(tr => tr.id === id);

		if(!transac) {
			return `Search failed: ID ${id} not found`;
		}

		return transac.state;
	}

}

const st = new Stripe();
const pp = new PayPal();


console.log("---STRIPE---");
st.pay(500);
console.log(st.getStatus(1));
st.refund(1);
console.log(st.getStatus(1));
console.log(st.refund(2));

console.log("---PAYPAL---");
pp.pay(500);
console.log(pp.getStatus(1));
pp.refund(1);
console.log(pp.getStatus(1));
console.log(pp.refund(2));



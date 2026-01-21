class BankAccount {
	#balance;
	#transactions;
	constructor(accountNumber, type, balance) {
		if (new.target === BankAccount) {
		throw new TypeError("Abstract class cannot be instatiated");
		}
		this._accountNumber = accountNumber;
		this._type = type;
		this.#balance = balance;
		this.#transactions = [];
	}

	set accountNumber(value) {
		if(!(typeof(value) === "string" && value.length >= 10)) {
			throw new ValidationError("Account number must be a string consisiting of 10 or more elements");
		}	
			this._accountNumber = value;
	}

	get accountNumber() {
		return this._accountNumber;
	}

	set type(value) {
		if(!(typeof(value) === "string" && (value === "individual" || value === "joint"))) {
			throw new ValidationError("Type must be a string");
		}
			this._type = value;
	}

	getAllTransactions() {
		let arr = this.#transactions;
		return arr;
	}

	getTransactionSummary(limit = 10) {
		return this.#transactions.slice(-limit); // to retunr the last elements;
	} 

	mutateBalanceDeposit(amount) {
		this.#balance += amount;
		this.#transactions.push(new Transaction(this.accountNumber, amount, "deposit"));
	}
	
	mutateBalanceWithdraw(amount) {
		this.#balance -= amount;
		this.#transactions.push(new Transaction(this.accountNumber, amount, "withdraw"));
	}

	mutateBalanceTransfer(amount) {
		this.mutateBalanceWithdraw(amount);
		this.#transactions.push(new Transaction(this.accountNumber, amount, "transfer"));
	}

	getBalance() {
		return this.#balance;
	}

	deposit(amount) {
		throw new TypeError("Abstract mehtod must be implemented");
	}

	withdraw(amount) {
		throw new TypeError("Abstract method must be implemented");
	}

	transferFunds(targetAccount, amount, actor) {
		throw new TypeError("Abstract method must be implemented");
	}

}

class IndividualAccount extends BankAccount {
	constructor(AccountNumber, type, balance) {
		super(AccountNumber, type, balance);
	}
	
	deposit(amount) {
		if(amount < 0) {
			throw new ValidationError("Amount cannot be negative");
		}
		this.mutateBalanceDeposit(amount);
	}

	withdraw(amount) {
		if(this.balance < amount) {
			throw new InsufficientFundsError("Insufficient funds");
		}
		this.mutateBalanceWithdraw(amount);
		}

	transferFunds(targetAccount, amount, actor) {
		if(amount < 0) {
			throw new InvalidTransactionError("The amount cannot be negative");
		}
		this.mutateBalanceWithdraw(amount);
		targetAccount.mutateBalanceDeposit(amount);
	}

}

class JointAccount extends BankAccount {
	constructor(accountNumber, type, balance) {
		super(accountNumber, type, balance);
		this.owners = [];
	}

	addOwner(id) {
		if(this.owners.includes(id)) {
			throw new AuthorizationError(`The customer with id ${id} is already a part of joint account`);
		}
		this.owners.push(id);
	}

	deposit(amount) {
		if(amount < 0) {
			throw new ValidationError("Amount cannot be negative");
		}
		this.mutateBalanceDeposit(amount);
	}

	withdraw(amount) {
		if(amount > this.balance) {
			throw new InsufficientFundsError("Insufficient funds");
		}
			this.mutateBalanceWithdraw(amount);
		}

	transferFunds(targetAccount, amount, actor) {
		if(!(this.owners.includes(actor))) {
			throw new AuthorizationError("The actor is not a part of joint account");
		}
		if(amount < 0) {
			throw new InvalidTransactionError("The amount cannot be negative");
		}
		this.mutateBalanceWithdraw(amount);
		targetAccount.mutateBalanceDeposit(amount);
	}

}

class Customer {
	constructor(name, contactInfo) {
		this._name = name;
		this._contactInfo = contactInfo;
		this.accounts = [];
	}

	set name(value) {
		if(!value) {
			throw new ValidationError("Name cannot be an empty string");
		}
		this._name = value;
	}

	set contactInfo(value) {
		if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
			throw new ValidationError("The E-Mail-Adress is wrong/does not exist");
		}
		this._contactInfo = value;
	}

	addAccount(account) {
		if(!account) {
			throw new ValidationError("Account cannot be an empty string");
		}
		this.accounts.push(account);
	}
	
	viewAccounts() {
		return this.accounts;
	}

	viewTransactionHistory(accountNumber) {
		for(let i of this.accounts) {
			if(i.accountNumber === accountNumber) {
				let tr = i.getAllTransactions();
				console.log(tr);
			}
		}
		throw new ValidationArror(`No transaction for the account number ${accountNumber} in the history`);
	}

}

class Transaction {
	constructor(accountNumber, amount, transactionType) {
		this._accountNumber = accountNumber;
		this._amount = amount;
		this._transactionType = transactionType;
		this.timestamp = new Date();
	}
	
	set accountNumber(value) {
		if(!(typeof value === "string" && value.length === 10)) {
			throw new ValidationError("Account Number must be a string cosisiting of 10 digits");
		}
		this._accountNumber = value;
	}

	get accountNumber() {
		return this._accountNumber;
	}

	set amount(value) {
		if(value < 0) {
			throw new ValidationError("The amount cannot be negative");
		}
		this._amount = value;
	}

	set TransactionType(value) {
		if(!value) {
			throw new ValidationError("Transaction type cannot be an empty string");
		}
		else if(!(value === "deposit" || value === "withdraw" || value === "transfer")) {
			throw new InvalidTransactionError("Transaction Type is not valid");	
		}	
		this._transactionType = value;
	}

}

class InsufficientFundsError extends Error {
	constructor(m) {
		super(m);
	}
}

class InvalidTransactionError extends Error {
	constructor(m) {
		super(m);
	}
}

class AuthorizationError extends Error {
	constructor(m) {
		super(m);
	}
}


class ValidationError extends Error {
	constructor(m) {
		super(m);
	}
}


const i1 = new IndividualAccount("1234567891", "individual", 1000);

const j1 = new JointAccount("1324567890", "joint", 2000);

const c1 = new Customer("Bob", "bob1@gmail.com");

const t1 = new Transaction("0987654321", 500, "deposit");

i1.deposit(200);
i1.transferFunds(j1, 300);

console.log(i1.getBalance());
console.log(j1.getBalance());






class Repository {
	constructor() {
		if(new.target === Repository)	{	
			throw new Error("Interface class cannot be instantiated");
		}
		if(this.add === Repository.prototype.add || this.remove === Repository.prototype.remove || this.find === Repository.prototype.find || this.findAll === Repository.prototype.findAll) {
			throw new Error("The derived class must implement all the methods");
		}

}
	
	add(item) {
		throw new Error("The method must be implemented");
	}

	remove(id) {
		throw new Error("The method must be implemented");
	}

	find(id) {
		throw new Error("The method must be implemented");
	}

	findAll() {
		throw new Error("The method must be implemented");
	}

}

class UserRepository extends Repository {
	constructor() {
		super();
		this.repo = [];
		this.id = 0;
	}

	add(item) {
		this.repo.push( {
			id: this.id,
			item: item,
		});
		return this.id++;
	}

	remove(id) {
		for(let i = 0; i < this.repo.length; i++) {
			if (id === this.repo[i].id) {
				this.repo.splice(i, 1);
				return;
			}
		}
		console.log(`Item with ID ${id} not found`);
	}

	find(id) {
		for(let i = 0; i < this.repo.length; i++) {
			if(id == this.repo[i].id) {
				return this.repo[i].item;
			}
		}
		return -1;
	}

	findAll() {
		return this.repo;
	}

}


class ProductRepository extends Repository {
	constructor() {
		super();
		this.repo = [];
		this.id = 0;
	}

	add(item) {
		this.repo.push({
			id: this.id,
			item: item,
		});

		return this.id++;
	}

	remove(id) {
		for(let i = 0; i < this.repo.length; i++) {
			if(id === this.repo[i].id) {
				this.repo.splice(i, 1);
				return;
			}
		}
		console.log(`An item with ID ${id} not found`);
	}

	find(id) {
		for(let i = 0; i < this.repo.length; i++) {
			if(id === this.repo[i].id) {
				return this.repo[i].item;
			}
		}
		return -1;
	}

	findAll() {
		return this.repo;
	}

}		

const u1 = new UserRepository();

const ID1 = u1.add("namesurname_");
const ID2 = u1.add("holgerschmidt20");
const ID3 = u1.add("_bobwisley");

console.log(ID1);
console.log(ID2);
console.log(ID3);

console.log("\n");

console.log(u1.find(ID1));

console.log("\n");

console.log(u1.findAll());

console.log("\n");

u1.remove(ID3);
console.log(u1.findAll());
console.log("\n")

const p1 = new ProductRepository();

const pID1 = p1.add("T-Shirt");
const pID2 = p1.add("Pullover");

console.log(p1.find(pID1));
console.log(p1.findAll());

console.log("\n");

p1.remove(pID2);
console.log(p1.findAll());
p1.remove(4);


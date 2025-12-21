class Character {
	constructor(character, health) {
		if(new.target === Character) {
			throw new Error("Abstract class cannot be instatiated");
		}
		this.name = character;
		this.health = health;
	}

	defend(damage) {
		throw new Error("Abstract method must have an implementation");
	}

	attack(target) {
		throw new Error("Abstract method must have an implementation");
	}

	isAlive() {
		return this.health > 0;
	}
}

class Warrior extends Character {
//Armor reduces the attack power by 10;	
	constructor(name, health, attackPower, armor) {
		super(name, health);
		this.attackPower = attackPower;
		this.armor = armor;
	}

	defend(amount) {
		if (amount <= 10 && this.armor > 0) {
			this.armor--;
			console.log(`${this.name} neutralizes the damage using 1x armor`);
			console.log(`Health: ${this.health}; Armor: ${this.armor}x`);
		}
		else if(amount > 10 && this.armor > 0) {
			const reducedAmount = amount - 10;
			this.health -= reducedAmount;
			this.armor--;
			console.log(`${this.name} reduces the intensity of the attack power 2x using an armor`);
			console.log(`Health: ${this.health}; Armor: ${this.armor}`)
		}
	}

	takeDamage(amount) {
		if(this.health > amount && this.armor) {
			this.defend(amount);
		} 
		else if (this.health > amount) {
			this.health -= amount;
			console.log(`${this.name} takes the damage wholly, as no armor is left`);
			console.log(`Health: ${this.health}; armor: ${this.armor}x`);
		} 
		else if(this.health <= amount) {
			console.log(`The damage in amount of ${amount} killed ${this.name}`);
			this.health = 0;
		}
	}
	
	attack(target) {
		console.log(`${this.name} attacks ${target.name}`);
		target.takeDamage(this.attackPower);
	}

}

class Mage extends Character {
//Amulet reduces the attack Power by 15	
	constructor(name, health, attackPower, amulet) {
		super(name, health);
		this.attackPower = attackPower;
		this.amulet = amulet;
	}

	defend(amount) {
		if(amount <= 15 && this.amulet > 0) {
			this.amulet--;
			console.log(`${this.name} neutralizes the the damage using 1x amulet`);
			console.log(`Health: ${this.health}; amulet: ${this.amulet}x`);
		} 
		else if(amount > 15 && this.amulet > 0) {
			const reducedDamage = amount - 15;
			this.health -= reducedDamage;
			this.amulet--;
			console.log(`${this.name} reduces the intensity of the damage using 1x amulet`);
			console.log(`Health: ${this.health}; amulet: ${this.amulet}x`);
		}		
	}

	takeDamage(amount) {
		if(this.health > amount && this.amulet) {
			this.defend(amount);
		}
		else if(this.health > amount) {
			this.health -= amount;
			console.log(`${this.name} takes the damage wholly, as no amulet is left`);
			console.log(`Health: ${this.health}; amulet: ${this.amulet}x`);
		}
		else if(this.health <= amount) {
			console.log(`The damage in amount of ${amount} killed ${this.name}`);
			this.health = 0;
		}
	}

	attack(target) {
		console.log(`${this.name} attacks ${target.name}`);
		target.takeDamage(this.attackPower);
	}

}

const eddard = new Warrior("Eddard Stark", 100, 35, 2);
const harry  = new Mage("Harry Potter", 100, 30, 1);
let round = 1;

console.log("______BATTLE STARTS______");

while(eddard.isAlive() && harry.isAlive()) {
	console.log(`*** ROUND ${round} ***`);
	eddard.attack(harry);

	if(harry.isAlive()) {
		harry.attack(eddard);
	}
	
	round++;
}

console.log("______BATTLE IS OVER______");

if(eddard.isAlive()) {
	console.log(`${eddard.name} wins!`);
}

if(harry.isAlive()) {
	console.log(`${harry.name} wins!`);
}










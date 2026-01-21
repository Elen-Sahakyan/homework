class Character {
    constructor(name, health, attackPower) {
        this.name = name;
        this.health = health;
        this.attackPower = attackPower;
    }

    attack(target) {
        console.log(`${this.name} attacks ${target.name} for ${this.attackPower} damage.`);
        target.takeDamage(this.attackPower);
    }

    takeDamage(amount) {
        this.health -= amount;
        if (this.health < 0) this.health = 0;
    }

    isAlive() {
        return this.health > 0;
    }

    toString() {
        return `${this.name} (Health: ${this.health})`;
    }
}

class Wizard extends Character {
    constructor(name, health, attackPower, mana) {
        super(name, health, attackPower);
        this.mana = mana;
    }

    castSpell(target) {
        if (this.mana < 20) {
            console.log(`${this.name} has no mana left!`);
            return;
        }

        const damage = this.attackPower * 2;
        this.mana -= 20;

        console.log(
            `${this.name} casts a spell on ${target.name} for ${damage} damage! Mana left: ${this.mana}`
        );

        target.takeDamage(damage);
    }

    toString() {
        return `${this.name} (Health: ${this.health}, Mana: ${this.mana})`;
    }
}

class Warrior extends Character {
    constructor(name, health, attackPower, armor) {
        super(name, health, attackPower);
        this.armor = armor;
    }

    takeDamage(amount) {
        const reducedDamage = Math.max(amount - this.armor, 0);
        this.health -= reducedDamage;
        if (this.health < 0) this.health = 0;

        console.log(
            `${this.name}'s armor blocked ${amount - reducedDamage} damage! Health now: ${this.health}`
        );
    }

    toString() {
        return `${this.name} (Health: ${this.health}, Armor: ${this.armor})`;
    }
}

/* ===========================
   Battle Simulation
=========================== */

const wizard = new Wizard("Merlin", 100, 25, 60);
const warrior = new Warrior("Arthur", 120, 20, 5);

console.log("=== Battle Start ===");

let round = 1;

while (wizard.isAlive() && warrior.isAlive()) {
    console.log(`\n--- Round ${round} ---`);

    wizard.castSpell(warrior);

    if (warrior.isAlive()) {
        warrior.attack(wizard);
    }

    console.log(wizard.toString());
    console.log(warrior.toString());

    round++;
}

console.log("\n=== Battle Over ===");

if (wizard.isAlive()) {
    console.log(`${wizard.name} wins! 🧙‍♂️`);
} else {
    console.log(`${warrior.name} wins! ⚔️`);
}

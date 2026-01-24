class Animal {
    constructor(name) {
        this.name = name;
    }

    toSpeak() {
        console.log(`${this.name} makes a sound`)
    }
}

class Dog extends Animal{
    toSpeak() {
        console.log(`${this.name} barks`)
    }
}

class Cat extends Animal {
    toSpeak() {
        console.log(`${this.name} meows`)
    }
}

const dog = new Dog("Zangi");
const cat = new Cat("Kitty");


dog.toSpeak();
cat.toSpeak();



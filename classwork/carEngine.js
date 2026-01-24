class Car {
   constructor(mark, engine_type, engine_pow, year, color, wheels) {
   this.mark = mark;
   this.engine = new Engine(engine_type, engine_pow)
   this.year = year;
   this.color = color;
   this.wheels = [...wheels];
   }

   start() {
        console.log("The car is going");
   }
   
   stop() {
        console.log("The car has stopped");
   }

};

class Engine {
    constructor(type, power) {
        this.type = type;
        this.power = power;
    }
};

class Wheel {
    constructor(type, size) {
        this.type = type;
        this.size = size;
    }
};


const wheels = new Array(4).fill(null);

for(let i = 0; i < wheels.length; ++i) {
    wheels[i] = new Wheel("Micheline", 19);
}

const car = new Car("BMW", "GDI", 300, 2020, "silver", wheels);

console.log(car);





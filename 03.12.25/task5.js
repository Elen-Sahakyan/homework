const eventEmitter = {
	initializer() {
		this.events = {};
	},
	
	register(name, fn) {
		if(!this.events[name]) {
			this.events[name] = [];
		}
		this.events[name].push(fn); 
	},

	emit(name, ...data) {
		if(!this.events[name]) {
			return;
		}
		const size = this.events[name].length;
		for(let i = 0; i < size; i++) {
			this.events[name][i](...data);
		}
	},

	remove(name, fn) {
		if(!this.events[name]) {
			return;
		}
		const idx = this.events[name].indexOf(fn);
		if(idx === -1) {
			return;
		}
		this.events[name].splice(idx, 1); //removes the value of the index and shifts the elements to left by 1
	},

}

class GameEngine {}

Object.assign(GameEngine.prototype, eventEmitter)

function foo() {
	console.log("Game started");
}

function moo() {
	console.log("update");
}

const i1 = new GameEngine();

i1.initializer(); //could also be called in the constructor of GameEngine, so that initialization is automatic

i1.register("start", foo); //functions can also be defined here inline as arrow fns

i1.register("update", moo);

setInterval(() => {
	i1.emit("update");
}, 1000);







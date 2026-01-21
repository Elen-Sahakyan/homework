class Logger {
	constructor() {
		if(new.target === Logger) {
			throw new Error ("Abstract class cannot be instantiated");
		}
	}

	log(msg) {
		throw new Error("Abstract class must have an implementation"); 
	}

	warn(msg) {
		throw new Error("Abstract class must have an implementation"); 
	}	
	error(msg) {	
		throw new Error("Abstract class must have an implementation"); 
	}
}

class ConsoleLogger extends Logger {
	log(msg) { console.log(msg); }
	warn(msg) { console.log(msg); }
	error(msg) { console.log(msg); }
}

class MemoryLogger extends Logger {
	constructor() {
		super();
		this.logs = [];
	}

	log(msg) {
		this.logs.push({"log": msg});
	}

	warn(msg) {
		this.logs.push({"warn": msg});
	}

	error(msg) {
		this.logs.push({"error": msg});
	}
}


const c = new ConsoleLogger();
const m = new MemoryLogger();


c.log(10);
m.log("Hello");
m.error("new error");

console.log(m.logs);













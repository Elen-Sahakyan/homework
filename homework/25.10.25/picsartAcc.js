class PicsartAccademy {
    constructor(room) {
    this.classroom = new Classroom(room);
    this.library = new Library();
    this.kitchen = new Kitchen();
    }

    showInfo() {
        console.log("Picsart accademy offers:");
        console.log("Classroom with students:");
        this.classroom.listStudents();
        console.log("A Library with books:");
        this.library.listBooks();
        console.log("A Kitchen with workers:") 
        this.kitchen.listWorkers();
    }
    
}

class Classroom {
    constructor(room){
        this.room = room;
        this.stdList = [];
    }

    addStudent(name) {
        this.stdList.push(name);
    }

    listStudents() {
        for(let i = 0; i < this.stdList.length; ++i) {
            console.log(this.stdList[i]);
       }
    }
}

class Library {
    constructor(book) {
        this.books = [];
    }
    
    addBook(title, author) {
        const book = { title: title, author: author }
        this.books.push(book);
    }

    listBooks() {
        for(let i = 0; i < this.books.length; ++i) {
            console.log(this.books[i]);
        }
    }
}

class Kitchen {
    constructor(name) {
        this.staff = [];
    }

    addWorker(name) {
        this.staff.push(name);
    }
    
    listWorkers() {
        for(let i = 0; i < this.staff.length; ++i){
            console.log(this.staff[i]);
        }
    }
}

const accademy = new PicsartAccademy(100);

accademy.classroom.addStudent("Elen");
accademy.classroom.addStudent("Mane");

accademy.library.addBook("David Flanagan", "Java Script, The Definitive Guide");
accademy.library.addBook("Kyle Simpson", "ES6 & Beyond");

accademy.kitchen.addWorker("Bob");
accademy.kitchen.addWorker("Mark");

accademy.showInfo();



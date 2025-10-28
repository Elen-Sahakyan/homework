class Student {
    constructor (name) {
        this.name = name;
        this.grades = [];
    }

    addGrade(...grade) {
        this.grades.push(...grade);
    }

    average() {
        if(this.grades.length === 0) {
            return 0;
        }
        let res = 0;
        for(let i = 0; i < this.grades.length; ++i) {
            res += this.grades[i];
        }
        return res / this.grades.length;
    }
}

const std1 = new Student("Ann");

std1.addGrade(9, 8, 7, 6, 9);

console.log(std1.grades)

console.log(std1.average());


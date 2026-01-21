class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    calArea() {
        return this.height * this.width;
    }

    calPerimeter() {
        return 2 * this.height + 2 * this.width;
    }
}

const rect = new Rectangle(3, 4);

console.log(rect);

console.log(rect.calArea());

console.log(rect.calPerimeter());




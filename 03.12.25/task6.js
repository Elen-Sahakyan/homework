const timestampable = { 
	touch() {
		this.updatedAt = new Date();
	}
}

class User {
	constructor(name, age) {
		this.createdAt = new Date();
		this.updatedAt = new Date();
		this.name = name;
		this.age = age;
	}
}

Object.assign(User.prototype, timestampable);

const u1 = new User("Elen", 22);

console.log(u1.updatedAt);

u1.name = "Alice";
u1.touch();

console.log(u1.updatedAt);

class Post {
	constructor(author, likes) {
		this.createdAt = new Date();
		this.updatedAt = new Date();
		this.author = author;
		this.likes = likes;
	}
}

Object.assign(Post.prototype, timestampable);

const p1 = new Post("elensahakyan_", 90);

console.log(p1.updatedAt);

p1.likes = 91;
p1.touch();

console.log(p1.updatedAt);

class Comment {
	constructor(id) {
		this.createdAt = new Date();
		this.updatedAt = new Date();
		this._id = id;
	}

	set id(value) {
		this._id = value;
		this.touch();
	}

	get id() {
		return this._id;
	}
}

Object.assign(Comment.prototype, timestampable);

const c1 = new Comment(1);

console.log(c1.updatedAt);

c1.id = 2;

console.log(c1.updatedAt);







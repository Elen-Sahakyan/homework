class InvalidErrorMessage extends Error {
	constructor(m) {
		super(m);
		this.name = 'InvalidErrorMessage';
	}
}

class UserNotFoundError extends Error {
	constructor(m) {
		super(m);
		this.name = 'UserNotFoundError';
	}
}

class ValidationError extends Error {
	constructor(m) {
		super(m);
		this.name = 'ValidationError';
	}
}

const regex = {
	email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
	phone: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
}


function assert(condition, message, ErrorType = ValidationError) {
	if(!condition) {
		throw new ErrorType(message);
	}
}

const validators = {
	isNonEmptyString(value) {
		return value && typeof value === 'string';
	},

	isPositiveNumber(value) {
		return value && Number.isFinite(value) && value > 0;
	},

	isValidEmail(value) {
		return value && typeof value === 'string' && regex.email.test(value);
	},

	isValidPhone(value) {
		return value && typeof value === 'string' && regex.phone.test(value);
	},

	isInstanceOf(value, base) {
		return value && value instanceof base;
	},

	isValidContent(value) {
		return value && typeof value === 'string' && value.length <= 2000; 
	},

}

class MessagingOperation {
	static id = 0;
	constructor(sender, receiver) {
		if(new.target === MessagingOperation) {
			throw new TypeError('Abstract class cannot be instantiated');
		}
		assert(
			validators.isInstanceOf(sender, User), 
			'Sender must be instance of User'
		);
		assert(
			validators.isInstanceOf(receiver, User), 
			'Receiver must be instance of User'
		);
		
		this.sender = sender;
		this.receiver = receiver;
		this.timestamp = new Date();
		this.messageId = ++MessagingOperation.id; 
		this.read = false;
	}
	
	send() {
		throw new TypeError('Abstract method must be implemented');
	}

	deleteM() {
		throw new TypeError('Abstract method must be implemented');
	}

	markRead() {
		this.read = true;
	}

	markUnread() {
		this.read = false;
	}

}

class TextMessage extends MessagingOperation {
	constructor(sender, receiver, content, conversation) {
		super(sender, receiver);
		
		assert(
			validators.isValidContent(content), 
			'Content must be a non empty string containing up to 2000 symbols'
		);
		assert(
			validators.isInstanceOf(conversation, Conversation),
			'conversation must be an instance of class Conversation',
		);
		
		this.content = content;
		this.conversation = conversation;
	}

	send() {
		this.markUnread();
		this.conversation.history.push(this);
		this.receiver.notify(this.conversation.conversationId, this.content);
	}

	deleteM() {
		for(let i in this.conversation.history) {
			if(this.conversation.history[i].messageId === this.messageId) {
				this.conversation.history.splice(i, 1);
				return true;
			}
		}
		return false;
	}
}

class User {
	constructor(name, contactInfo) {
		assert(
			validators.isNonEmptyString(name),
			'Name must be a non-empty string'
		);
		assert(
			validators.isValidEmail(contactInfo) || validators.isValidPhone(contactInfo),
			'Invalid E-mail or phone'
		);

		this.name = name;
		this.contactInfo = contactInfo;
		this.conversations = [];
		this.isOnline = false;
	}

	createConversation(users) {
		let conv = new Conversation();
		for(let i of users) {
			assert(
			validators.isInstanceOf(i, User),
			`${i} must be an instance of class User`,
			UserNotFoundError,
			);
			i.conversations.push(conv);
			conv.users.push(i);
		}
		this.conversations.push(conv);
		return conv;
	}

	goOnline() {
		this.isOnline = true;
	}

	goOffline() {
		this.isOnline = false;
	}

	notify(conversationId, message) {
		let found = false;
		assert(
			validators.isPositiveNumber(conversationId),
			'The conversation ID must be a positive number'
		);
		assert(
			validators.isNonEmptyString(message),
			'the message must be a non-empty string',
		);
		
		for(let i of this.conversations) {
			if(conversationId === i.conversationId) {
				found = true;
				if(this.isOnline && i.notifications) {
					console.log(`new message for ${this.name}: ${message}`);
					return;
				}
			}
		}	
			if(!found) {
				throw new UserNotFoundError('User not found');	
			}
	}

	muteNotifications(conversationId) {
		for(let i of this.conversations) {
			if(conversationId === i.conversationId) {
				i.notifications = false;
				return;
			}
		}	
		throw new Error(`Conversation with id ${conversationId} is missing`);
	}

}

class Conversation {
	static id = 0;
	constructor() {
		this.users = [];
		this.history = [];
		this.conversationId = ++Conversation.id;
		this.notifications = true;
	}

	addUser(user) {
		assert(
			validators.isInstanceOf(user, User),
			'user must be an instance of User',
			UserNotFoundError,
		);
		this.users.push(user);
	}

	getHistory(limit = 5) {
		return this.history.slice(-limit);
	}

}

const sender1 = new User('Bob', 'example@gmail.com');
const receiver1 = new User('Alice', 'alice1@gmail.com');

sender1.goOnline();
receiver1.goOnline();

const converse = sender1.createConversation([sender1, receiver1]);

receiver1.muteNotifications(converse.conversationId);

const message1 = new TextMessage(
	sender1, 
	receiver1, 
	'Hello Alice. How are you?', 
	converse
);
message1.send();








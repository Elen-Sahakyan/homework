class BankAccount {
    constructor(owner, balance = 0) {
        this.owner = owner;
        this.balance = balance;
    }
    
    toDeposit(amount) {
        return this.balance += amount;
    }

    toWithdrow(amount) {
        if(this.balance - amount < 0) {
            throw new Error ("Insufficient funds!")
        }
        return this.balance -= amount;
    }
}


const acc = new BankAccount("Elen", 200_000);

console.log(acc.toDeposit(15_000));

console.log(acc.toWithdrow(37_000));



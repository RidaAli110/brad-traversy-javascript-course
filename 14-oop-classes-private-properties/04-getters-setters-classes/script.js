// My code following Brad's Course

class BankAccount {
  constructor(balance) {
    this._balance = balance;
  }

  get balance() {
    return this._balance;
  }

  get formattedBalance() {
    return `£${this._balance}`;
  }

  get isOverdrawn(){
    return this._balance < 0
  }

  set balance(value) {
    if (value < 0) {
      return;
    }
    this._balance = value;
  }
}

const account = new BankAccount(1500);
// Test the setter
account.balance = -500;

console.log(account.balance);
console.log(account.formattedBalance);
console.log(account.isOverdrawn);

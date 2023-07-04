//Refactor 重構 
//我在沒有對外再做修改的情況下，對內部做調整 （不會加新功能）

class BankAccount {
    constructor(amount) {
      this.amount = amount
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.amount += amount
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && this.enough(amount)) {
        this.amount -= amount
      }
    }
  
    balance() {
      return this.amount
    }
  
    enough(amount) {
      return this.amount >= amount
    }
  }

//   module.exports = bank;

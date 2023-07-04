// const bank = require('./bank');
//

it("可以存錢", () => {
    // AAA = Arrange, Act, Assert
    // Arrange
    const account = new BankAccount(10)
  
    // Act
    account.deposit(5)
  
    // Assert
    expect(account.balance()).toBe(15)
  })
  
  it("不可以存 0 元", () => {
    const account = new BankAccount(10)
    account.deposit(0)
    expect(account.balance()).toBe(10)
  })
  
  it("不可以存小於 0 元的金額", () => {
    const account = new BankAccount(10)
    account.deposit(-3)
    expect(account.balance()).toBe(10)
  })
  
  it("可以領錢", () => {
    const account = new BankAccount(10)
    account.withdraw(3)
    expect(account.balance()).toBe(7)
  })
  
  it("不可以領 0 元或是小於 0 元的金額", () => {
    const account = new BankAccount(10)
    account.withdraw(-3)
    expect(account.balance()).toBe(10)
  })
  
  it("不能領超過本身餘額", () => {
    const account = new BankAccount(10)
    account.withdraw(12)
    expect(account.balance()).toBe(10)
  })

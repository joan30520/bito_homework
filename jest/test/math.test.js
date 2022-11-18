const {add,subtract,bankaccount} = require("../math");
//toBe
test("should get correct sum of two numbers" , () => {
    expect(add(2,3)).toBe(5);
});
//not toBe
test("should not get zero" , () => {
    expect(subtract(2,3)).not.toBe(0);
});
//toBeNull
test("should get null" , () => {
    const number = null;
    expect(number).toBeNull();
});
//toBeLessThan
test("should get sum less than 50" , () => {
    expect(add(20,29)).toBeLessThan(50);
});
//toBeLessThanOrEqual
test("should get sum less than or equal 50" , () => {
    expect(add(20,30)).toBeLessThanOrEqual(50);
});
//toBeTruthy
test("Username should be admin" , () => {
    const username = "admin";
    expect(username==="admin").toBeTruthy();
});
//toBeFalsy
test("Username should be admin" , () => {
    const username = "admins";
    expect(username==="admin").toBeFalsy();
});
//toEqual 用來比較object
test("Balance equals 500" , () => { 
    expect(bankaccount.getBalance()).toEqual({balance: 500});
});
//toContain
test("Admin should be in username" , () => {
    const username = ["john","admin","smith"];
    expect(username).toContain("admin");
});
//toMatch
test("Phunker should include p" , () => {
    expect("Phunker").toMatch(/p/i);
});
const add = (a, b) => {
    return a + b
};
   
const subtract = (a, b) => {
    return a - b
};
const bankaccount = {
    income: 1000,
    expense: 500,
    getBalance(){
        return{ 
            balance: this.income-this.expense
        };
    }
}

module.exports = {
    add,
    subtract,
    bankaccount
}
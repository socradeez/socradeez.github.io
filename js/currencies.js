class Currency {
    constructor(name, startingAmount, isActive, startingIncrement) {
        this.name = name;
        this.amount = startingAmount;
        this.isActive = isActive;
        this.incrAmount = startingIncrement;
        currenciesList.push(this);
    }
    
    increment() {
        this.amount = this.amount += this.incrAmount;
    }
}

let currenciesList = [];

let Hydrogen = new Currency('Hydrogen', 0, True, 0);
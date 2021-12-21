class Currency {
    constructor(name, startingAmount) {
        this.name = name;
        this.amount = startingAmount;
        currenciesList.push(this);
    }
}

currenciesList = [];

let Hydrogen = new Currency('Hydrogen', 0);
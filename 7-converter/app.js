const currencyConverter = (amount, from, to) => {
    switch (`${from}/${to}`) {
        case 'RUB/USD':
            return amount / 69.02;
        case 'USD/RUB':
            return amount * 68.97;
        case 'RUB/EUR':
            return amount / 104.9;
        case 'EUR/RUB':
            return amount * 104.9;
        case 'RUB/MXN':
            return amount / 5.5;
        case 'MXN/RUB':
            return amount * 5.5;
        default:
            return null;
    }
}


function toDollar(sum, currencyOfFunds) {
    switch (currencyOfFunds) {
        case 'rubles':
           return sum * 0.01;
        case 'euro' :
           return sum * 1.1;
        case 'pesos':
            return sum * 0.06;
        case 'dollars':
            return sum * 1;
        default:
            return null;
    }
}

function calculator(sum, currencyOfFunds, targetCurrency) {
    switch (targetCurrency) {
        case 'rubles':
           return toDollar(sum, currencyOfFunds) * 100;
        case 'euro':
           return toDollar(sum, currencyOfFunds) * 0.92;
        case 'pesos':
            return toDollar(sum, currencyOfFunds) * 17;
        case 'dollars':
            return toDollar(sum, currencyOfFunds) * 1;
        default:
            return null;
    }
}
console.log(calculator(100, 'pesos', 'euro'));
console.log(currencyConverter(100, 'RUB', 'MXN'));
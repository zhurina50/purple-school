function toDollar(sum, currencyOfFunds) {
    let result;
    switch (currencyOfFunds) {
        case 'rubles' :
           result = sum * 0.01;
            break;
        case 'euro' :
           result = sum * 1.1;
            break;
        case 'pesos' :
            result = sum * 0.06;
            break;
        case 'dollars':
            result = sum * 1;
            break;
        default:
            result = null;
    }
    return result;
};

function calculator(sum, currencyOfFunds, targetCurrency) {
    let result;
    switch (targetCurrency) {
        case 'rubles' :
           result = toDollar(sum, currencyOfFunds) * 100;
            break;
        case 'euro' :
           result = toDollar(sum, currencyOfFunds) * 0.92;
            break;
        case 'pesos' :
            result = toDollar(sum, currencyOfFunds) * 17;
            break;
        case 'dollars':
            result = toDollar(sum, currencyOfFunds) * 1;
            break;
        default:
            result = null;
    }
    return result;
};
console.log(calculator(100, 'pesos', 'euro'));

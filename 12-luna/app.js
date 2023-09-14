const cardNumber = '4561-2612-1234-5464';

function isThisCorrectNumber (number) {
    let num = number.replaceAll('-', '');
    if (isNaN(Number(num)))  {
         console.log('Номер не корректен');
         return;
    }

    let result = 0;

    for (let i=0; i<num.length; i=i+2) {
        let digit = Number(num[i])*2;
        digit = digit > 9 ? digit - 9 : digit;
        result = result + digit + Number(num[i+1]);
    }
    const message = result%10 === 0 ? 'Номер корректен' : 'Номер не корректен';

    console.log(message);
}

isThisCorrectNumber(cardNumber);

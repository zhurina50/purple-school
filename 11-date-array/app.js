
const example = ['10-02-2022', 'тест', '11-gfgf-44', '11/12/2023', '00/13/2022', '11/30/1000', '41/12/2023', '20-04-2323', '20-60-5454', '15-08-2100'];

function findDate(arr) {
    let ruDate =[];
    let engDate = [];
    let res = [];
//Ищем даты в фомате ДД-ММ-ГГ, разбиваем строки по символу -
    arr.map (el => {
        if (el.includes('-')) {
         ruDate.push(el.split('-'));
        }
    });
//Превращаем строки в числа   
    ruDate = ruDate.map (el => el.map(el => parseInt(el)));
//Фильтруем, сначала вариант с февралем, потом месяцы с 30ю днями и 31 днем
    const resRuFeb = ruDate.filter(date => {
        return date[1]===2 && (date[0]<=29 && date[0]>=1) && date[2]>999;
    });
    const resRuShort = ruDate.filter(date => {
        return (date[1]===4||date[1]===6||date[1]===9||date[1]===11) 
        && (date[0]<=30 && date[0]>=1) && date[2]>999;
    });
    const resRuLong = ruDate.filter(date => {
        return (date[1]===1||date[1]===3||date[1]===5||date[1]===7||
        date[1]===8||date[1]===10||date[1]===12) && (date[0]<=31 && date[0]>=1) &&
        date[2]>999;
    });
//Склеиваем три массива в один
    res = resRuLong.concat(resRuFeb.concat(resRuShort));

//то же самое с датами в формате ММ/ДД/ГГ
//разбиваем по /, превращаем в число
    arr.map (el => {
        if (el.includes('/')) {
         engDate.push(el.split('/'));
        }
    });
    engDate = engDate.map (el => el.map(el => parseInt(el)));
//фильтруем так же помесячно, но месяц уже [0]
    const resEngFeb = engDate.filter(date => {
        return date[0]===2 && (date[1]<=29 && date[1]>=1) && date[2]>999;
    });
    const resEngShort = engDate.filter(date => {
        return (date[0]===4||date[0]===6||date[0]===9||date[0]===11) 
        && (date[1]<=30 && date[1]>=1) && date[2]>999;
    });
    const resEngLong = engDate.filter(date => {
        return (date[0]===1||date[0]===3||date[0]===5||date[0]===7||
        date[0]===8||date[0]===10||date[0]===12) && (date[1]<=31 && date[1]>=1) &&
        date[2]>999;
    });
//склеиваем результат с предыдущим массивом
    res = res.concat(resEngLong.concat(resEngFeb.concat(resEngShort)));
//приклеиваем 0 там, где его не хватает для формата 02, напр., переводим в строку
    res = res.map(date => {
     return date.map(el => (el<10) ? '0'+el : el).join('-')
    });

    return res;
}

 console.log(findDate(example));

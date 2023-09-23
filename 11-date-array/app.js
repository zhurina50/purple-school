
const example = ['11/10/2020', '10-02-2022', 'тест', '11-gfgf-44', '11/12/2023', '00/13/2022', '11/30/1000', '41/12/2023', '20-04-2323', '20-60-5454', '15-08-2100'];
console.log(findDate(example));


function findDate(dates) {
    const datesCopy = [...dates];
    const result = datesCopy.map(el => splitStingToDate(el))
        .map(el => filterValidDay(el))
        .filter(el => el.length > 1)
        .map(el => el.map(el => (el < 10) ? '0' + el : el).join('-'));
    return result;
}


function splitStingToDate(str) {
    if (str.includes('/') && str.length === 10) {
        const arr = str.split('/');
        if (arr.length === 3) {
            const [month, day, year] = arr;
            return [day, month, year];
        }
    } else if (str.includes('-') && str.length === 10) {
        const arr = str.split('-');
        if (arr.length === 3) {
            return arr;
        }
    } else {
        return [];
    }
}


function filterValidDay(date) {
    const res = date.map(el => parseInt(el));
    return checkDay(res[0], res[1]) ? res : [];
}


function checkDay(day, month) {
    const month31 = [1, 3, 5, 7, 8, 10, 12];
    const month30 = [4, 6, 9, 11];
    const february = [2];
    if (month31.includes(month)) {
        return day <= 31 && day >= 1;
    } else if (month30.includes(month)) {
        return day <= 30 && day >= 1;
    } else if (february.includes(month)) {
        return day <= 29 && day >= 1;
    }
    return false;
}

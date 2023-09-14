
const arr = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];

function findDate(array) {
    const result = array
        .map(el => el.split(/-|\//))
        .filter(date => {
            return (parseInt(date[0]) <= 31 && parseInt(date[0]) >= 1) 
            && (parseInt(date[1]) <=12 && parseInt(date[1]) >= 1) && parseInt(date[2]) <=3000;
        })
        .map(el => el.join('-'));
    return result;
}
console.log(findDate(arr));

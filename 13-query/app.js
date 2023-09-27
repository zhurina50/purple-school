const example = {
    search: 'вася',
    take: 10,
    aaaaaa: 55
}

function queryParameterToString(parameter) {
   let str = '';
    for (const key in parameter) {
        str = `${str}${key}=${parameter[key]}$`;
    }
    return str.slice(0,-1);
}

console.log(queryParameterToString(example));

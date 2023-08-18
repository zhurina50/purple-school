let language = prompt('Enter your language');
switch (language) {
    case 'russian':
        console.log('Привет!');
    break;
    case 'english':
        console.log('Hello!');
    break;
    case 'spanish':
        console.log('Hola!');
    break;
    case 'german':
        console.log('Gutten tag!');
    break;
    default:
        console.log('Моя твоя не понимайт!');
}
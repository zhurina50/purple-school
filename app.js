function passwordEncryptor(password) {
    const piece = [1, 'qq'];
    let newPassword = password.split('');
    newPassword.reverse();
    newPassword = newPassword.concat(piece);
    return newPassword.join('');
}
console.log(passwordEncryptor('хочукушать'));

function passwordDecoder(checkedPassword, originPassword) {
    let result = checkedPassword.split('');
    result.splice(-3);
    result.reverse();
    return result.join('') === originPassword;
}
console.log(passwordDecoder('ьташукучох1qq','хочукушать'));

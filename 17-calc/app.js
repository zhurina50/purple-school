'use strict';
const firstValue = document.querySelector('.first');
const secondValue = document.querySelector('.second');
const result = document.querySelector('.result');
let sum;

document.querySelector('.reset').addEventListener('click', function () {
    firstValue.value = '';
    secondValue.value = '';
    result.innerText = 'Result';
});

function checkNotNumber(firstValue, secondValue) {
    if (isNaN(Number(firstValue.value)) || isNaN(Number(secondValue.value))) {
        document.querySelector('.result').innerText = 'Error';
        return true;
    }
}

document.querySelector('.calculation').onclick = function (event) {
    if (event.target.tagName != 'BUTTON') return; 
    if (checkNotNumber(firstValue, secondValue)) {
        return
    } else {
        switch (event.target) {
            case document.querySelector('.addition'):
                sum = Number(firstValue.value) + Number(secondValue.value);
                break;
            case document.querySelector('.subtraction'):
                sum = Number(firstValue.value) - Number(secondValue.value);
                break;
            case document.querySelector('.multiplication'):
                sum = Number(firstValue.value) * Number(secondValue.value);
                break;
            case document.querySelector('.division'):
                sum = Number(firstValue.value) / Number(secondValue.value);
                break;
        }
        document.querySelector('.result').innerText = `Result ${sum}`;
    }
}
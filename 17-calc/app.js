'use strict';
const firstValue = document.querySelector('.first');
const secondValue = document.querySelector('.second');
const result = document.querySelector('.result');

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

function addition() {
    if (checkNotNumber(firstValue, secondValue)) {
        return
    } else {
        const sum = Number(firstValue.value) + Number(secondValue.value);
        document.querySelector('.result').innerText = `Result ${sum}`;
    }
}

function subtraction() {
    if (checkNotNumber(firstValue, secondValue)) {
        return
    } else {
        const sum = Number(firstValue.value) - Number(secondValue.value);
        document.querySelector('.result').innerText = `Result ${sum}`;
    }
}

function multiplication() {
    if (checkNotNumber(firstValue, secondValue)) {
        return
    } else {
        const sum = Number(firstValue.value) * Number(secondValue.value);
        document.querySelector('.result').innerText = `Result ${sum}`;
    }
}

function division() {
    if (checkNotNumber(firstValue, secondValue)) {
        return
    } else {
        const sum = Number(firstValue.value)/Number(secondValue.value);
        document.querySelector('.result').innerText = `Result ${sum}`;
    }
}

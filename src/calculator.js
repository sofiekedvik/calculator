'use strict';

var result = document.getElementsByClassName('number')[0];
var td = document.getElementsByTagName('td');
var oldValue = '';
var newValue = 0;
var firstValue = '';
var operator = '';

function isNumber(val) {
    var reg = /^\d+$/;
    return reg.test(val);
}

function resetValues() {
    firstValue = '';
    newValue = 0;
    oldValue = '';
}

function calculate() {
    var res = 0;

    if (!firstValue || !newValue) {
        return;
    }

    firstValue = parseFloat(firstValue);
    newValue = parseFloat(newValue);

    switch (operator) {
        case '*':
            res = firstValue * newValue;
            break;
        case '/':
            res = firstValue / newValue;
            break;
        case '+':
            res = firstValue + newValue;
            break;
        case '-':
            res = firstValue - newValue;
            break;
        default: break;
    }

    result.innerHTML = res;
    resetValues();
}

function checkValue() {
    var val = this.innerText;

    if (isNumber(val) || val === '.') {
        oldValue = String(oldValue) + String(val);
        newValue = oldValue;
        result.innerHTML = newValue;
    } else if (val === 'C') {
        resetValues();
        result.innerHTML = newValue;
    } else {
        firstValue = newValue;
        oldValue = '';
        operator = val;
    }
}

for (var i = 0; i <td.length; i++){
    var cell = td[i];
    if (cell.getAttribute('class') === 'equals') {
        cell.addEventListener('click', calculate );
    } else if (cell.getAttribute('class') === 'number') {
        // do nothing
    } else {
        cell.addEventListener('click', checkValue );
    }
}

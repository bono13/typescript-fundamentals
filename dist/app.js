"use strict";
function add(num1, num2, showResult, phrase) {
    const result = num1 + num2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
    return;
}
const number1 = 5;
const number2 = 2.8;
const printResult = true;
const printPhrase = 'Result is: ';
add(number1, number2, printResult, printPhrase);
//# sourceMappingURL=app.js.map
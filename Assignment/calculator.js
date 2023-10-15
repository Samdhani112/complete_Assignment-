function appendToDisplay(value) {
    document.calculator.answer.value += value;
}

function clearDisplay() {
    document.calculator.answer.value = '';
}

function calculate() {
    try {
        document.calculator.answer.value = eval(document.calculator.answer.value);
    } catch (error) {
        document.calculator.answer.value = 'Error';
    }
}

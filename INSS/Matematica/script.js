var number =  document.getElementById('result');

function clearResult() {
    number.value = '';
}

function appendToResult(value) {
    number.value = number.value + value;
}

function calculateResult() {
    try {
        number.value = eval(number.value);
    } catch (error) {
        number.value = 'Erro';
        console.error('Erro ao avaliar a expressão:', error);
    }
}
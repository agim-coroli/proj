
function appendToDisplay(value) {
    document.getElementById('display').value += value;
    la valeur de display est egal a sa valeur cliquer plus une valeur cliquer
}

function calculateResult() {
    var display = document.getElementById('display');
    display.value = eval(display.value);
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

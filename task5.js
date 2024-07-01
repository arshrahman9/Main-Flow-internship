function appendValue(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        var display = document.getElementById('display');
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}


 
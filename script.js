let display = document.getElementById('display');
let memory = null;

// Append value to the display
function appendToDisplay(value) {
    display.value += value;
}

// Clear the display
function clearDisplay() {
    display.value = '';
}

// Delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

// Square the current value
function square() {
    try {
        display.value = Math.pow(parseFloat(display.value), 2);
    } catch {
        display.value = 'Error';
    }
}

// Square root of the current value
function squareRoot() {
    try {
        display.value = Math.sqrt(parseFloat(display.value));
    } catch {
        display.value = 'Error';
    }
}

// Raise to the power (x^y)
function power() {
    display.value += '**';
}

// Memory Store (MS)
function memoryStore() {
    memory = display.value;
}

// Memory Recall (MR)
function memoryRecall() {
    if (memory !== null) {
        display.value += memory;
    }
}

// Memory Clear (MC)
function memoryClear() {
    memory = null;
}

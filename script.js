function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function deleteLast() {
    let display = document.getElementById('display');
    let currentValue = display.innerText;
    if (currentValue.length > 1) {
        display.innerText = currentValue.slice(0, -1);
    } else {
        display.innerText = '0';
    }
}

function appendCharacter(char) {
    let display = document.getElementById('display');
    let currentValue = display.innerText;
    if (currentValue === '0') {
        display.innerText = char;
    } else {
        display.innerText += char;
    }
}

function calculateResult() {
    let display = document.getElementById('display');
    let currentValue = display.innerText;
    try {
        let result = eval(currentValue);
        display.innerText = result;
    } catch (error) {
        display.innerText = 'Error';
    }
}
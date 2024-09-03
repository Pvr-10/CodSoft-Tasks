// script.js
const buttons = document.querySelectorAll('.btn');
const display = document.getElementById('display');
let currentInput = '0';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (button.id === 'clear') {
            currentInput = '0';
        } else if (button.id === 'equals') {
            currentInput = eval(currentInput);
        } else {
            if (currentInput === '0') {
                currentInput = value;
            } else {
                currentInput += value;
            }
        }

        display.textContent = currentInput;
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const keys = document.querySelectorAll('.key');
    let currentInput = '';
    let lastAnswer = '';

    keys.forEach(key => {
        key.addEventListener('click', function (event) {
            event.preventDefault();
            const keyValue = this.textContent;

            if (keyValue === 'AC') {
                currentInput = '';
            } else if (keyValue === 'DEL') {
                currentInput = currentInput.slice(0, -1);
            } else if (keyValue === 'ANSWER') {
                try {
                    lastAnswer = eval(currentInput.replace('X', '*'));
                    currentInput = lastAnswer;
                    console.log(currentInput, lastAnswer);
                } catch {
                    currentInput = 'Error';
                }
            } else {
                currentInput += keyValue;
            }

            display.textContent = currentInput;
        });
    });
});
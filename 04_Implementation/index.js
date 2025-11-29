const display = document.getElementById('displayResult');
const buttons = document.querySelectorAll('input[type="button"]');
let calculated = false;

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const btnvalue = e.target.value;

        if (btnvalue === '=') {
            calculate();
        } else if (btnvalue === 'AC') {
            display.value = '';
            calculated = false;
        } else if (btnvalue === 'DE') {
            display.value = display.value.toString().slice(0, -1);

        } else {
            const isOperator = ['+', '-', '*', '/'].includes(btnvalue);

            if (calculated && !isOperator) {
                display.value = btnvalue;
                calculated = false;
            } else {
                if (display.value === 'Error') {
                    display.value = btnvalue;
                } else {
                    display.value += btnvalue;
                }
                if (calculated && isOperator) {
                    calculated = false;
                }
            }
        }
    });
});

function calculate() {
    if (display.value === '') return;
        
    try {
        let result = eval(display.value);

        if (!isFinite(result) || isNaN(result)) {
            display.value = "Error";
        } else {
            display.value = result;
        }
        calculated = true; 

    } catch (error) {
        display.value = "Error";
        calculated = true;
    }
}
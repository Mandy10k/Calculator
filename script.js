document.querySelector('.calculator').addEventListener('click', function(e) {
    if (e.target.matches('button')) {
        let display = document.querySelector('.display');
        let value = e.target.textContent;

        if (value === 'C') {
            display.value = '';
        } else if (value === '=') {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        } else if (value === 'sin') {
            display.value = Math.sin(display.value);
        } else if (value === 'cos') {
            display.value = Math.cos(display.value);
        } else if (value === 'tan') {
            display.value = Math.tan(display.value);
        } else if (value === 'π') {
            display.value = Math.PI;
        } else {
            display.value += value;
        }
    }
});

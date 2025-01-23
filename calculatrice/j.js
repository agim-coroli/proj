let buttons = document.querySelectorAll('button');

let display = document.querySelector('input');

let num1 = "";
let operator = "";
let num2 = "";


buttons.forEach(button => {
    button.addEventListener('click', () => {
        let btnTxt = button.innerText;
        let displaytxt = display.value;
        if (btnTxt === 'C' && btnTxt !== "") {
            displaytxt = '';
            num1 = '';
            operator = '';
            num2 = '';
        } else if (btnTxt === '=') {
            displaytxt = eval(num1 + operator + num2)
        } else if (['+', '-', '*', '/'].includes(btnTxt)) {
            if (['+', '-', '*', '/'].includes(displaytxt.slice(-1))) {
                display.value = display.value.slice(0, -1) + btnTxt; // Remplacer l'opérateur existant
                // A MODIFIER
            } else {
                operator = btnTxt;
                display.value += operator;
            }
        } else {
            display.value += btnTxt;
        }
    });
});
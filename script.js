let conta = '';
let usado = false
function calculadora(e) {
    let input = document.getElementById('conta')

    let arrayConta = input.value.split('')

    if (e === 'backspace') {
        arrayConta[arrayConta.length - 1] = '';
        conta = arrayConta.join('');
        input.value = conta
        if (input.value === '') {
            input.value = 0;
        }
    }
    else if (e != '+' && e != '-' && e != '*' && e != '/' && e != '=' && e != 'CE' && e != 'C') {
        if(usado == true && arrayConta.includes('+') == false && arrayConta.includes('-') == false && arrayConta.includes('*') == false && arrayConta.includes('/') == false){
            conta = `${e}`;
            input.value = conta
            usado = false;
        }    
        else{
            conta += e;
            input.value = conta;
        }
    }
    else {

        if (e === '=') {
            conta = eval(conta);
            input.value = conta;
            usado = true;
        }
        else if (e === 'CE' || e === 'C') {
            if (e === 'CE') {
                if (input.value.includes('*')) {
                    let newArray = input.value.split('*')
                    conta = newArray[0] + '*';
                    input.value = conta;
                    if(newArray[1] === ''){
                        input.value = 0;
                        conta = '';
                    }
                }
                else if (input.value.includes('/')) {
                    let newArray = input.value.split('/')
                    conta = newArray[0] + '/';
                    input.value = conta;
                    if(newArray[1] === ''){
                        input.value = 0;
                        conta = '';
                    }
                }
                else if (input.value.includes('-')) {
                    let newArray = input.value.split('-')
                    conta = newArray[0] + '-';
                    input.value = conta;
                    if(newArray[1] === ''){
                        input.value = 0;
                        conta = '';
                    }
                }
                else if (input.value.includes('+')) {
                    let newArray = input.value.split('+')
                    conta = newArray[0] + '+';
                    input.value = conta;
                    if(newArray[1] === ''){
                        input.value = 0;
                        conta = '';
                    }
                }
                else {
                    input.value = 0;
                    conta = '';
                }
            }
            else {
                conta = '';
                input.value = 0;
            }
        }
        else if (arrayConta.includes('+') || arrayConta.includes('-') || arrayConta.includes('*') || arrayConta.includes('/')) {
            if (arrayConta[arrayConta.length - 1] === '+' || arrayConta[arrayConta.length - 1] === '-' || arrayConta[arrayConta.length - 1] === '*' || arrayConta[arrayConta.length - 1] === '/') {
                arrayConta.splice(arrayConta.length - 1, 1, e);
                conta = arrayConta.join('');
                input.value = conta
            }
            else {
                conta = eval(conta);
                conta += e;
                input.value = conta;
            }
        }
        else {
            conta += e;
            input.value = conta;
        }
    }
}

const keyPressed = (e) => {
    if(e.code === "Digit1" || e.code === "Numpad1"){
        document.getElementById('num1').click();
    }
    else if(e.code === "Digit2" || e.code === "Numpad2"){
        document.getElementById('num2').click();
    }
    else if(e.code === "Digit3" || e.code === "Numpad3"){
        document.getElementById('num3').click();
    }
    else if(e.code === "Digit4" || e.code === "Numpad4"){
        document.getElementById('num4').click();
    }
    else if(e.code === "Digit5" || e.code === "Numpad5"){
        document.getElementById('num5').click();
    }
    else if(e.code === "Digit6" || e.code === "Numpad6"){
        document.getElementById('num6').click();
    }
    else if(e.code === "Digit7" || e.code === "Numpad7"){
        document.getElementById('num7').click();
    }
    else if(e.code === "Digit8" || e.code === "Numpad8"){
        document.getElementById('num8').click();
    }
    else if(e.code === "Digit9" || e.code === "Numpad9"){
        document.getElementById('num9').click();
    }
    else if(e.code === "Digit0" || e.code === "Numpad0"){
        document.getElementById('num0').click();
    }
    else if(e.code === "NumpadDivide"){
        document.getElementById('divisao').click();
    }
    else if(e.code === "NumpadMultiply"){
        document.getElementById('multiplicacao').click();
    }
    else if(e.code === "Minus" || e.code === "NumpadSubtract"){
        document.getElementById('subtracao').click();
    }
    else if(e.code === "NumpadAdd" || e.code === "Equal"){
        document.getElementById('adicao').click();
    }
    else if(e.code === "NumpadEnter" || e.code === "Enter"){
        document.getElementById('igual').click();
    }
    else if(e.code === "Backspace"){
        document.getElementById('backspace').click();
    }
    else if(e.code === "F2"){
        document.getElementById('CE').click();
    }
    else if(e.code === "Delete"){
        document.getElementById('C').click();
    }
    console.log(e);
}

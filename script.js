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



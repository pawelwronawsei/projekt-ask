import { incrementOp } from "./incrementOp.js";
import { decrementOp } from "./decrementOp.js";
import { notOp } from "./notOp.js";
import { negOp } from "./negOp.js";
import { andOp } from "./andOp.js";
import { orOp } from "./orOp.js";
import { xorOp } from "./xorOp.js";
import { addOp } from "./addOp.js";
import { subOp } from "./subOp.js";
import { movOp } from "./movOp.js";
import { xchgOp } from "./xchgOp.js";
import { mulOp } from "./mulOp.js";
import { divOp } from "./divOp.js";
import { imulOp } from "./imulOp.js";
import { idivOp } from "./idivOp.js";

let registers = document.querySelectorAll('.hex_code');
const confirmRegistersBtn = document.querySelector('#register-setting-btn');
const confirmRegBtn = document.querySelector('#confirm-registers');
const operationsSelect = document.querySelector('#operations');
const regEx = /^[0-9a-fA-F\b]+$/;
const operationsWithOneReg = ["INC", "DEC", "NOT", "NEG", "MUL", "DIV", "IMUL", "IDIV"];

registers.forEach((register) => {
    register.addEventListener('keydown', (event) => {
        if(event.keyCode !== 8){
            !regEx.test(event.key) && event.preventDefault();
        }
    }, false);
});

confirmRegistersBtn.addEventListener('click', () => {
    confirmRegisters();
    hideShowOperationInputs('INC');
});

operationsSelect.addEventListener('change', (e) => hideShowOperationInputs(e.target.value));

//po zatwierdzeniu operacji i wybraniu rejestru
confirmRegBtn.addEventListener('click', () => {
    let registerSelects = document.querySelectorAll('.specify-registers-select');
    let chosenOperation = document.querySelector('#operations').value;
    const alertContainer = document.querySelector('#alert-container');
    const chosenRegValForDivs = document.querySelector(`[name='${registerSelects[0].value}']`).value;

    alertContainer.innerText = '';

    switch(chosenOperation){
        case "INC":
            incrementOp(registerSelects[0]);
            break;
        case "DEC":
            decrementOp(registerSelects[0]);
            break;
        case "NOT":
            notOp(registerSelects[0]);
            break;
        case "NEG":
            negOp(registerSelects[0]);
            break;
        case "AND":
            andOp(registerSelects[0], registerSelects[1]);
            break;
        case "OR":
            orOp(registerSelects[0], registerSelects[1]);
            break;
        case "XOR":
            xorOp(registerSelects[0], registerSelects[1]);
            break;
        case "ADD":
            addOp(registerSelects[0], registerSelects[1]);
            break;
        case "SUB":
            subOp(registerSelects[0], registerSelects[1]);
            break;
        case "MOV":
            movOp(registerSelects[0], registerSelects[1]);
            break;
        case "XCHG":
            xchgOp(registerSelects[0], registerSelects[1]);
            break;
        case "MUL":
            mulOp(registerSelects[0]);
            break;
        case "IMUL":
            imulOp(registerSelects[0]);
            break;
        case "DIV":
            if(chosenRegValForDivs == '00'){
                alertContainer.innerText = 'Nie można dzielić przez 0!';
            }else{
                divOp(registerSelects[0]);
            }
            break;
        case "IDIV":
            if(chosenRegValForDivs == '00'){
                alertContainer.innerText = 'Nie można dzielić przez 0!';
            }else{
                idivOp(registerSelects[0]);
            }
            break;
    }
})

//FUNKCJA SPRAWDZA CZY KAŻDY Z REJESTRÓW MA DŁUGOŚĆ ZNAKÓW = 2
const checkRegisters = (registers) => {
    return registers.every((register) => {
        if(register.value.length !== 2){
            return false;
        }

        return true;
    })
}

const confirmRegisters = () => {
    registers = Array.from(document.querySelectorAll('.hex_code'));

    if(checkRegisters(registers)){
        document.querySelector("#operations-container").style.display = 'flex';
        document.querySelectorAll('.specify-registers-select')[1].style.opacity = 0;
        confirmRegistersBtn.style.display = 'none';

        registers.forEach(register => {
            register.disabled = true;
        });
    }else{
        console.log(false);
    }
}

//FUNKCJA USUWA 1 INPUTA KIEDY OPERACJA GO NIE POTRZEBUJE (np. INC nie potrzebuje 2 inputów)
const hideShowOperationInputs = (chosenOperation) => {
    const registerSelects = document.querySelectorAll('.specify-registers-select');
    
    if(operationsWithOneReg.includes(chosenOperation)){
        registerSelects[1].style.opacity = '0';
    }else{
        registerSelects[1].style.opacity = '100%';
    }
}
export const decrementOp = (register) => { 
    let regToChange = document.querySelector(`[name='${register.value}']`);

    if(regToChange.value.toLowerCase() === '00') {
        regToChange.value = 'ff';
        return;
    }

    let decrementedRegAsInt = parseInt(regToChange.value, 16) - 1;

    regToChange.value = decrementedRegAsInt.toString(16).padStart(2, '0');
    return;
}
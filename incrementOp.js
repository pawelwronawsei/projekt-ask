export const incrementOp = (register) => { 
    let regToChange = document.querySelector(`[name='${register.value}']`);

    if(regToChange.value.toLowerCase() === 'ff') {
        regToChange.value = '00';
        return;
    }

    let incrementedRegAsInt = parseInt(regToChange.value, 16) + 1;

    regToChange.value = incrementedRegAsInt.toString(16).padStart(2, "0");
    return;
}
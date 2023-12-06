export const negOp = (register) => {
    let regToChange = document.querySelector(`[name='${register.value}']`);

    if(regToChange.value.toLowerCase() === '00'){
        regToChange.value = "01";
        return; 
    }

    const regValBin = parseInt(regToChange.value, 16).toString(2).padStart(8, '0');

    let regValBinNOT = regValBin.split('').map(char => char === '1' ? '0' : '1').join('');

    let regValHex = (parseInt(regValBinNOT, 2) + 1).toString(16);

    regToChange.value = regValHex.padStart(2, '0');
    return;
}
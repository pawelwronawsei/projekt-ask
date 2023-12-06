export const notOp = (register) => {
    let regToChange = document.querySelector(`[name='${register.value}']`);

    const regValBin = parseInt(regToChange.value, 16).toString(2).padStart(8, '0');

    let regValBinNOT = regValBin.split('').map(char => char === '1' ? '0' : '1').join('');

    let regValHex = parseInt(regValBinNOT, 2).toString(16);

    if(regValHex.length === 1){
        regToChange.value = "0" + regValHex;
        return;
    }

    regToChange.value = regValHex;
    return;
}
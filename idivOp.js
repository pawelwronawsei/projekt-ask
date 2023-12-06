export const idivOp = (reg) => {
    reg = document.querySelector(`[name='${reg.value}']`);
    const ah = document.querySelector(`[name='AH']`);
    const al = document.querySelector(`[name='AL']`);

    const alDec = parseInt(al.value, 16);
    const regDec = parseInt(reg.value, 16);

    const alSbyte = (alDec & 127) - (alDec & 128);
    const regSbyte = (regDec & 127) - (regDec & 128);

    al.value = Math.round(alSbyte / regSbyte) < 0 
        ? negVal(Math.abs(Math.round(alSbyte / regSbyte))) 
        : Math.round(alSbyte / regSbyte).toString(16).padStart(2, "0");
    ah.value = (alSbyte % regSbyte).padStart(2, "0");
}

const negVal = (val) => {
    val = val.toString(2).split('').map(char => char === '1' ? '0' : '1').join('');
    val = (parseInt(val, 2) + 1).toString(16).padStart(2, "0");
    return val;
}
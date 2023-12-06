export const imulOp = (reg) => {
    reg = document.querySelector(`[name='${reg.value}']`);
    const ah = document.querySelector(`[name='AH']`);
    const al = document.querySelector(`[name='AL']`);

    const alDec = parseInt(al.value, 16);
    const regDec = parseInt(reg.value, 16);

    const alSbyte = (alDec & 127) - (alDec & 128);
    const regSbyte = (regDec & 127) - (regDec & 128);

    const multiplied = alSbyte * regSbyte;

    if(multiplied < 0){
        const multipliedBinNOT = (multiplied * -1).toString(2).split('').map(char => char === '1' ? '0' : '1').join('');
    
        const result =  (parseInt(multipliedBinNOT, 2) + 1).toString(16).padStart(4, "0");
    
        ah.value = result.slice(0, 2);
        al.value = result.slice(2);
    }else{
        const result = multiplied.toString(16).padStart(4, "0");
        ah.value = result.slice(0, 2);
        al.value = result.slice(2);
    }
}
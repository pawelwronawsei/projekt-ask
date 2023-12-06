export const divOp = (reg) => {
    reg = document.querySelector(`[name='${reg.value}']`);
    const ah = document.querySelector(`[name='AH']`);
    const al = document.querySelector(`[name='AL']`);

    const alDec = parseInt(al.value, 16);
    const regDec = parseInt(reg.value, 16);

    al.value = Math.round(alDec / regDec).toString(16).padStart(2, '0');
    ah.value = (alDec % regDec).toString(16).padStart(2, '0');
}
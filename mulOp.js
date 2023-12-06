export const mulOp = (reg) => {
    reg = document.querySelector(`[name='${reg.value}']`);
    const ah = document.querySelector(`[name='AH']`);
    const al = document.querySelector(`[name='AL']`);

    const alDec = parseInt(al.value, 16);
    const regDec = parseInt(reg.value, 16);

    const result = (alDec * regDec).toString(16).padStart(4, '0');

    ah.value = result.slice(0, 2);
    al.value = result.slice(2);
}
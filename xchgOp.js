export const xchgOp = (reg1, reg2) => {
    reg1 = document.querySelector(`[name='${reg1.value}']`);
    reg2 = document.querySelector(`[name='${reg2.value}']`);

    const reg1NewVal = reg2.value;
    const reg2NewVal = reg1.value;

    reg1.value = reg1NewVal;
    reg2.value = reg2NewVal;
}
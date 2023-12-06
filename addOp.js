export const addOp = (reg1, reg2) => {
    reg1 = document.querySelector(`[name='${reg1.value}']`);
    reg2 = document.querySelector(`[name='${reg2.value}']`);

    const reg1Dec = parseInt(reg1.value, 16);
    const reg2Dec = parseInt(reg2.value, 16);

    const regSum = reg1Dec + reg2Dec;
    const result = regSum > 255 ? regSum - 255 : regSum;

    reg1.value = result.toString(16).padStart(2, '0');
}
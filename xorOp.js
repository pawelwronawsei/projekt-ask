export const xorOp = (reg1, reg2) => {
    reg1 = document.querySelector(`[name='${reg1.value}']`);
    reg2 = document.querySelector(`[name='${reg2.value}']`);

    const reg1Bin = parseInt(reg1.value, 16).toString(2).padStart(8, '0').split('');
    const reg2Bin = parseInt(reg2.value, 16).toString(2).padStart(8, '0').split('');

    let result = '';

    for(let i = 0; i < 8; i++){
        if(reg1Bin[i] == reg2Bin[i]){
            result += '0';
        }else{
            result += '1';
        }
    }

    reg1.value = parseInt(result, 2).toString(16).padStart(2, '0');
}
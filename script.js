function calcularImpostos() {
    const salarioBruto = parseFloat(document.getElementById('salario_bruto').value);
    const dependentes = parseInt(document.getElementById('dependentes').value);
    let aliquotaINSS;
    let deducaoINSS;
    if (salarioBruto <= 1412) {
        aliquotaINSS = 0.075;
        deducaoINSS = 0;
    } else if (salarioBruto <= 2666.68) {
        aliquotaINSS = 0.09;
        deducaoINSS = 21.18;
    } else if (salarioBruto <= 4000.03) {
        aliquotaINSS = 0.12;
        deducaoINSS = 101.18;
    } else if (salarioBruto <= 7786.02) {
        aliquotaINSS = 0.14;
        deducaoINSS = 181.18;
    } else {
        aliquotaINSS = 0.14;
        deducaoINSS = 181.18;
    }
    const valorINSS = salarioBruto * aliquotaINSS - deducaoINSS;
    document.getElementById('valor_inss').textContent = valorINSS.toFixed(2);
    const baseCalculo = salarioBruto - valorINSS - (dependentes * 189.59);
    let aliquotaIR;
    let deducaoIR;
    if (baseCalculo <= 2259.20) {
        aliquotaIR = 0;
        deducaoIR = 0;
    } else if (baseCalculo <= 2826.65) {
        aliquotaIR = 0.075;
        deducaoIR = 169.44;
    } else if (baseCalculo <= 3751.05) {
        aliquotaIR = 0.15;
        deducaoIR = 381.44;
    } else if (baseCalculo <= 4664.68) {
        aliquotaIR = 0.225;
        deducaoIR = 662.77;
    } else {
        aliquotaIR = 0.275;
        deducaoIR = 869.00;
    }
    const valorIR = baseCalculo * aliquotaIR - deducaoIR;
    document.getElementById('valor_ir').textContent = Math.max(0, valorIR).toFixed(2);
    const salarioLiquido = salarioBruto - valorINSS - valorIR;
    document.getElementById('salario_liquido').textContent = salarioLiquido.toFixed(2);
    return false;
}
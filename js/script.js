const litros = document.getElementById('op1').value;
const mililitros = document.getElementById('op2').value;
const galoes = document.getElementById('op3').value;

function convert() {
    const de = document.getElementById('de').value;
    const para = document.getElementById('para').value;
    const valor = parseFloat(document.getElementById('valorCv').value);
    let resultado;

    if (de === 'op1' && para === 'op2') {
        resultado = valor * 1000;
    } else if (de === 'op2' && para === 'op1') {
        resultado = valor / 1000
    } else if (de === 'op1' && para === 'op3') {
        resultado = valor * 3.785;
    } else if (de === 'op3' && para === 'op1') {
        resultado = valor / 3.785;
    } else if (de === 'op2' && para === 'op3') {
        resultado = valor * 3785;
    } else if (de === 'op3' && para === 'op2') {
        resultado = valor * 3785;
    } else {
      resultado = valor;
    }

    document.getElementById('mensagem').value = resultado;
}
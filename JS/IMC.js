function calcularIMC() {
    let nome = document.querySelector('#txtNome').value;
    let altura = parseFloat(document.querySelector('#txtAltura').value);
    let peso = parseFloat(document.querySelector('#txtPeso').value);
    let resultadoDiv = document.querySelector('#resultado');

    // Verifica se os campos estão preenchidos
    if (!nome || isNaN(altura) || isNaN(peso)) {
        resultadoDiv.textContent = 'Por favor, preencha todos os campos!';
        resultadoDiv.style.color = 'red';
        return;
    }

    // Calcula o IMC
    let imc = peso / (altura * altura);

    // Define a classificação do IMC
    let classificacao = '';
    if (imc < 18.5) {
        classificacao = 'abaixo do peso.';
    } else if (imc < 24.9) {
        classificacao = 'com peso normal.';
    } else if (imc < 29.9) {
        classificacao = 'com sobrepeso.';
    } else if (imc < 39.9) {
        classificacao = 'com obesidade.';
    } else {
        classificacao = 'com obesidade grave.';
    }

    // Exibe o resultado
    resultadoDiv.textContent = `${nome}, seu IMC é ${imc.toFixed(2)} e você está ${classificacao}`;
    resultadoDiv.style.color = 'black';
}

// Adiciona o evento ao botão
let botaoCalcular = document.querySelector('#btnCalcular');
botaoCalcular.addEventListener('click', calcularIMC);

let botao = document.querySelector("#btnMostrar");
botao.addEventListener("click", mostrarValores);



function mostrarValores() {
    let pessoa = {};

    pessoa.nome = document.querySelector('#txtNome').value; 
    pessoa.altura = parseFloat(document.querySelector('#txtAltura').value); 
    pessoa.idade = parseInt(document.querySelector('#txtIdade').value); 
    pessoa.dataNascimento = document.querySelector('#txtDataNascimento').value;

    let mensagem = `
    <br><br>
    O nome digitado é <strong> ${pessoa.nome} </strong> <br>
    A altura informada é <strong>${pessoa.altura.toFixed(2)} </strong> <br>
    A idade informada é <strong> ${pessoa.idade} </strong> <br>
    A data de nascimento informada é <strong> ${pessoa.dataNascimento} </strong> `;


let div = document.querySelector("#resultado");
div.innerHTML = mensagem;



}

// let pessoa = {};
// pessoa.nome = prompt("Informe Nome");
// pessoa.altura = parseFloat(prompt("Informe Altura:"));
// pessoa.idade = parseInt(prompt("Informe Idade:"));
// pessoa.dataNascimento = prompt(
//     "Informe Data Nascimento (dd/MM/yyyy)");

// console.log(pessoa);
// alert(
//     `O nome digitado é ${pessoa.nome}
//     A altura informada é ${pessoa.altura.toFixed(2)}
//     A idade informada é ${pessoa.idade}
//     A data de nascimento informada é ${pessoa.dataNascimento}
//     `
// );


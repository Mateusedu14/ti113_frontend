document.addEventListener("DOMContentLoaded", () => {
    const btnCadastrar = document.getElementById("btnCadastrar");
    const tabela = document.getElementById("tabPessoas");

    const getPessoas = () => JSON.parse(localStorage.getItem("pessoas")) || [];
    const setPessoas = (pessoas) => localStorage.setItem("pessoas", JSON.stringify(pessoas));

    const carregarDados = () => {
        // Remove todas as linhas exceto a primeira (cabeçalho)
        while (tabela.rows.length > 1) {
            tabela.deleteRow(1);
        }
        getPessoas().forEach(pessoa => {
            const linha = tabela.insertRow();
            linha.insertCell(0).textContent = pessoa.nome || "";
            linha.insertCell(1).textContent = pessoa.sobrenome || "";
            linha.insertCell(2).textContent = pessoa.cpf || "";
            linha.insertCell(3).textContent = pessoa.dataNascimento || "";
        });
    };

    btnCadastrar.addEventListener("click", () => {
        const pessoa = {
            nome: document.getElementById("txtNome").value,
            sobrenome: document.getElementById("txtSobrenome").value,
            cpf: document.getElementById("txtCPF").value,
            dataNascimento: document.getElementById("txtDataNascimento").value
        };

        if (Object.values(pessoa).every(valor => valor.trim() !== "")) {
            setPessoas([...getPessoas(), pessoa]);
            carregarDados();
            document.querySelectorAll("input").forEach(input => input.value = "");
        } else {
            alert("Preencha todos os campos!");
        }
    });

    carregarDados();
});
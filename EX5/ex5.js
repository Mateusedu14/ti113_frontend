const maxRecords = 50;

function register() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!username || !email || !password || !confirmPassword) {
        alert('Todos os campos são obrigatórios.');
        return;
    }

    if (password !== confirmPassword) {
        alert('As senhas não coincidem.');
        return;
    }

    if (password.length !== 8 || !/\d{2}/.test(password)) {
        alert('A senha deve ter 8 caracteres e pelo menos 2 números.');
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.length >= maxRecords) {
        alert('Número máximo de registros atingido.');
        return;
    }

    if (users.some(user => user.username === username)) {
        alert('Usuário já cadastrado.');
        return;
    }

    users.push({ username, email });
    localStorage.setItem('users', JSON.stringify(users));
    displayUsers();
    lockForm();
}

function displayUsers() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const tbody = document.querySelector('#userTable tbody');
    tbody.innerHTML = '';

    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${user.username}</td><td>${user.email}</td>`;
        tbody.appendChild(row);
    });
}

function lockForm() {
    document.querySelectorAll('input').forEach(input => input.disabled = true);
    document.querySelector('button').innerText = 'UNLOCKER';
}

displayUsers();
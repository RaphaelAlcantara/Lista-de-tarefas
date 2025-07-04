function cadastrar() {
    let email = document.getElementById("email_cadastro").value;
    let senha = document.getElementById("senha_cadastro").value;

    usuarios.push({ nome: email, senha: senha }); // adiciona ao array
    salvarUsuarios(); // salva no navegador

    alert("Usuário cadastrado com sucesso!");
}
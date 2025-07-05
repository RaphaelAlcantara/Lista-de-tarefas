function cadastrar() {
    let email = document.getElementById("email_cadastro").value;
    let senha = document.getElementById("senha_cadastro").value;

   adicionarUsuario(email, senha); // chama a função do usuario

    alert("Usuário cadastrado com sucesso!");
}
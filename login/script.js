var usuarios = [];

function login() {
    nome_login = document.getElementById("user_login");
    senha_login = document.getElementById("user_password");
     
  } 


function cadastrar() {
    email_cadastro = document.getElementById("email_cadastro");
    senha_cadastro = document.getElementById("senha_cadastro");

    usuarios.push({
        nome: email_cadastro.value,
        senha: senha_cadastro.value
    });

    console.log("Usuário cadastrado: " + email_cadastro.value);
    console.log(email_cadastro.value);
    console.log(senha_cadastro.value);
}

//array que guarda os users
let usuarios = [

];

function adicionarUsuario(email, senha) {
    usuarios.push({ nome: email, senha: senha });
    salvarUsuarios();
}

// Função para salvar no localStorage
function salvarUsuarios() {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

// Função para carregar usuários do localStorage
function carregarUsuarios() {
    const dados = localStorage.getItem("usuarios");
    if (dados) {
        usuarios = JSON.parse(dados);
    }
}

// Carregar ao iniciar
carregarUsuarios();


function login() {
    nome_login = document.getElementById("user_login").value;
    senha_login = document.getElementById("user_password").value;
     
  

    
 
    let usuarioEncontrado = usuarios.find(user => user.nome === nome_login && user.senha === senha_login);
  
  
    if (usuarioEncontrado) {
        alert(`login bem sucedido! bem vindo`);
    } else {
        alert("Usuário ou senha incorretos.");
    }


    if (localStorage.getItem("usuarios")) {
        usuarios = JSON.parse(localStorage.getItem("usuarios"));
    }
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

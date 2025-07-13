let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

// Salva os usuários no localStorage
function salvarUsuarios() {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

// Adiciona um novo usuário no array e salva no localStorage
function adicionarUsuario(nome, email, senha) {
    usuarios.push({
        nome: nome,
        email: email,
        senha: senha
    });
    salvarUsuarios();
}

// função principal
function cadastrar() {
    let nome = document.getElementById("nome_cadastro").value;
    let email = document.getElementById("email_cadastro").value;
    let senha = document.getElementById("senha_cadastro").value;
    let confSenha = document.getElementById("confirm_senha_cadastro").value;

    if (senha !== confSenha) {
        alert("Erro: As senhas não conferem!");
        return;
    }

    const emailExiste = usuarios.some((usuario) => usuario.email === email);
    if (emailExiste) {
        alert("Erro: Já existe um usuário com este e-mail!");
        return;
    }

    adicionarUsuario(nome, email, senha);
    alert("Usuário cadastrado com sucesso!");
    window.location.href = "/src/login/index.html";

    //limpa os campos do formulário
    document.getElementById("nome_cadastro").value = "";
    document.getElementById("email_cadastro").value = "";
    document.getElementById("senha_cadastro").value = "";
    document.getElementById("confirm_senha_cadastro").value = "";
}

//lista os usuários no console
function listarUsuarios() {
    console.log("Usuários cadastrados:");
    usuarios.forEach((usuario, index) => {
        console.log(`${index + 1}. Nome: ${usuario.nome}, Email: ${usuario.email}`);
    });
}



export { cadastrar, listarUsuarios, salvarUsuarios, usuarios};

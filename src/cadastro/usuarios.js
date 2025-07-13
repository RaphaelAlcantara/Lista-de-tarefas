let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

// Salva no localStorage
function salvarUsuarios() {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

// Adiciona usuário no array e salva
function adicionarUsuario(nome, email, senha) {
    usuarios.push({ nome, email, senha });
    salvarUsuarios();
}

  // Carrega usuários do localStorage
function carregarUsuarios() {
    usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
}

  // Exporta as funções e array
export { usuarios, adicionarUsuario, salvarUsuarios, carregarUsuarios };

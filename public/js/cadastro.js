document
.getElementById("cadastroForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const area = document.getElementById("areaConcurso").value;
    const senha = document.getElementById("senha").value;
    const confirmar = document.getElementById("confirmarSenha").value;

    if(senha !== confirmar){
        alert("As senhas não coincidem.");
        return;
    }

    // salvar temporário (futuramente vai pro banco)
    const usuario = {
        areaConcurso: area
    };

    localStorage.setItem("usuario", JSON.stringify(usuario));

    alert("Cadastro realizado com sucesso!");

    window.location.href = "login.html";
});

const senha = document.getElementById("senha");
const confirmarSenha = document.getElementById("confirmarSenha");

function validarSenhas() {

    if (confirmarSenha.value === "") {
        senha.classList.remove("input-valid", "input-invalid");
        confirmarSenha.classList.remove("input-valid", "input-invalid");
        return;
    }

    if (senha.value === confirmarSenha.value) {
        senha.classList.add("input-valid");
        confirmarSenha.classList.add("input-valid");

        senha.classList.remove("input-invalid");
        confirmarSenha.classList.remove("input-invalid");
    } 
    else {
        senha.classList.add("input-invalid");
        confirmarSenha.classList.add("input-invalid");

        senha.classList.remove("input-valid");
        confirmarSenha.classList.remove("input-valid");
    }
}

senha.addEventListener("input", validarSenhas);
confirmarSenha.addEventListener("input", validarSenhas);
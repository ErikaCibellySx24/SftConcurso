document
.getElementById("cadastroForm")
.addEventListener("submit", function(e){

    e.preventDefault();


    const nome =
    document.getElementById("nome").value;


    const celular =
    document.getElementById("celular").value;


    const email =
    document.getElementById("email").value;


    const senha =
    document.getElementById("senha").value;


    const confirmar =
    document.getElementById("confirmarSenha").value;


    const area =
    document.getElementById("areaConcurso").value;



    // ==========================
    // VALIDAÇÕES
    // ==========================

    if(senha !== confirmar){

        alert("As senhas não coincidem.");

        return;

    }


    if(senha.length < 8){

        alert("A senha deve ter no mínimo 8 caracteres.");

        return;

    }


    if(area === ""){

        alert("Selecione uma área de concurso.");

        return;

    }



    // ==========================
    // USUÁRIO TEMPORÁRIO
    // FUTURAMENTE VAI PARA SQLITE
    // ==========================


    const usuario = {

        nome: nome,

        celular: celular,

        email: email,

        areaConcurso: area

    };



    localStorage.setItem(
        "usuario",
        JSON.stringify(usuario)
    );



    alert("Cadastro realizado com sucesso!");



    window.location.href =
    "login.html";


});




// ==========================
// VALIDAÇÃO VISUAL DAS SENHAS
// ==========================


const senha =
document.getElementById("senha");


const confirmarSenha =
document.getElementById("confirmarSenha");



function validarSenhas(){


    if(confirmarSenha.value === ""){


        senha.classList.remove(
            "input-valid",
            "input-invalid"
        );


        confirmarSenha.classList.remove(
            "input-valid",
            "input-invalid"
        );


        return;

    }




    if(senha.value === confirmarSenha.value){


        senha.classList.add(
            "input-valid"
        );


        confirmarSenha.classList.add(
            "input-valid"
        );


        senha.classList.remove(
            "input-invalid"
        );


        confirmarSenha.classList.remove(
            "input-invalid"
        );


    }

    else{


        senha.classList.add(
            "input-invalid"
        );


        confirmarSenha.classList.add(
            "input-invalid"
        );


        senha.classList.remove(
            "input-valid"
        );


        confirmarSenha.classList.remove(
            "input-valid"
        );


    }


}



senha.addEventListener(
    "input",
    validarSenhas
);


confirmarSenha.addEventListener(
    "input",
    validarSenhas
);
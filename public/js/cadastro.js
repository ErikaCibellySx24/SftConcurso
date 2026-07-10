document
.getElementById("cadastroForm")
.addEventListener("submit", function(e){

    e.preventDefault();


    const nome =
    document.getElementById("nome").value;


    const email =
    document.getElementById("email").value;


    const senha =
    document.getElementById("senha").value;


    const confirmarSenha =
    document.getElementById("confirmarSenha").value;


    const areaConcurso =
    document.getElementById("areaConcurso").value;



    if(senha !== confirmarSenha){

        alert("As senhas não coincidem.");
        return;

    }



    const usuario = {

        nome,
        email,
        senha,
        areaConcurso

    };



    fetch("/api/auth/cadastro",{


        method:"POST",


        headers:{

            "Content-Type":"application/json"

        },


        body:JSON.stringify(usuario)


    })

    .then(res=>res.json())


    .then(data=>{


        console.log(data);



        if(data.sucesso){


            alert("Seu cadastro foi realizado com sucesso!");


            window.location.href="login.html";


        }else{


            alert(data.mensagem);


        }


    })


    .catch(error=>{


        console.error(error);


        alert("Erro ao conectar com servidor.");


    });


});
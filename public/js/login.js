document
.getElementById("loginForm")
.addEventListener("submit", function(e){

    e.preventDefault();


    const email =
    document.getElementById("email").value.trim();


    const senha =
    document.getElementById("senha").value;



    if(!email || !senha){

        alert("Preencha email e senha.");
        return;

    }



    fetch("/api/auth/login", {


        method:"POST",


        headers:{


            "Content-Type":"application/json"


        },


        body:JSON.stringify({

            email,
            senha

        })


    })


    .then(res => res.json())


    .then(data => {


        console.log(data);



        if(data.sucesso){



            // ==========================
            // SALVA USUÁRIO LOGADO
            // ==========================

            localStorage.setItem(

                "usuarioLogado",

                JSON.stringify(data.usuario)

            );



            // salva também o concurso escolhido
            // para carregar PC ou PM no edital

            localStorage.setItem(

                "concurso",

                data.usuario.areaConcurso

            );



            alert(
                "Login realizado com sucesso!"
            );



            window.location.href =
            "dashboard.html";



        }else{


            alert(
                data.mensagem
            );


        }


    })


    .catch(error => {


        console.error(
            "Erro:",
            error
        );


        alert(
            "Erro ao conectar com servidor."
        );


    });


});
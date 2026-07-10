import materiasPC from "./materias/pcpe.js";
import materiasPM from "./materias/pmpe.js";


const container = document.getElementById("container");


// ==========================
// PROGRESSO
// ==========================

function loadProgress() {

    return JSON.parse(
        localStorage.getItem("progress") || "{}"
    );

}


function saveProgress(data) {

    localStorage.setItem(
        "progress",
        JSON.stringify(data)
    );

}


// ==========================
// AUXILIAR
// ==========================

function getAllTopics(materiaObj) {

    return materiaObj.assuntos.flatMap(
        assunto => assunto.topicos
    );

}



// ==========================
// ESCOLHER EDITAL
// ==========================

function carregarMateriasUsuario() {


    const usuario =
    JSON.parse(
        localStorage.getItem("usuario")
    );


    if(!usuario){

        return null;

    }



    if(usuario.areaConcurso === "civil"){

        return materiasPC;

    }



    if(usuario.areaConcurso === "militar"){

        return materiasPM;

    }



    return null;

}




// ==========================
// RENDER
// ==========================

function render() {


    const materias =
        carregarMateriasUsuario();



    if (!materias) {

        container.innerHTML = `
            <h2>
            Nenhum concurso selecionado.
            </h2>
        `;

        return;

    }



    const progressData =
        loadProgress();



    container.innerHTML = "";



    Object.keys(materias)
    .forEach(nomeMateria => {


        const materia =
            materias[nomeMateria];



        const topicos =
            getAllTopics(materia);



        const concluidos =
            topicos.filter(topico =>
                progressData[nomeMateria]
                ?.includes(topico)
            ).length;



        const percentual =
            topicos.length
            ?
            Math.round(
                (concluidos / topicos.length) * 100
            )
            :
            0;



        const card =
        document.createElement("div");


        card.className =
        "materia";



        card.innerHTML = `

            <div class="materia-header">

                <h2>
                    ${nomeMateria}
                    - ${percentual}%
                </h2>


                <div class="progress-bar">

                    <div 
                    class="progress"
                    style="width:${percentual}%">
                    </div>

                </div>

            </div>

        `;



        const conteudo =
        document.createElement("div");


        conteudo.className =
        "materia-content";


        conteudo.style.display = "none";



        card.querySelector(".materia-header")
        .onclick = () => {

            conteudo.style.display =
            conteudo.style.display === "none"
            ?
            "block"
            :
            "none";

        };




        materia.assuntos.forEach(assunto => {


            const titulo =
            document.createElement("h3");


            titulo.textContent =
            assunto.nome;


            conteudo.appendChild(titulo);



            assunto.topicos.forEach(topico => {


                const item =
                document.createElement("div");


                item.className =
                "topic";


                item.textContent =
                topico;



                if(
                    progressData[nomeMateria]
                    ?.includes(topico)
                ) {

                    item.classList.add("done");

                }



                item.onclick = () => {


                    if(!progressData[nomeMateria]) {

                        progressData[nomeMateria] = [];

                    }



                    if(
                        progressData[nomeMateria]
                        .includes(topico)
                    ) {


                        progressData[nomeMateria] =
                        progressData[nomeMateria]
                        .filter(t => t !== topico);


                    } else {


                        progressData[nomeMateria]
                        .push(topico);

                    }



                    saveProgress(progressData);

                    render();

                };



                conteudo.appendChild(item);


            });


        });



        card.appendChild(conteudo);

        container.appendChild(card);



    });



}



render();
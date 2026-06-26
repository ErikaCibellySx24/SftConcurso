document
.getElementById("recuperarForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const email = document.getElementById("email").value;

    alert(
        `Se existir uma conta vinculada ao e-mail ${email}, enviaremos um link para redefinição da senha.`
    );

    window.location.href = "login.html";

});
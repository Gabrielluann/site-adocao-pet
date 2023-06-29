let ul = document.querySelector('nav .ul');

function openMenu(){
    ul.classList.add('open');
}

function closeMenu(){
    ul.classList.remove('open')
}

const form = document.querySelector("#form");
const nameinput = document.querySelector("#name");
const emailinput = document.querySelector("#email");
const assuntoinput = document.querySelector("#assunto");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Verificar se o campo está vazio
    if (nameinput.value === "") {
        alert("Por favor, preencha o seu nome");
        return;
    }

    // se todos os campos estiverem corretamente preenchidos, envie o form
    form.submit();

});

// tentei :( 
    
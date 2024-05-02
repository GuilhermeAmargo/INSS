var elemento;

function mat() {
    elemento = document.getElementsByClassName("main");

    if (elemento[0].childElementCount > 0)
        elemento[0].children.remove();

    var novoIframe = document.createElement('iframe');

    novoIframe.src = 'Matematica/matematica.html';
    novoIframe.name = 'iframeGame';
    novoIframe.classList.add('iframe');

    elemento[0].appendChild(novoIframe);
}

function mat() {
    elemento = document.getElementsByClassName("main");

    if (elemento[0].childElementCount > 0)
        elemento[0].children.remove();

    var novoIframe = document.createElement('iframe');

    novoIframe.src = 'INSS/inss.html';
    novoIframe.name = 'iframeGame';
    novoIframe.classList.add('iframe');

    elemento[0].appendChild(novoIframe);
}

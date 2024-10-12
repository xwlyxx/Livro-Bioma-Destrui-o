const paginas = [
    document.getElementById('capa').innerHTML,
    document.getElementById('tutorial').innerHTML,
    document.getElementById('pg1').innerHTML,
    document.getElementById('pg2').innerHTML,
    document.getElementById('pg3').innerHTML,
    document.getElementById('pg4').innerHTML,
    document.getElementById('pg5').innerHTML,
    document.getElementById('pg6').innerHTML,
    document.getElementById('pg7').innerHTML,
    document.getElementById('pg8').innerHTML,
    document.getElementById('pg9').innerHTML,
    document.getElementById('contra-capa').innerHTML
];

let paginaAtual = 0;

const bookElement = document.querySelector('.book');
const btnAvancar = document.getElementById('avancar');
const btnVoltar = document.getElementById('voltar');
const scoreElement = document.getElementById('score');

var eastereggpoint = 0;
let foundWords = {};

function easteregg(word) {
    if (word && !foundWords[word]) {
        foundWords[word] = true;
        eastereggpoint = eastereggpoint + 1;
        console.log('easteregg+1: ', word);
        console.log('Total Points: ', eastereggpoint);
    }
}

function Point(){
    alert('Sua pontuação foi de: ' + eastereggpoint);
}

function atualizarPagina() {
    bookElement.classList.add('fade');
    btnAvancar.classList.add('fade');
    btnVoltar.classList.add('fade');
    setTimeout(() => {
        bookElement.innerHTML = paginas[paginaAtual];
        const words = bookElement.innerHTML.split(/\s+/);
        bookElement.classList.remove('fade');
        btnAvancar.classList.remove('fade');
        btnVoltar.classList.remove('fade');
    }, 500);
    if (paginaAtual == 0) {
        document.getElementById('voltar').style.display = 'none';
    } else {
        document.getElementById('voltar').style.display = 'initial';
    }
    if (paginaAtual == paginas.length - 1) {
        document.getElementById('avancar').style.display = 'none';
    } else {
        document.getElementById('avancar').style.display = 'initial';
    }
}

btnAvancar.addEventListener('click', () => {
    if (paginaAtual < paginas.length - 1) {
        paginaAtual++;
        atualizarPagina();
    }
});

btnVoltar.addEventListener('click', () => {
    if (paginaAtual > 0) {
        paginaAtual--;
        atualizarPagina();
    }
});

atualizarPagina();

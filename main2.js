const paginas = [
    'Bioma: Destruição ',
    'KKKKKKKKKKKKKASDAKSDKASJDKAJSDKJASKJDKAJDKASJDKWKJQKJEKQJEKQJjdSOAIJDOSAJDOASJDOASJDOAJODSALKFKANVKNAKVNAKSJFDOASODjasd',
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA.'
]

let paginaAtual = 0;

const bookElement = document.querySelector('.book');
const btnAvancar = document.getElementById('avancar')
const btnVoltar = document.getElementById('voltar')

function atualizarPagina() {
    bookElement.classList.add('fade');
    setTimeout(() => {
        bookElement.textContent = paginas[paginaAtual];
        bookElement.classList.remove('fade');
    }, 500);
}

btnAvancar.addEventListener('click',() => {
    if(paginaAtual < paginas.length - 1){
        paginaAtual++;
        atualizarPagina()
    }
});

btnVoltar.addEventListener('click',()=>{
    if(paginaAtual > 0){
        paginaAtual--;
        atualizarPagina();
    }
});

atualizarPagina();


const paginas = [
    'Bioma: Destruição ',
    'Em uma floresta densa e vibrante, onde a luz do sol mal penetrava o dossel de folhas verdes, vivia Lumis, uma criatura pequena e rara, cuja pelagem cintilante refletia a luz como se fosse feita de estrelas. Sua mãe, Selene, era superprotetora e sempre alertava Lumis sobre os perigos do mundo além do seu bioma seguro. Ela contava histórias de humanos que haviam capturado membros de sua espécie, forçando-os a viver em cativeiro. A curiosidade de Lumis, porém, era insaciável.',
    'Um dia, movido pela curiosidade, Lumis decidiu explorar além dos limites de seu lar. Ele se esgueirou pelas árvores e atravessou a cerca invisível que delimitava seu mundo. Ao sair, encontrou um vasto campo cheio de flores desconhecidas e aromas que nunca havia sentido. Enquanto explorava, Lumis conheceu um jovem humano chamado Lucas, que estava observando a natureza com um olhar curioso e gentil. Os dois formaram uma amizade instantânea, trocando sorrisos e risadas enquanto brincavam entre as flores.',
    'Mas a diversão durou pouco. Quando Lumis percebeu que a tarde se esvaía, decidiu voltar para casa. No entanto, ao chegar, encontrou sua casa em chamas. A fumaça subia para o céu, e o calor se espalhava por todo o lugar. Selene estava ausente, e outros membros de sua espécie tinham desaparecido. Desesperado, Lumis procurou por ela, mas só encontrou cinzas e ecos de um lar que um dia foi seguro.',
    'Com o coração partido, Lumis se lembrou das histórias que sua mãe contara sobre humanos hostis que capturavam animais raros. Ele percebeu que poderia ter sido visto por algum desses humanos, que agora talvez tivessem levado sua família. Com um misto de medo e determinação, Lumis decidiu buscar Lucas novamente, esperando que seu amigo humano pudesse ajudá-lo.',
    'No dia seguinte, Lumis retornou ao campo, chamando por Lucas. Quando o jovem apareceu, Lumis explicou tudo o que havia acontecido, usando gestos e expressões para transmitir sua angústia. Lucas, comovido pela história de Lumis, prometeu ajudá-lo a descobrir o que havia causado o incêndio e o desaparecimento de sua família.',
    'Os dois formaram uma equipe improvável, explorando a floresta e perguntando a outros animais. Com cada resposta, Lumis e Lucas descobriram que uma gangue de caçadores tinha sido vista na região, capturando criaturas raras para vendê-las no mercado negro. Revoltados, Lumis e Lucas traçaram um plano: iriam reunir todos os animais e pessoas que se preocupavam com a floresta para confrontar os caçadores e resgatar sua família.',
    'A partir de então, Lumis não só buscou seu lar, mas se tornou um defensor de sua espécie. Com a ajuda de Lucas e a coragem de outros animais, eles conseguiram reunir uma multidão disposta a lutar. Quando a gangue de caçadores apareceu novamente, Lumis e seus aliados se organizaram para bloquear os caminhos e criar distrações.',
    'A batalha foi intensa, mas a determinação de Lumis e seus amigos prevaleceu. Eles conseguiram libertar não apenas sua família, mas também outros animais que haviam sido capturados. A gangue foi obrigada a fugir, e a floresta ficou em paz novamente.',
    'Embora Lumis nunca tivesse reencontrado sua mãe, ele se tornou um símbolo de esperança para sua espécie. E assim, com o apoio de seu amigo humano e a determinação de todos que amavam a floresta, ele não apenas salvou sua família, mas também criou um futuro em que os limites entre humanos e animais se tornaram mais tênues, onde a curiosidade e a amizade poderiam florescer juntos.'
]

let paginaAtual = 0;

const bookElement = document.querySelector('.book');
const btnAvancar = document.getElementById('avancar')
const btnVoltar = document.getElementById('voltar')

function atualizarPagina() {
    bookElement.classList.add('fade');
    btnAvancar.classList.add('fade');
    btnVoltar.classList.add('fade');
    setTimeout(() => {
        bookElement.textContent = paginas[paginaAtual];
        bookElement.classList.remove('fade');
        btnAvancar.classList.remove('fade');
        btnVoltar.classList.remove('fade');
    }, 500);
    if(paginaAtual == 0){
        document.getElementById('voltar').style.display = 'none';
    }
    else{
        document.getElementById('voltar').style.display = 'initial';
    }
    if(paginaAtual == paginas.length - 1){
        document.getElementById('avancar').style.display = 'none';
    }
    else{
        document.getElementById('avancar').style.display = 'initial';
    }
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


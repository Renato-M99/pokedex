const pokemonsCard = document.querySelectorAll('.cartao-pokemon');
const listaSelecaoPokemons = document.querySelectorAll('.pokemon');


// Selecionando a tag com a class .imagemLOGO
let logo = document.querySelector('.imagemLOGO');
// Selecionando a tag com a class .imagemA
let pikachu = document.querySelector('.imagemA');


function aocarregar(){
    /* Altera o CSS fazendo com que a imagem do 'pikachu' e do log alterem seu tamanho. */
    pikachu.style.transform = 'scale(1.1)'
    logo.style.transform = 'scale(1.1)'
}

//capturando a tag audio e colocando-a dentro de uma variável audioFundo.
let audioFundo = document.querySelector('.audioFundo');
//capturando a imagem do pause e adicionando-a dentro da variável audioPlay.
let audioPlay = document.querySelectorAll('.play');

// Função que dará play automaticamente.
function play(){
    audioFundo.play();
}
// Função que dará o pause de forma automática.
function pause(){
    audioFundo.pause();
}

/*guarda o elemento com a classe choque na variável choque o elemento em questão é a tag vídeo.
do pikachu, quando for detectado o click, irá mudar o display:none para display:block e assim exibir
o elemento na tela. Ao final irá dar play no vídeo automaticamente.
*/

let choque = document.querySelector('.choque');
pikachu.addEventListener('click', ()=> {

    choque.style.display = 'block';
    choque.play();


})








// OBJETIVO 1 -  quando passar o mouse em cima do personagem na listagem, devemos selecionaá-lo
// passo 1 - pegar os personagens no JS para poder verificar quando o usuário passar o mouse em cima de um deles.

const personagens = document.querySelectorAll('.personagem');


//passo 2 - adicionar a classe selecionada do personagem que o usuário passa o cursor do mouse

personagens.forEach(personagem => {
    personagem.addEventListener('mouseenter', () => {

        // passo 3 - verificar se já existe um personagem selecionado, se sim devemos remover a seleção dele
        verificaAlteracaoNaClassePersonagem(personagem);

        // OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, troca a imagen, o nome e a descrição do personagem grande

        // passo 1 - pegar o elemento do personagem grando pra adicionar as informaçõens nele
        alterarImagemPersonagem(personagem);

        //passo 3 - alterar nome do personagem grande
        alterarNomePersonagemSelecionado(personagem);

        //passo 4 - alterar a descrição do personagem

        alterarDescricaoPersonagem(personagem);
    });
});

function verificaAlteracaoNaClassePersonagem(personagem) {
    const personagemSelecionado = document.querySelector('.selecionado');

    personagemSelecionado.classList.remove('selecionado');

    personagem.classList.add('selecionado');
};

function alterarImagemPersonagem(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');

    // passo 2 - alterar a imagem do personagem grande
    const idPersonagem = personagem.attributes.id.value;

    imagemPersonagemGrande.src = `../src/img/card-${idPersonagem}.png`;

    if (window.innerWidth < 450) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
};

function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
};

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
};

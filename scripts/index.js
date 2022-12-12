const HlGameList = document.querySelector('.highlights ul');
const gameShowcase = document.querySelector('.game-showcase');

// HL = highlights //
// Criar cada card highlights //
function createCardGame(game) {
  const Hlcard = document.createElement('li');

  Hlcard.innerHTML = `
        <p class="tag">${game.category}</p>
        <p class="price">R$ 49,95</p>
        <h3>${game.name}</h3>
    `;
  Hlcard.style.backgroundImage = 'url("' + game.img + '")';
  Hlcard.id = game.id;
  return Hlcard;
}

// Colocar os cards highlights dos games no ul//
function listarGames(listaGames) {
  for (let i = 0; i < listaGames.length; i++) {
    const game = listaGames[i];

    const cardMontado = createCardGame(game);

    if (i == 0) {
      //deixar apenas o primeiro ativo como padrão
      cardMontado.classList.add('Active');
    }

    HlGameList.appendChild(cardMontado);
  }
}

listarGames(highlight_games);

const HlCards = document.querySelectorAll('.highlights ul li');

// Deixar selecionado um jogo da lista //
HlGameList.addEventListener('click', (e) => {
  const gameCard = e.target;
  let number = 0;
  if (gameCard.tagName == 'LI') {
    gameCard.classList.add('Active');
    ShowGame(gameCard.id);

    for (let i = 0; i < HlCards.length; i++) {
      if (HlCards[i].id !== gameCard.id) {
        HlCards[i].classList.remove('Active');
        window.scroll(0, 0);
      }
    }
  }
});

// Mudar o jogo mostrado em destaque //
const video = document.querySelector('.video');
function ShowGame(id) {
  const gameSelect = highlight_games[id];
  video.src = gameSelect.bg;
  gameShowcase.innerHTML = `
            <div class="tags">
            ${createTags(gameSelect.tags)}
            </div>
            <div class="extra">
              <span class="stars">
              ${createStars(gameSelect.stars)}
              </span>
              <p>${gameSelect.dev}</p>
            </div>
            <h2>${gameSelect.name}</h2>
            <p class="description">
            ${gameSelect.description}
            </p>
            <button>Mais detalhes</button>
            <div style= "background-image: url(${
              gameSelect.art
            });" class="imageArt" style:></div>
    `;
}

// códigos responsáveis pelas tags e estrelas //
function createStars(rate) {
  let element = ``;
  for (let i = 1; i <= rate; i++) {
    element += `<i class="ph-star-fill"></i>`;
  }
  return element;
}

function createTags(tags) {
  let tagsList = tags.split(',');
  let tagCard = ``;
  tagsList.forEach((element) => {
    tagCard += `<p class="tag">${element}</p>`;
  });
  return tagCard;
}

// nav mobile //

const menu = document.querySelector('.mobile-menu');
const navList = document.querySelector('nav ul');

menu.addEventListener('click', (e) => {
  console.log('menu clicked');
  navList.classList.toggle('active');
  menu.classList.toggle('open');
  document.body.classList.toggle('menu-expanded');
  window.scroll(0, 0);
});

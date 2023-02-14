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

// --------------- section explorer --------------- //

// option selection //

const option = document.querySelector('#explorer .selectors .options');
const options = document.querySelectorAll('#explorer .selectors .options p');

// Deixar um selecionado //
option.addEventListener('click', (e) => {
  const o = e.target;
  let number = 0;
  if (o.tagName == 'P') {
    options.forEach((item) => {
      item.classList.remove('active');
    });
    o.classList.add('active');
    option.classList.remove('expand');
    if (o.classList.value.includes('category')) {
      option.classList.add('expand');
    }
  }
});

// carousel categorias //

var swiper = new Swiper('.mySwiper', {
  slidesPerView: 4,
  spaceBetween: 20,
  slidesPerGroup: 4,
  loop: false,

  breakpoints: {
    1900: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    1300: {
      slidesPerView: 4,
      spaceBetween: 6
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    300: {
      slidesPerView: 2,
      spaceBetween: 12
    }
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});

const explorerGames = document.querySelector('#explorer .explorer-games');

// Criar cada card da lista de games no explorer //
function createEXcardGame(card) {
  const EXcard = document.createElement('li');

  EXcard.innerHTML = `
        <div class="description">
        <div><h3>${card.name}</h3>
        <p>Data: ${card.date}</p>
        <p>${card.description}</p>
        </div>  
        <span class="stars">
        Avaliacão:
        ${createStars(card.stars)}
        </span>
        </div>
        <p>${card.price}</p>
        <div class="prev">
        <img class="selected" src="${card.img1}" alt="">
        <img src="${card.img2}" alt="">
        <img src="${card.img3}" alt="">
        </div>
    `;
  EXcard.style.backgroundImage = 'url("' + card.front + '")';
  EXcard.id = card.id;
  return EXcard;
}

// Colocar os cards explorer dos games no ul//
function explorerListarGames(listaGames) {
  for (let i = 0; i < listaGames.length; i++) {
    const card = listaGames[i];

    const cardMontado = createEXcardGame(card);

    explorerGames.appendChild(cardMontado);
  }
}

explorerListarGames(explorer_games);

//---------- parte responsável pelo preview dos cards no explorer ----------//
// colocar uma classe last no ultimo item de cada linha da lista explorer
function last() {
  const cards = document.querySelectorAll('#explorer .explorer-games li');
  cards.forEach((element) => {
    element.classList.remove('last');
    var calc = element.getBoundingClientRect().right / window.innerWidth;
    if (calc > 0.75) {
      element.classList.add('last');
    }
  });
}
window.addEventListener('load', last);
window.addEventListener('resize', last);

// configuracao para a passagem das imagens na preview
let time = 3000,
  currentImageIndex = 0,
  cards = document.querySelectorAll('.explorer-games li'),
  max = 3;

let myInterval = 0;

function nextImage(images) {
  myInterval = setInterval(() => {
    images[currentImageIndex].classList.remove('selected');
    currentImageIndex++;
    if (currentImageIndex >= max) {
      currentImageIndex = 0;
    }
    images[currentImageIndex].classList.add('selected');
    //console.log('salto');
  }, time);
}

function stopImage(images) {
  clearInterval(myInterval);
  images[currentImageIndex].classList.remove('selected');
  images[0].classList.add('selected');
  currentImageIndex = 0;
}

// interacao com hover para iniciar e parar a passagem das imagens
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('mouseover', (e) => {
    const images = e.target.querySelectorAll('.prev img');
    nextImage(images);
  });
  cards[i].addEventListener('mouseleave', (e) => {
    const images = e.target.querySelectorAll('.prev img');
    stopImage(images);
  });
}

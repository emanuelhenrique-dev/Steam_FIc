const highlight_games = [
  {
    id: '0',
    img: '../assets/img/God_of_war_img.png',
    bg: '/assets/video/God_of_war.mp4',
    art: '../assets/img/God_of_warArt.png',
    name: 'God of War Ragnarök',
    dev: 'Santa Monica Studio',
    stars: '5',
    tags: 'Ação, Rpg',
    category: 'ARPG',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum convallis turpis, nec rutrum quam vulputate viverra. Proin ornare dolor sit amet laoreet dignissim.'
  },
  {
    id: '1',
    img: '../assets/img/Nioh_2_img.png',
    bg: '/assets/video/Nioh_2.mp4',
    art: '../assets/img/Nioh_2Art.png',
    name: 'Nioh 2',
    dev: 'Team Ninja',
    stars: '4',
    tags: 'Ação, Rpg',
    category: 'ARPG',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tristique senectus et netus et malesuada fames.'
  },
  {
    id: '2',
    img: '../assets/img/Mhw_img.png',
    bg: '/assets/video/Mhw.mp4',
    art: '../assets/img/MhwArt.png',
    name: 'Monster Hunter: World',
    dev: 'Team Ninja',
    stars: '4',
    tags: 'Ação, Rpg, coop',
    category: 'Aventura',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut.'
  },
  {
    id: '3',
    img: '../assets/img/Elden_ring_img.png',
    bg: '/assets/video/Elden_ring.mp4',
    art: '../assets/img/Elden_ringArt.png',
    name: 'Elden Ring',
    dev: ' FromSoftware Inc',
    stars: '5',
    tags: 'Ação, Rpg, Pvp',
    category: 'ARPG',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In iaculis nunc sed augue lacus viverra vitae congue eu.'
  },
  {
    id: '4',
    img: '../assets/img/Marvel_spider_man_img.png',
    bg: '/assets/video/Marvel_spider_man.mp4',
    art: '../assets/img/Marvel_spider_manArt.png',
    name: 'Marvel’s Spider-Man',
    dev: 'Insomniac Games',
    stars: '3',
    tags: 'Ação, Aventura',
    category: 'Super-Heróis',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet risus feugiat in ante metus dictum.'
  }
];

//explorer section

const explorer_games = [
  {
    id: '0',
    name: 'Marvel’s Spider-Man: Miles Morales',
    date: '18/11/2022',
    stars: '5',
    price: 'R$ 79,00',
    front: '/assets/img/explorer/miles-front.jpg',
    img1: '/assets/img/explorer/miles-img1.jpg',
    img2: '/assets/img/explorer/miles-img2.jpg',
    img3: '/assets/img/explorer/miles-img3.jpg',
    description:
      "Após os eventos de Marvel's Spider-Man , o adolescente Miles Morales está se adaptando a um novo lar enquanto segue os passos do seu mentor, Peter Parker. Mas quando uma violenta disputa de forças ameaça destruir seu novo lar, Miles precisa reconhecer e assumir o título de Spider-man"
  },
  {
    id: '1',
    name: 'Sonic Frontiers',
    date: '8/11/2022',
    stars: '4',
    price: 'R$ 49,00',
    front: '/assets/img/explorer/sonic-front.jpg',
    img1: '/assets/img/explorer/sonic-img1.jpg',
    img2: '/assets/img/explorer/sonic-img2.jpg',
    img3: '/assets/img/explorer/sonic-img3.jpg',
    description:
      'Uma nova aventura cheia de mistério e intriga, no papel de Sonic, desvende os mistérios das ruínas de uma antiga civilização assolada por hordas robóticas.'
  },
  {
    id: '2',
    name: 'Call of Duty®: Modern Warfare® II',
    date: '28/10/2022',
    stars: '3',
    price: 'R$ 179,00',
    front: '/assets/img/explorer/cod2-front.jpg',
    img1: '/assets/img/explorer/cod2-img1.jpg',
    img2: '/assets/img/explorer/cod2-img2.jpg',
    img3: '/assets/img/explorer/cod2-img3.jpg',
    description:
      'O Call of Duty®: Modern Warfare® II coloca os jogadores dentro de um conflito global sem precedentes que conta com o retorno dos Operadores icônicos da Força-Tarefa 141.'
  },
  {
    id: '3',
    name: 'Gotham Knights',
    date: '21/10/2022',
    stars: '3',
    price: 'R$ 89,00',
    front: '/assets/img/explorer/gotham-front.jpg',
    img1: '/assets/img/explorer/gotham-img1.jpg',
    img2: '/assets/img/explorer/gotham-img2.jpg',
    img3: '/assets/img/explorer/gotham-img3.jpg',
    description:
      'Batman está morto. Agora cabe à Batfamília – Batgirl, Asa Noturna, Capuz Vermelho e Robin – proteger Gotham.'
  },
  {
    id: '4',
    name: 'UNCHARTED™: Coleção Legado dos Ladrões',
    date: '19/10/2022',
    stars: '5',
    price: 'R$ 189,00',
    front: '/assets/img/explorer/uncharted-front.jpg',
    img1: '/assets/img/explorer/uncharted-img1.jpg',
    img2: '/assets/img/explorer/uncharted-img2.jpg',
    img3: '/assets/img/explorer/uncharted-img3.jpg',
    description:
      'Jogue como Nathan Drake e Chloe Frazer nessa aventura independente em que deverão confrontar o passado para forjar o próprio legado. Inclui as duas aclamadas histórias para um jogador de UNCHARTED 4: A Thief’s End e UNCHARTED: O Legado Perdido.'
  },
  {
    id: '5',
    name: 'Sackboy™: Uma Grande Aventura',
    date: '27/10/2022',
    stars: '5',
    price: 'R$ 248,00',
    front: '/assets/img/explorer/sack-front.jpg',
    img1: '/assets/img/explorer/sack-img1.jpg',
    img2: '/assets/img/explorer/sack-img2.jpg',
    img3: '/assets/img/explorer/sack-img3.jpg',
    description:
      'CRIADO COM PERFEIÇÃO PARA PC O ícone do PlayStation® Sackboy entra em ação no PC em uma incrível aventura de plataforma 3D multijogador. Uma jornada épica recheada de desafios de plataforma. Controles incrivelmente imersivos. Multijogador divertido, colaborativo, caótico e alegre.'
  },
  {
    id: '6',
    name: 'Persona 5 Royal',
    date: '21/10/2022',
    stars: '4',
    price: 'R$ 299,00',
    front: '/assets/img/explorer/persona5-front.jpg',
    img1: '/assets/img/explorer/persona5-img1.jpg',
    img2: '/assets/img/explorer/persona5-img2.jpg',
    img3: '/assets/img/explorer/persona5-img3.jpg',
    description:
      'Vista a máscara, junte-se aos Phantom Thieves of Hearts, arme grandes assaltos, infiltre-se nas mentes dos corruptos e faça eles mudarem de atitude!'
  },
  {
    id: '7',
    name: 'Evil West',
    date: '21/11/2022',
    stars: '4',
    price: 'R$ 89,00',
    front: '/assets/img/explorer/evilwest-front.jpg',
    img1: '/assets/img/explorer/evilwest-img1.jpg',
    img2: '/assets/img/explorer/evilwest-img2.jpg',
    img3: '/assets/img/explorer/evilwest-img3.jpg',
    description:
      'Uma ameaça sombria consome o Velho Oeste. Seja sozinho ou em co-op, lute com estilo num combate explosivo de visceral contra monstruosidades sedentas por sangue. Acabe com hordas vampíricas com sua manopla movida à raios e torne-se o Super-Herói do Velho Oeste.'
  },
  {
    id: '8',
    name: 'Monster Hunter Rise: Sunbreak',
    date: '30/06/2022',
    stars: '3',
    price: 'R$ 169,00',
    front: '/assets/img/explorer/monsterRise-front.jpg',
    img1: '/assets/img/explorer/monsterRise-img1.jpg',
    img2: '/assets/img/explorer/monsterRise-img2.jpg',
    img3: '/assets/img/explorer/monsterRise-img3.jpg',
    description:
      'Encare o desafio e junte-se à caça! Em Monster Hunter Rise, o capítulo mais recente da premiada e bem-sucedida série Monster Hunter, você vai se tornar um caçador, explorar mapas novos e usar diversas armas para derrotar monstros assustadores como parte de uma nova história.'
  },
  {
    id: '9',
    name: 'A Plague Tale: Requiem',
    date: '17/10/2022',
    stars: '5',
    price: 'R$ 89,00',
    front: '/assets/img/explorer/plague-front.jpg',
    img1: '/assets/img/explorer/plague-img1.jpg',
    img2: '/assets/img/explorer/plague-img2.jpg',
    img3: '/assets/img/explorer/plague-img3.jpg',
    description:
      'Embarque em uma comovente jornada por um cativante mundo brutal e descubra o preço pago para salvar aqueles que você ama nesta desesperada luta pela sobrevivência. Ataque nas sombras ou use uma variedade de armas, ferramentas e poderes místicos.'
  },
  {
    id: '10',
    name: '171',
    date: '17/11/2022',
    stars: '4',
    price: 'R$ 89,00',
    front: '/assets/img/explorer/171-front.jpg',
    img1: '/assets/img/explorer/171-img1.jpg',
    img2: '/assets/img/explorer/171-img2.jpg',
    img3: '/assets/img/explorer/171-img3.jpg',
    description:
      '171 é um jogo de ação e aventura de mundo aberto com ambientação inspirada no Brasil.'
  },
  {
    id: '11',
    name: 'Hi-Fi RUSH',
    date: '25/10/2023',
    stars: '5',
    price: 'R$ 102,00',
    front: '/assets/img/explorer/hifirush-front.jpg',
    img1: '/assets/img/explorer/hifirush-img1.jpg',
    img2: '/assets/img/explorer/hifirush-img2.jpg',
    img3: '/assets/img/explorer/hifirush-img3.jpg',
    description:
      'Sinta a batida enquanto o aspirante a estrela Chai e seu inesperado time de aliados lutam contra uma megacorporação maligna usando um estrondoso combate ritmado! Da Tango Gameworks, chega agora Hi-Fi RUSH, um novo jogo de ação em que o mundo entra em sincronia com a música!'
  },
  {
    id: '12',
    name: 'Mount & Blade II: Bannerlord',
    date: '25/10/2022',
    stars: '5',
    price: 'R$ 89,00',
    front: '/assets/img/explorer/mount-front.jpg',
    img1: '/assets/img/explorer/mount-img1.jpg',
    img2: '/assets/img/explorer/mount-img2.jpg',
    img3: '/assets/img/explorer/mount-img3.jpg',
    description:
      'Um RPG de ação/estratégia. Crie um personagem, seja diplomata, fabrique, comercialize e conquiste terras num vasto mundo medieval. Leve seus exércitos a grandes batalhas, comande suas tropas e use sua habilidade para lutar ao lado delas num sistema de combate direcional complexo e intuitivo.'
  },
  {
    id: '13',
    name: 'Vampire Survivors',
    date: '20/10/2022',
    stars: '5',
    price: 'R$ 89,00',
    front: '/assets/img/explorer/vampire-front.jpg',
    img1: '/assets/img/explorer/vampire-img1.jpg',
    img2: '/assets/img/explorer/vampire-img2.jpg',
    img3: '/assets/img/explorer/vampire-img3.jpg',
    description:
      'Acabe com milhares de criaturas noturnas e sobreviva até o amanhecer! Vampire Survivors é um jogo casual de terror gótico com elementos roguelite onde suas escolhas podem fazer você crescer rapidamente e aniquilar os milhares de monstros que aparecem pelo caminho.'
  },
  {
    id: '14',
    name: 'God of War Ragnarök',
    date: '09/11/2022',
    stars: '5',
    price: 'R$ 89,00',
    front: '/assets/img/explorer/god-front.jpg',
    img1: '/assets/img/explorer/god-img1.jpg',
    img2: '/assets/img/explorer/god-img2.jpg',
    img3: '/assets/img/explorer/god-img3.jpg',
    description:
      'Junte-se a Kratos e Atreus em uma jornada mítica à procura de respostas na iminência do Ragnarök. Juntos, pai e filho arriscarão tudo viajando por cada um dos Nove Reinos.'
  },
  {
    id: '15',
    name: 'Bloodborne',
    date: '22/08/2023',
    stars: '5',
    price: 'R$ 99,00',
    front: '/assets/img/explorer/bloodborne-front.jpg',
    img1: '/assets/img/explorer/bloodborne-img1.jpg',
    img2: '/assets/img/explorer/bloodborne-img2.jpg',
    img3: '/assets/img/explorer/bloodborne-img3.jpg',
    description:
      'Enfrente seus pesadelos enquanto busca respostas na antiga cidade de Yharnam, agora amaldiçoada com uma estranha doença endêmica que se espalha pelas ruas como fogo. Perigo, morte e loucura estão em cada canto deste sombrio e horroroso mundo, e você deve descobrir seus segredos mais sombrios para sobreviver.'
  }
];

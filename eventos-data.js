/* Descubra Diamantina - dados de eventos.
   Algumas festas tradicionais variam conforme calendário litúrgico ou divulgação municipal.
   O campo observação informa quando a data é uma referência anual ou depende de programação oficial. */
const EVENTOS = [
  {
    id: 1,
    nome: 'Vesperata',
    categoria: 'Música',
    tipo: 'Tradicional',
    destaque: true,
    dataTexto: '30 mai a 17 out 2026',
    data: 'Temporada oficial 2026: 30 de maio a 17 de outubro',
    horario: '21h',
    local: 'Rua da Quitanda, Centro Histórico',
    bairro: 'Centro Histórico',
    img: './.imagens/Vesperata.png',
    tags: ['música', 'patrimônio', 'centro histórico', 'noite'],
    coordenadas: { lat: -18.2416, lng: -43.6009 },
    desc: 'Músicos nas sacadas dos casarões transformam a Rua da Quitanda em palco aberto.',
    descCompleta: 'Patrimônio Cultural de Minas Gerais, a Vesperata é a experiência musical mais reconhecida de Diamantina. Os músicos se apresentam das sacadas e janelas dos casarões enquanto o público acompanha das mesas e ruas do Centro Histórico.',
    turismo: 'Reserve hospedagem e mesa com antecedência. Combine a noite com restaurantes do centro e caminhada pela Rua da Quitanda.',
    curiosidades: [
      'As datas futuras da temporada 2026 começam em 30 de maio e seguem até 17 de outubro.',
      'A regência acontece na rua, aproximando público, maestro e músicos.',
      'A experiência é um dos grandes símbolos da identidade musical diamantinense.'
    ],
    dicas: [
      { titulo: 'Antes do concerto', texto: 'Chegue cedo para jantar no Centro Histórico e circular com calma.' },
      { titulo: 'Apoio turístico', texto: 'Procure o CAT de Diamantina para informações oficiais de mesas e receptivo.' }
    ],
    calDays: [
      { year: 2026, month: 5, day: 30 },
      { month: 6, day: 13 }, { month: 6, day: 20 }, { month: 6, day: 27 },
      { month: 7, day: 4 }, { month: 7, day: 11 },
      { month: 8, day: 8 }, { month: 8, day: 15 }, { month: 8, day: 29 },
      { month: 9, day: 19 }, { month: 9, day: 26 },
      { month: 10, day: 10 }, { month: 10, day: 17 }
    ]
  },
  {
    id: 2,
    nome: 'Festival de Inverno de Diamantina',
    categoria: 'Festival',
    tipo: 'Cultural',
    destaque: true,
    dataTexto: '6 a 23 ago 2026',
    data: 'Agosto de 2026',
    horario: 'Programação durante o dia e à noite',
    local: 'Praça JK, Teatro Santa Izabel, UFVJM e Centro Histórico',
    bairro: 'Centro Histórico',
    img: './.imagens/festivalinverno.png',
    tags: ['festival', 'arte', 'música', 'ufvjm', 'gastronomia'],
    coordenadas: { lat: -18.2411, lng: -43.6032 },
    desc: 'Mostras, shows, oficinas, gastronomia e arte ocupam praças, teatros e espaços universitários.',
    descCompleta: 'O Festival de Inverno de Diamantina consolida a cidade como palco de arte, formação e convivência. A programação reúne shows, oficinas, cinema, exposições, teatro, gastronomia e atividades em vários pontos históricos.',
    turismo: 'Monte roteiro por período: oficinas pela manhã, Centro Histórico à tarde e shows à noite.',
    curiosidades: [
      'A cidade inteira funciona como circuito cultural durante o festival.',
      'A programação costuma integrar artistas locais, estudantes e convidados nacionais.',
      'É uma das melhores épocas para combinar patrimônio, clima de serra e cultura.'
    ],
    dicas: [
      { titulo: 'Roteiro', texto: 'Use a Praça JK como ponto de encontro para shows e circulação.' },
      { titulo: 'Hospedagem', texto: 'Agosto costuma ter alta procura. Reserve com antecedência.' }
    ],
    calDays: [
      { month: 8, day: 6 }, { month: 8, day: 7 }, { month: 8, day: 8 }, { month: 8, day: 9 },
      { month: 8, day: 10 }, { month: 8, day: 11 }, { month: 8, day: 12 }, { month: 8, day: 13 },
      { month: 8, day: 14 }, { month: 8, day: 15 }, { month: 8, day: 16 }, { month: 8, day: 17 },
      { month: 8, day: 18 }, { month: 8, day: 19 }, { month: 8, day: 20 }, { month: 8, day: 21 },
      { month: 8, day: 22 }, { month: 8, day: 23 }
    ]
  },
  {
    id: 3,
    nome: 'Semana JK',
    categoria: 'Histórico',
    tipo: 'Cultural',
    destaque: true,
    dataTexto: '8 a 12 set 2026',
    data: 'Semana do aniversário de Juscelino Kubitschek',
    horario: 'Manhã, tarde e noite',
    local: 'Museu Casa JK, Praça JK, Teatro Santa Izabel e Centro Histórico',
    bairro: 'Centro Histórico',
    img: './.imagens/Diamantina1.png',
    tags: ['jk', 'história', 'seresta', 'homenagem'],
    coordenadas: { lat: -18.2407, lng: -43.5989 },
    desc: 'Programação cultural e histórica celebra o legado de Juscelino Kubitschek em sua cidade natal.',
    descCompleta: 'A Semana JK reúne homenagens, palestras, serestas, exibições, solenidades e atividades culturais ligadas à memória de Juscelino Kubitschek, nascido em Diamantina em 12 de setembro.',
    turismo: 'Inclua o Museu Casa JK, a Praça JK e uma caminhada pelo eixo histórico ligado a memória do presidente.',
    curiosidades: [
      'A data central é 12 de setembro, aniversário de JK.',
      'A programação costuma incluir a entrega da Medalha JK.',
      'Serestas e atividades históricas conectam a cidade à memória afetiva do presidente.'
    ],
    dicas: [
      { titulo: 'Visita essencial', texto: 'O Museu Casa JK é o melhor ponto de partida para entender o contexto histórico.' }
    ],
    calDays: [
      { month: 9, day: 8 }, { month: 9, day: 9 }, { month: 9, day: 10 }, { month: 9, day: 11 }, { month: 9, day: 12 }
    ]
  },
  {
    id: 4,
    nome: 'Serestas pelas Ruas Históricas',
    categoria: 'Música',
    tipo: 'Tradicional',
    destaque: true,
    dataTexto: 'Sextas de Vesperata',
    data: 'Programação recorrente em fins de semana culturais',
    horario: '21h',
    local: 'R. do Carmo, 150 e ruas do Centro Histórico',
    bairro: 'Centro Histórico',
    img: './.imagens/Diamantina2.png',
    tags: ['seresta', 'música', 'ruas históricas', 'jk'],
    coordenadas: { lat: -18.242, lng: -43.6005 },
    desc: 'Canto tradicional percorre becos e largos, mantendo viva a memória musical da cidade.',
    descCompleta: 'A seresta diamantinense é uma das manifestações mais autênticas da cidade. Músicos e cantores percorrem as ruas históricas com repertório afetivo, aproximando moradores e visitantes.',
    turismo: 'Acompanhe a caminhada musical com calçado confortável e encerre a noite no Mercado Velho.',
    curiosidades: [
      'JK era admirador declarado das serestas de Diamantina.',
      'A experiência valoriza compositores e músicos locais.',
      'O trajeto pelas ruas cria uma visita noturna cantada pelo patrimônio.'
    ],
    dicas: [
      { titulo: 'Experiência', texto: 'Fique próximo aos seresteiros e acompanhe o trajeto completo.' }
    ],
    calDays: [
      { month: 6, day: 12 }, { month: 6, day: 19 }, { month: 6, day: 26 },
      { month: 7, day: 3 }, { month: 7, day: 10 },
      { month: 8, day: 7 }, { month: 8, day: 14 }, { month: 8, day: 28 },
      { month: 9, day: 18 }, { month: 9, day: 25 },
      { month: 10, day: 9 }, { month: 10, day: 16 }
    ]
  },
  {
    id: 5,
    nome: 'Festa de Santo Antônio',
    categoria: 'Religioso',
    tipo: 'Tradicional',
    dataTexto: '13 jun 2026',
    data: '13 de junho de 2026',
    horario: 'Missa, procissão e barraquinhas a partir da tarde',
    local: 'Igreja de Santo Antônio e Largo Dom João',
    bairro: 'Centro Histórico',
    img: './.imagens/catedral.png',
    tags: ['religioso', 'santo antonio', 'tradição', 'barraquinhas'],
    coordenadas: { lat: -18.2419, lng: -43.6035 },
    desc: 'Celebração religiosa com missa, procissão, convivência comunitária e comidas tradicionais.',
    descCompleta: 'A Festa de Santo Antônio integra o calendário de festas religiosas tradicionais de Diamantina, reunindo devoção, música, barraquinhas e encontros comunitários no entorno das igrejas históricas.',
    turismo: 'Combine a festa com visita ao Largo Dom João e ao conjunto de igrejas do centro.',
    curiosidades: [
      'Santo Antônio é uma das devoções populares mais fortes em Minas Gerais.',
      'As barraquinhas aproximam visitantes da culinaria afetiva local.',
      'A festa acontece no período junino, junto a outras celebrações tradicionais.'
    ],
    dicas: [
      { titulo: 'Chegada', texto: 'As ruas ficam mais movimentadas no fim da tarde; vá a pé pelo Centro Histórico.' }
    ],
    calDays: [{ month: 6, day: 13 }]
  },
  {
    id: 6,
    nome: 'Festa Junina no Mercado Velho',
    categoria: 'Cultural',
    tipo: 'Popular',
    dataTexto: '20 e 27 jun 2026',
    data: 'Junho de 2026',
    horario: 'A partir das 18h',
    local: 'Praça do Mercado Velho',
    bairro: 'Mercado Velho',
    img: './.imagens/Diamantina1.png',
    tags: ['junina', 'forro', 'mercado velho', 'gastronomia'],
    coordenadas: { lat: -18.2402, lng: -43.6018 },
    desc: 'Forro, comidas de festa, artesanato e encontro popular no coração boêmio da cidade.',
    descCompleta: 'No período junino, o Mercado Velho concentra programações de música, comidas típicas, artesanato e convivência. É uma experiência informal, local e muito ligada ao cotidiano cultural de Diamantina.',
    turismo: 'Experimente caldos, milho, doces e pratos regionais antes dos shows.',
    curiosidades: [
      'O Mercado Velho é ponto de encontro de moradores e visitantes.',
      'A festa valoriza pequenos produtores e a gastronomia local.',
      'O entorno é ideal para fotos noturnas dos casarões iluminados.'
    ],
    dicas: [
      { titulo: 'Gastronomia', texto: 'Chegue com fome: as barracas costumam ser parte central da experiência.' }
    ],
    calDays: [{ month: 6, day: 20 }, { month: 6, day: 27 }]
  },
  {
    id: 7,
    nome: 'Feira de Economia Solidária',
    categoria: 'Artesanato',
    tipo: 'Feira',
    dataTexto: 'Sábados de temporada',
    data: 'Sábados entre junho e outubro de 2026',
    horario: '9h às 15h',
    local: 'Mercado Velho',
    bairro: 'Mercado Velho',
    img: './.imagens/Diamantina2.png',
    tags: ['artesanato', 'economia solidária', 'produtores', 'mercado velho'],
    coordenadas: { lat: -18.2402, lng: -43.6018 },
    desc: 'Produtos autorais, artesanato, quitandas e saberes do Vale em uma feira de produtores locais.',
    descCompleta: 'A Feira de Economia Solidária aproxima visitantes de artesãos, produtores e cozinheiras locais, fortalecendo a renda criativa e o consumo responsável no centro histórico.',
    turismo: 'Leve dinheiro em espécie para pequenas compras e converse com os produtores sobre origem e técnica.',
    curiosidades: [
      'A feira é uma vitrine de produtos do Vale do Jequitinhonha.',
      'Muitas peças são feitas em pequena escala por famílias e coletivos.',
      'E uma boa opção para lembranças autênticas da viagem.'
    ],
    dicas: [
      { titulo: 'Compras', texto: 'Priorize produtos identificados com origem local e produção artesanal.' }
    ],
    calDays: [
      { month: 6, day: 6 }, { month: 6, day: 13 }, { month: 6, day: 20 }, { month: 6, day: 27 },
      { month: 7, day: 4 }, { month: 7, day: 11 }, { month: 8, day: 8 }, { month: 8, day: 15 }
    ]
  },
  {
    id: 8,
    nome: 'Sarau Arte Miúda',
    categoria: 'Cultural',
    tipo: 'Infantil',
    dataTexto: 'Domingos de temporada',
    data: 'Domingos em fins de semana de programação cultural',
    horario: '10h',
    local: 'Solar de Cultura Arte Miúda, Rua da Glória, 252',
    bairro: 'Centro Histórico',
    img: './.imagens/catedral.png',
    tags: ['infantil', 'seresta', 'família', 'arte miúda'],
    coordenadas: { lat: -18.2432, lng: -43.5997 },
    desc: 'Apresentação afetiva para famílias, unindo música, memória e formação cultural.',
    descCompleta: 'O Sarau Arte Miúda cria uma ponte entre a tradição musical de Diamantina e novos públicos. É uma atividade leve, recomendada para famílias e visitantes interessados na cultura da seresta.',
    turismo: 'Inclua no domingo pela manhã antes de museus, igrejas e almoço no centro.',
    curiosidades: [
      'O Solar de Cultura Arte Miúda também preserva memória ligada a seresta.',
      'A atividade é indicada para crianças e famílias.',
      'O formato aproxima educação musical e turismo cultural.'
    ],
    dicas: [
      { titulo: 'Famílias', texto: 'Boa opção para quem viaja com crianças e quer uma agenda cultural curta.' }
    ],
    calDays: [{ month: 6, day: 14 }, { month: 7, day: 5 }, { month: 8, day: 9 }, { month: 9, day: 20 }]
  },
  {
    id: 9,
    nome: 'Festival Artesanal de Diamantina',
    categoria: 'Artesanato',
    tipo: 'Festival',
    dataTexto: 'Julho 2026',
    data: '17 a 19 de julho de 2026',
    horario: '10h às 20h',
    local: 'Mercado Velho e Centro Histórico',
    bairro: 'Mercado Velho',
    img: './.imagens/Diamantina1.png',
    tags: ['artesanato', 'festival', 'produtos típicos', 'criativo'],
    coordenadas: { lat: -18.2402, lng: -43.6018 },
    desc: 'Mostra de artesanato, produtos típicos e economia criativa no circuito histórico.',
    descCompleta: 'O festival valoriza trabalhos manuais, produtos regionais, técnicas tradicionais e criadores de Diamantina e do entorno, conectando turismo, cultura e renda local.',
    turismo: 'Reserve espaço na mala para cerâmicas, bordados, doces e lembranças autorais.',
    curiosidades: [
      'O artesanato é uma das portas de entrada para a cultura do Vale do Jequitinhonha.',
      'O Mercado Velho funciona como eixo natural para feiras e encontros.',
      'A programação combina compras, gastronomia e música.'
    ],
    dicas: [
      { titulo: 'Melhor horario', texto: 'Visite pela manhã para conversar com expositores com mais tranquilidade.' }
    ],
    calDays: [{ month: 7, day: 17 }, { month: 7, day: 18 }, { month: 7, day: 19 }]
  },
  {
    id: 10,
    nome: 'Festival Gastronômico Diamantina Gourmet',
    categoria: 'Gastronômico',
    tipo: 'Festival',
    dataTexto: '7 a 16 nov 2026',
    data: '7 a 16 de novembro de 2026',
    horario: 'Almoço, jantar, oficinas e feiras em horários variados',
    local: 'Restaurantes participantes, Mercado Velho e Centro Histórico',
    bairro: 'Centro Histórico',
    img: './.imagens/Diamantina2.png',
    tags: ['gastronomia', 'cozinha garimpeira', 'produtores', 'memória'],
    coordenadas: { lat: -18.241, lng: -43.601 },
    desc: 'Festival de gastronomia e cultura com restaurantes, cozinhas-show, ingredientes locais e memória da cozinha regional.',
    descCompleta: 'O Festival Gastronômico Diamantina Gourmet valoriza a cozinha de Diamantina e do Vale do Jequitinhonha por meio de restaurantes, cozinheiros tradicionais, oficinas, feiras, pratos autorais e atividades culturais ligadas aos sabores do garimpo.',
    turismo: 'Procure pratos com ingredientes regionais, converse com cozinheiras e combine a experiência com compras no Mercado Velho.',
    curiosidades: [
      'A gastronomia local traduz memórias do garimpo e da vida no Vale.',
      'O festival fortalece produtores, mestres e restaurantes da cidade.',
      'Feiras e oficinas aproximam visitantes dos modos de fazer tradicionais.'
    ],
    dicas: [
      { titulo: 'Reserva', texto: 'Restaurantes podem lotar em fins de semana de Vesperata.' }
    ],
    calDays: [
      { month: 11, day: 7 }, { month: 11, day: 8 }, { month: 11, day: 9 }, { month: 11, day: 10 },
      { month: 11, day: 11 }, { month: 11, day: 12 }, { month: 11, day: 13 }, { month: 11, day: 14 },
      { month: 11, day: 15 }, { month: 11, day: 16 }
    ]
  },
  {
    id: 11,
    nome: 'Concertos da Orquestra Sinfônica Jovem',
    categoria: 'Música',
    tipo: 'Concerto',
    dataTexto: 'Julho a outubro 2026',
    data: 'Concertos especiais ao longo da temporada cultural',
    horario: '20h',
    local: 'Teatro Santa Izabel e igrejas históricas',
    bairro: 'Centro Histórico',
    img: './.imagens/catedral.png',
    tags: ['concerto', 'orquestra', 'música clássica', 'teatro'],
    coordenadas: { lat: -18.2414, lng: -43.603 },
    desc: 'Repertório sinfônico em teatros e igrejas, conectando formação musical e patrimônio.',
    descCompleta: 'Os concertos da Orquestra Sinfônica Jovem reforçam a vocação musical de Diamantina, com apresentações em espaços históricos de forte valor acústico e cultural.',
    turismo: 'Chegue cedo para visitar o entorno do teatro ou da igreja antes da apresentação.',
    curiosidades: [
      'Diamantina é reconhecida por sua intensa vida musical.',
      'Igrejas históricas oferecem ambiência acústica especial.',
      'Concertos ajudam a formar público e jovens músicos.'
    ],
    dicas: [
      { titulo: 'Etiqueta', texto: 'Confira se o espaço exige retirada prévia de ingresso ou chegada antecipada.' }
    ],
    calDays: [{ month: 7, day: 24 }, { month: 8, day: 21 }, { month: 9, day: 11 }, { month: 10, day: 2 }]
  },
  {
    id: 12,
    nome: 'Festa de Nossa Senhora do Carmo',
    categoria: 'Religioso',
    tipo: 'Tradicional',
    dataTexto: '16 jul 2026',
    data: '16 de julho de 2026',
    horario: 'Missa e procissão no fim da tarde',
    local: 'Igreja de Nossa Senhora do Carmo',
    bairro: 'Centro Histórico',
    img: './.imagens/catedral.png',
    tags: ['religioso', 'carmo', 'procissão', 'barroco'],
    coordenadas: { lat: -18.242, lng: -43.5998 },
    desc: 'Celebração mariana em uma das igrejas mais emblemáticas do Centro Histórico.',
    descCompleta: 'A Festa de Nossa Senhora do Carmo reúne devoção, missa, procissão e convivência em torno de uma das referências religiosas e arquitetônicas de Diamantina.',
    turismo: 'Aproveite para conhecer a Igreja do Carmo e o circuito de arte sacra do centro.',
    curiosidades: [
      'A Igreja do Carmo é uma das joias do conjunto histórico de Diamantina.',
      'Festas marianas marcam profundamente o calendário religioso local.',
      'A procissão pelas ruas de pedra reforça a experiência patrimonial.'
    ],
    dicas: [
      { titulo: 'Fotografia', texto: 'Respeite os momentos litúrgicos e evite flash durante celebrações.' }
    ],
    calDays: [{ month: 7, day: 16 }]
  },
  {
    id: 13,
    nome: 'Festa de Nossa Senhora das Dores',
    categoria: 'Religioso',
    tipo: 'Tradicional',
    dataTexto: '15 set 2026',
    data: '15 de setembro de 2026',
    horario: '19h',
    local: 'Catedral Metropolitana e ruas históricas',
    bairro: 'Centro Histórico',
    img: './.imagens/semana santa.png',
    tags: ['religioso', 'procissão', 'catedral', 'tradição'],
    coordenadas: { lat: -18.2416, lng: -43.6027 },
    desc: 'Manifestação de fé e memória religiosa no entorno da Catedral Metropolitana.',
    descCompleta: 'A celebração de Nossa Senhora das Dores integra as tradicionais manifestações religiosas da cidade, com missa, procissão e repertório devocional no centro histórico.',
    turismo: 'Combine a visita com o Largo da Catedral e com o circuito de igrejas históricas.',
    curiosidades: [
      'A devoção a Nossa Senhora das Dores tem forte presença na tradição católica mineira.',
      'O Centro Histórico cria uma ambiência especial para procissões noturnas.',
      'A Catedral é um dos principais marcos urbanos de Diamantina.'
    ],
    dicas: [
      { titulo: 'Circulação', texto: 'Durante procissões, prefira deslocamentos a pé.' }
    ],
    calDays: [{ month: 9, day: 15 }]
  },
  {
    id: 14,
    nome: 'Sertão Diamante',
    categoria: 'Música',
    tipo: 'Festival',
    dataTexto: 'Setembro 2026',
    data: '18 a 20 de setembro de 2026',
    horario: 'A partir das 18h',
    local: 'Praça JK e Mercado Velho',
    bairro: 'Centro Histórico',
    img: './.imagens/Diamantina1.png',
    tags: ['música', 'sertanejo', 'regional', 'festival'],
    coordenadas: { lat: -18.2411, lng: -43.6032 },
    desc: 'Encontro musical popular com repertórios regionais e programação noturna no centro.',
    descCompleta: 'Sertão Diamante é uma agenda musical voltada a sonoridades populares e regionais, pensada para movimentar o turismo, os bares e os espaços abertos do Centro Histórico.',
    turismo: 'Boa opção para quem busca noite musical, restaurantes e circulação pelo Mercado Velho.',
    curiosidades: [
      'A programação popular complementa a tradição clássica e seresteira da cidade.',
      'Eventos na Praça JK ajudam a distribuir público pelo centro.',
      'A noite diamantinense ganha força em fins de semana de música.'
    ],
    dicas: [
      { titulo: 'Noite', texto: 'Planeje retorno a pé ou por transporte local se estiver hospedado fora do centro.' }
    ],
    calDays: [{ month: 9, day: 18 }, { month: 9, day: 19 }, { month: 9, day: 20 }]
  },
  {
    id: 15,
    nome: 'Festa no Mercado Velho',
    categoria: 'Gastronômico',
    tipo: 'Popular',
    dataTexto: 'Sextas culturais',
    data: 'Programação recorrente em fins de semana de eventos',
    horario: '18h às 23h',
    local: 'Praça do Mercado Velho',
    bairro: 'Mercado Velho',
    img: './.imagens/Diamantina2.png',
    tags: ['mercado velho', 'bares', 'música', 'gastronomia'],
    coordenadas: { lat: -18.2402, lng: -43.6018 },
    desc: 'Música ao vivo, bares, comidas típicas e convivência no ponto boêmio mais conhecido da cidade.',
    descCompleta: 'A programação do Mercado Velho é uma das formas mais espontâneas de viver Diamantina: mesas na praça, música, comida regional e circulação entre moradores e turistas.',
    turismo: 'Ideal para sexta à noite, antes de uma Vesperata ou de um roteiro cultural no sábado.',
    curiosidades: [
      'O Mercado Velho é referência de encontro, feira e gastronomia.',
      'A programação varia conforme fim de semana e temporada.',
      'É um dos melhores lugares para sentir a vida local.'
    ],
    dicas: [
      { titulo: 'Chegada', texto: 'As mesas ocupam rápido em noites movimentadas.' }
    ],
    calDays: [{ month: 6, day: 12 }, { month: 7, day: 3 }, { month: 8, day: 7 }, { month: 9, day: 18 }, { month: 10, day: 9 }]
  },
  {
    id: 16,
    nome: 'Eventos da Vila do Biribiri',
    categoria: 'Turismo',
    tipo: 'Natureza',
    dataTexto: 'Junho a novembro 2026',
    data: 'Fins de semana selecionados',
    horario: '10h às 17h',
    local: 'Vila do Biribiri',
    bairro: 'Biribiri',
    img: './.imagens/Diamantina2.png',
    tags: ['biribiri', 'natureza', 'gastronomia', 'vila histórica'],
    coordenadas: { lat: -18.176, lng: -43.583 },
    desc: 'Programas de dia inteiro com vila histórica, cachoeiras, gastronomia e cultura local.',
    descCompleta: 'A Vila do Biribiri combina patrimônio industrial, paisagem natural e gastronomia. Em fins de semana de temporada, recebe programações culturais, experiências turísticas e atividades de convivência.',
    turismo: 'Vá de dia, leve roupa confortável e confira condições de acesso a cachoeiras.',
    curiosidades: [
      'A vila preserva memória da antiga fábrica têxtil.',
      'O entorno natural é um dos passeios mais procurados de Diamantina.',
      'Restaurantes e pequenas experiências completam o roteiro.'
    ],
    dicas: [
      { titulo: 'Natureza', texto: 'Leve água, protetor solar e respeite orientações ambientais.' }
    ],
    calDays: [{ month: 6, day: 21 }, { month: 7, day: 19 }, { month: 8, day: 16 }, { month: 9, day: 27 }, { month: 10, day: 18 }]
  },
  {
    id: 17,
    nome: 'Trilhas e Cicloturismo em Conselheiro Mata',
    categoria: 'Esportivo',
    tipo: 'Turismo',
    dataTexto: 'Julho a novembro 2026',
    data: 'Saídas guiadas em fins de semana',
    horario: '7h',
    local: 'Distrito de Conselheiro Mata e Caminho dos Escravos',
    bairro: 'Conselheiro Mata',
    img: './.imagens/Diamantina1.png',
    tags: ['trilha', 'mtb', 'cicloturismo', 'natureza'],
    coordenadas: { lat: -18.304, lng: -43.759 },
    desc: 'Roteiros de bike e caminhada por antigas passagens, paisagens serranas e comunidades do entorno.',
    descCompleta: 'As experiências esportivas e turísticas conectam Diamantina a paisagens naturais, antigos caminhos e distritos como Conselheiro Mata, com potencial para caminhadas, mountain bike e roteiros guiados.',
    turismo: 'Contrate condutor local, verifique clima e leve equipamentos adequados.',
    curiosidades: [
      'A região integra paisagens do antigo leito ferroviário e caminhos históricos.',
      'O cicloturismo tem crescido como produto turístico local.',
      'As trilhas conectam esporte, natureza e memória territorial.'
    ],
    dicas: [
      { titulo: 'Segurança', texto: 'Não faça trilhas longas sem guia, sinal e planejamento.' }
    ],
    calDays: [{ month: 7, day: 26 }, { month: 8, day: 30 }, { month: 9, day: 27 }, { month: 11, day: 8 }]
  },
  {
    id: 18,
    nome: 'Estilo de Minas Concert',
    categoria: 'Música',
    tipo: 'Concerto',
    dataTexto: '3 out 2026',
    data: '3 de outubro de 2026',
    horario: '20h30',
    local: 'Hotel Estilo de Minas e Centro Histórico',
    bairro: 'Centro Histórico',
    img: './.imagens/Vesperata.png',
    tags: ['concerto', 'música', 'hotelaria', 'turismo'],
    coordenadas: { lat: -18.236, lng: -43.608 },
    desc: 'Experiência musical intimista associada a hospedagem, gastronomia e fim de semana cultural.',
    descCompleta: 'O Estilo de Minas Concert representa uma proposta de música em formato mais reservado, conectando hotelaria, experiência premium e a vocação musical de Diamantina.',
    turismo: 'Indicado para casais e visitantes que querem combinar hospedagem confortável e programação musical.',
    curiosidades: [
      'Diamantina tem forte tradição de pequenos concertos e saraus.',
      'Experiências hoteleiras ajudam a diversificar a agenda turística.',
      'O formato intimista valoriza repertório e proximidade com os músicos.'
    ],
    dicas: [
      { titulo: 'Reserva', texto: 'Verifique disponibilidade diretamente com o espaço organizador.' }
    ],
    calDays: [{ month: 10, day: 3 }]
  },
  {
    id: 19,
    nome: 'JK Jazz Band',
    categoria: 'Música',
    tipo: 'Show',
    dataTexto: '10 out 2026',
    data: '10 de outubro de 2026',
    horario: '19h30',
    local: 'Praça JK',
    bairro: 'Centro Histórico',
    img: './.imagens/Vesperata.png',
    tags: ['jazz', 'jk', 'música instrumental', 'praça jk'],
    coordenadas: { lat: -18.2411, lng: -43.6032 },
    desc: 'Música instrumental em espaço aberto, conectando jazz, bossa e tradição musical local.',
    descCompleta: 'A JK Jazz Band reforça a imagem de Diamantina como cidade musical, com repertório instrumental em diálogo com jazz, bossa nova, seresta e a atmosfera das praças históricas.',
    turismo: 'Chegue antes para circular pela Praça JK e emendar com restaurantes próximos.',
    curiosidades: [
      'A cidade tem relação histórica com bandas, serestas e formação musical.',
      'Shows abertos aproximam moradores e visitantes.',
      'O nome remete ao símbolo histórico mais conhecido de Diamantina.'
    ],
    dicas: [
      { titulo: 'Lugar', texto: 'Prefira chegar cedo para escolher bom ponto de visão.' }
    ],
    calDays: [{ month: 10, day: 10 }]
  },
  {
    id: 20,
    nome: 'Semana Santa Diamantinense',
    categoria: 'Religioso',
    tipo: 'Tradicional',
    dataTexto: '21 a 28 mar 2027',
    data: 'Semana Santa de 2027',
    horario: 'Celebrações pela manhã, tarde e noite',
    local: 'Catedral Metropolitana, igrejas e ruas históricas',
    bairro: 'Centro Histórico',
    img: './.imagens/semana santa.png',
    tags: ['semana santa', 'procissão', 'religioso', 'patrimônio'],
    coordenadas: { lat: -18.2416, lng: -43.6027 },
    desc: 'Procissões, tapetes, guarda romana e celebrações barrocas em uma das semanas mais marcantes da cidade.',
    descCompleta: 'A Semana Santa de Diamantina é uma celebração religiosa de forte apelo cultural, com procissões, imagens sacras, ritos tradicionais e intensa participação comunitária no Centro Histórico.',
    turismo: 'Para a próxima edição, planeje hospedagem com antecedência e acompanhe a programação paroquial.',
    observação: 'Próxima edição futura usada para planejamento turístico; confirme a programação paroquial oficial antes da viagem.',
    curiosidades: [
      'Os ritos ocupam igrejas e ruas de pedra do conjunto histórico.',
      'A iluminação por velas cria uma das cenas mais fotografadas da cidade.',
      'A celebração integra fé, arte sacra e memória coletiva.'
    ],
    dicas: [
      { titulo: 'Respeito', texto: 'Durante os ritos, mantenha silêncio e preserve a circulação das procissões.' }
    ],
    calDays: [
      { year: 2027, month: 3, day: 21 }, { year: 2027, month: 3, day: 25 },
      { year: 2027, month: 3, day: 26 }, { year: 2027, month: 3, day: 27 },
      { year: 2027, month: 3, day: 28 }
    ]
  },
  {
    id: 21,
    nome: 'Festa do Divino Espírito Santo',
    categoria: 'Religioso',
    tipo: 'Tradicional',
    dataTexto: '16 mai 2027',
    data: 'Domingo de Pentecostes, 50 dias após a Páscoa',
    horario: 'Cortejo e celebrações a partir da manhã',
    local: 'Catedral Metropolitana e Praça do Mercado Velho',
    bairro: 'Centro Histórico',
    img: './.imagens/catedral.png',
    tags: ['divino', 'bolo de arroz', 'procissão', 'patrimônio imaterial'],
    coordenadas: { lat: -18.2416, lng: -43.6027 },
    desc: 'Festa de fé, cortejo, música, símbolos do Divino e distribuição do tradicional bolo de arroz.',
    descCompleta: 'A Festa do Divino Espírito Santo é patrimônio cultural imaterial de Diamantina. A celebração envolve novena, coroação, procissão, bandas, personagens tradicionais e o modo de fazer do bolo de arroz.',
    turismo: 'Acompanhe cortejos com respeito e experimente o bolo de arroz, símbolo afetivo da festa.',
    observação: 'Próxima edição futura: domingo de Pentecostes de 2027.',
    curiosidades: [
      'A festa acontece no domingo de Pentecostes.',
      'O modo de fazer o bolo de arroz também é referência cultural local.',
      'A manifestação tem registros históricos desde o século XIX.'
    ],
    dicas: [
      { titulo: 'Cultura viva', texto: 'Observe indumentárias, bandeiras e músicas como parte do patrimônio imaterial.' }
    ],
    calDays: [{ year: 2027, month: 5, day: 16 }]
  },
  {
    id: 22,
    nome: 'Eventos Culturais da UFVJM',
    categoria: 'Cultural',
    tipo: 'Universitário',
    dataTexto: 'Agosto a novembro 2026',
    data: 'Programação acadêmica e cultural semestral',
    horario: 'Manhã, tarde e noite',
    local: 'Campus JK - UFVJM',
    bairro: 'Campus JK',
    img: './.imagens/Diamantina1.png',
    tags: ['ufvjm', 'universidade', 'cultura', 'formação'],
    coordenadas: { lat: -18.218, lng: -43.595 },
    desc: 'Mostras, encontros, debates, atividades artísticas e eventos universitários abertos à comunidade.',
    descCompleta: 'A UFVJM amplia a agenda cultural de Diamantina com eventos acadêmicos, mostras, projetos de extensão, apresentações e debates que conectam universidade, cidade e visitantes.',
    turismo: 'Confira a agenda do campus quando estiver na cidade em semana de festival ou feriado prolongado.',
    curiosidades: [
      'A universidade ajuda a movimentar a vida cultural durante todo o ano.',
      'Projetos de extensão aproximam estudantes e comunidade.',
      'Eventos acadêmicos complementam a agenda turística tradicional.'
    ],
    dicas: [
      { titulo: 'Transporte', texto: 'O Campus JK fica fora do miolo histórico; planeje deslocamento.' }
    ],
    calDays: [{ month: 8, day: 28 }, { month: 9, day: 24 }, { month: 10, day: 22 }, { month: 11, day: 19 }]
  }
];

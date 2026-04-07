
/* ══════════════════════════════════════════
   DATA — eventos mockados
══════════════════════════════════════════ */
const EVENTOS = [
  {
    id: 1,
    tag: 'Música Tradicional',
    nome: 'Vesperata',
    dataTexto: 'Sextas e sábados · 2026',
    desc: 'Músicos nas sacadas dos casarões históricos enquanto o público toma as ruas de pedra — um espetáculo para os sentidos.',
    descCompleta: 'A Vesperata é um dos eventos mais tradicionais de Diamantina, onde músicos se apresentam nas sacadas dos casarões históricos enquanto o público acompanha das ruas de pedra, criando uma experiência única que une música, arquitetura e convivência. O espetáculo acontece ao entardecer, com a luz dourada do sol tingindo as fachadas coloniais e criando uma atmosfera verdadeiramente mágica.',
    img: './.imagens/vesperata.png',  
    local: 'Centro Histórico — Rua da Quitanda',
    horario: 'A partir das 17h30',
    data: 'Sextas e sábados, ao longo de 2026',
    curiosidades: [
      'O público pode reger a orquestra ao final de cada apresentação com batutas distribuídas.',
      'A tradição teve início no início dos anos 1990 como valorização da cultura local.',
      'O evento já recebeu turistas de mais de 40 países diferentes.',
      'As músicas vão do barroco ao forró, surpreendendo sempre o público.',
    ],
    dicasMoradores: {
      titulo: 'Restaurantes para ir',
      itens: [
        { nome: 'Cafe Baiuca', link: 'https://www.instagram.com/cafebaiuca/' }
      ]
    },
    calDays: [
      { month: 4, day: 11 }, { month: 4, day: 25 },
      { month: 5, day: 23 }, { month: 5, day: 30 },
      { month: 6, day: 13 }, { month: 6, day: 20 }, { month: 6, day: 27 },
      { month: 7, day: 4 }, { month: 7, day: 11 },
      { month: 8, day: 8 }, { month: 8, day: 15 }, { month: 8, day: 29 },
      { month: 9, day: 19 }, { month: 9, day: 26 },
      { month: 10, day: 10 }, { month: 10, day: 17 }
    ],
  },
  {
    id: 2,
    tag: 'Religiosidade',
    nome: 'Semana Santa',
    dataTexto: 'Março / Abril · 2026',
    desc: 'Procissões centenárias iluminadas por velas percorrem as ruas de pedra em uma das manifestações religiosas mais belas do Brasil.',
    descCompleta: 'A Semana Santa de Diamantina é uma das mais belas e emocionantes do país. Procissões iluminadas por velas percorrem as ruas históricas da cidade, com devotos carregando imagens sacras de grande valor artístico. A devoção popular se mistura à arte barroca numa experiência que toca a alma.',
    img: './.imagens/semana santa.png',  
    local: 'Igrejas e ruas históricas',
    horario: 'Noite (diversas procissões)',
    data: 'Março / Abril de 2026',
    curiosidades: [
      'Algumas imagens sacras têm mais de 250 anos de história.',
      'A Via Sacra da Ladeira do Amparo é uma das mais emocionantes do estado.',
      'Turistas de todo o Brasil vêm especialmente para a Semana Santa diamantinense.',
    ],
    calDays: [{ month: 3, day: 29 }, { month: 3, day: 30 }, { month: 4, day: 2 }, { month: 4, day: 3 }, { month: 4, day: 4 }],
  },
  {
    id: 3,
    tag: 'Cultura & Arte',
    nome: 'Festival de Inverno de Diamantina',
    dataTexto: 'Julho · 2026',
    desc: 'Um dos maiores eventos culturais de Minas, unindo grandes shows de MPB, oficinas de arte e cinema nas ruas históricas.',
    descCompleta: 'O Festival de Inverno de Diamantina é um evento multicultural que transforma a cidade em um polo de aprendizado e entretenimento. A programação vai muito além da música: conta com oficinas de artes visuais, teatro, mostras de cinema e debates acadêmicos. Grandes nomes da música brasileira se apresentam na Praça JK, enquanto as igrejas e casarões recebem concertos de música de câmara e exposições artísticas.',
    img: './.imagens/festivalinverno.png', 
    local: 'Praça JK, Teatro Santa Izabel e Campus da UFVJM',
    horario: 'Manhã, tarde e noite',
    data: 'Julho de 2026',
    curiosidades: [
      'O festival promove o intercâmbio entre artistas locais e grandes nomes da cena nacional.',
      'Além dos shows, o evento oferece oficinas gratuitas para a comunidade e turistas.',
      'As mostras de cinema ao ar livre são uma das atrações favoritas dos visitantes.',
    ],
    calDays: [{ month: 7, day: 10 }, { month: 7, day: 11 }, { month: 7, day: 12 }, { month: 7, day: 13 }],
  },
];

/* ══════════════════════════════════════════
   RENDER EVENTS
══════════════════════════════════════════ */
const grid = document.getElementById('eventsGrid');
EVENTOS.forEach((ev, i) => {
  const card = document.createElement('article');
  card.className = 'event-card fade-in';
  card.style.transitionDelay = `${i * .12}s`;
  card.innerHTML = `
    <div class="card-img-wrap">
      <img src="${ev.img}" alt="${ev.nome}" loading="lazy"/>
      <span class="card-badge">${ev.tag}</span>
    </div>
    <div class="card-body">
      <p class="card-date">📅 ${ev.dataTexto}</p>
      <h3 class="card-title">${ev.nome}</h3>
      <p class="card-desc">${ev.desc}</p>
      <button class="btn-card" data-id="${ev.id}">
        Ver mais
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      </button>
    </div>`;
  grid.appendChild(card);
});

/* ══════════════════════════════════════════
   MODAL
══════════════════════════════════════════ */
const overlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalTabs = document.getElementById('modalTabs');
const modalTabInfo = document.getElementById('modalTabInfo');
const modalTabDicas = document.getElementById('modalTabDicas');
const modalPanelInfo = document.getElementById('modalPanelInfo');
const modalPanelDicas = document.getElementById('modalPanelDicas');

function setModalTab(tab) {
  if (!modalTabInfo || !modalTabDicas || !modalPanelInfo || !modalPanelDicas) return;

  const infoActive = tab === 'info';
  modalTabInfo.classList.toggle('active', infoActive);
  modalTabDicas.classList.toggle('active', !infoActive);
  modalPanelInfo.hidden = !infoActive;
  modalPanelDicas.hidden = infoActive;
}

function resetModalTabs(hasDicas) {
  if (!modalTabs || !modalTabInfo || !modalTabDicas || !modalPanelInfo || !modalPanelDicas) return;

  modalTabs.hidden = !hasDicas;
  modalTabs.style.display = hasDicas ? 'flex' : 'none';
  modalTabInfo.classList.add('active');
  modalTabDicas.classList.remove('active');
  modalPanelInfo.hidden = false;
  modalPanelDicas.hidden = true;
}

function openModal(id) {
  const ev = EVENTOS.find(e => e.id === id);
  if (!ev) return;
  document.getElementById('modalImg').src = ev.img;
  document.getElementById('modalImg').alt = ev.nome;
  document.getElementById('modalTag').textContent = ev.tag;
  document.getElementById('modalTitle').textContent = ev.nome;
  document.getElementById('modalDesc').textContent = ev.descCompleta;
  document.getElementById('modalMeta').innerHTML = `
    <div class="modal-meta-item">📍 Local: <span>${ev.local}</span></div>
    <div class="modal-meta-item">🕒 Horário: <span>${ev.horario}</span></div>
    <div class="modal-meta-item">📅 Data: <span>${ev.data}</span></div>`;
  document.getElementById('modalCuriosas').innerHTML = `
    <h4>✦ Curiosidades</h4>
    <ul>${ev.curiosidades.map(c => `<li>${c}</li>`).join('')}</ul>`;
  if (modalTabs && modalPanelDicas) {
    const hasDicas = Boolean(ev.dicasMoradores);
    resetModalTabs(hasDicas);

    if (hasDicas) {
      modalPanelDicas.innerHTML = `
        <h4>${ev.dicasMoradores.titulo}</h4>
        <ul>${ev.dicasMoradores.itens.map(item => `<li><a href="${item.link}" target="_blank" rel="noopener noreferrer">${item.nome}</a></li>`).join('')}</ul>`;
    } else {
      modalPanelDicas.innerHTML = '';
    }
  }
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

if (modalTabInfo) {
  modalTabInfo.addEventListener('click', () => setModalTab('info'));
}

if (modalTabDicas) {
  modalTabDicas.addEventListener('click', () => setModalTab('dicas'));
}

document.addEventListener('click', e => {
  const btn = e.target.closest('.btn-card');
  if (btn) openModal(Number(btn.dataset.id));
});
modalClose.addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ══════════════════════════════════════════
   CALENDAR
══════════════════════════════════════════ */
let calDate = new Date(2026, 4, 1); // May 2026
let selDay = null;

const MESES = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
const calMonthYear = document.getElementById('calMonthYear');
const calDays = document.getElementById('calDays');
const calPreview = document.getElementById('calPreview');
const calPrev = document.getElementById('calPrev');
const calNext = document.getElementById('calNext');

function getEventsOnDay(month0, day) {
  return EVENTOS.filter(ev => ev.calDays.some(d => d.month === month0 + 1 && d.day === day));
}

function resetPreview() {
  if (!calPreview) return;
  calPreview.innerHTML = '<span class="cal-no-event">Selecione um dia com ponto vinho para ver os detalhes</span>';
}

function renderCalendar() {
  if (!calMonthYear || !calDays) return;

  const yr = calDate.getFullYear();
  const mo = calDate.getMonth();
  calMonthYear.textContent = `${MESES[mo]} ${yr}`;

  const firstDow = new Date(yr, mo, 1).getDay();
  const daysInMonth = new Date(yr, mo + 1, 0).getDate();
  const today = new Date();

  calDays.innerHTML = '';

  for (let i = 0; i < firstDow; i++) {
    const empty = document.createElement('div');
    empty.className = 'cal-day empty';
    calDays.appendChild(empty);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const cell = document.createElement('div');
    const evs = getEventsOnDay(mo, d);
    cell.className = 'cal-day';
    const dayLabel = document.createElement('span');
    dayLabel.textContent = d;
    dayLabel.style.position = 'relative';
    dayLabel.style.zIndex = '1';
    if (today.getFullYear() === yr && today.getMonth() === mo && today.getDate() === d)
      cell.classList.add('today');
    if (evs.length) {
      cell.classList.add('has-event');

      const img = document.createElement('img');
      img.src = evs[0].img;
      img.className = 'cal-thumb';
      img.alt = '';
      img.loading = 'lazy';
      cell.appendChild(img);
    }
    if (selDay && selDay.d === d && selDay.m === mo && selDay.y === yr)
      cell.classList.add('selected');
    cell.appendChild(dayLabel);
    cell.addEventListener('click', () => {
      selDay = { d, m: mo, y: yr };
      renderCalendar();
      updatePreview(mo, d);
    });
    calDays.appendChild(cell);
  }
}

function updatePreview(mo, d) {
  if (!calPreview) return;

  const evs = getEventsOnDay(mo, d);
  if (!evs.length) {
    calPreview.innerHTML = '<span class="cal-no-event">Nenhum evento neste dia.</span>';
    return;
  }
  calPreview.innerHTML = evs.map(ev => `
    <div class="cal-event-item">
      <div class="cal-event-dot"></div>
      <div>
        <div class="cal-event-name">${ev.nome}</div>
        <div class="cal-event-info">📍 ${ev.local} · 🕒 ${ev.horario}</div>
      </div>
    </div>`).join('');
}

if (calPrev) {
  calPrev.addEventListener('click', () => {
    calDate.setMonth(calDate.getMonth() - 1);
    selDay = null;
    renderCalendar();
    resetPreview();
  });
}

if (calNext) {
  calNext.addEventListener('click', () => {
    calDate.setMonth(calDate.getMonth() + 1);
    selDay = null;
    renderCalendar();
    resetPreview();
  });
}

renderCalendar();
resetPreview();

/* ══════════════════════════════════════════
   HEADER SCROLL
══════════════════════════════════════════ */
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 60);
});

/* ══════════════════════════════════════════
   PARALLAX
══════════════════════════════════════════ */
const heroBg = document.getElementById('heroBg');
window.addEventListener('scroll', () => {
  if (window.scrollY < window.innerHeight) {
    heroBg.style.transform = `translateY(${window.scrollY * .35}px)`;
  }
}, { passive: true });

/* ══════════════════════════════════════════
   FADE-IN ON SCROLL
══════════════════════════════════════════ */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: .1 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

/* ══════════════════════════════════════════
   HAMBURGER
══════════════════════════════════════════ */
const mobileMenu = document.getElementById('mobileMenu');
document.getElementById('hamburgerBtn').addEventListener('click', () => mobileMenu.classList.add('open'));
document.getElementById('closeMenu').addEventListener('click', () => mobileMenu.classList.remove('open'));
document.querySelectorAll('.mob-link').forEach(a => {
  a.addEventListener('click', () => mobileMenu.classList.remove('open'));
});


const MESES = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

const CATEGORY_CLASS = {
  Música: '#b89548',
  Religioso: '#681f2b',
  Gastronômico: '#b56838',
  Cultural: '#315b7d',
  Festival: '#7a4f98',
  Artesanato: '#8a6b2d',
  Esportivo: '#2f725c',
  Histórico: '#6a5144',
  Infantil: '#be7c53',
  Turismo: '#2f6d86'
};

const ACCESSIBILITY_META = {
  accessible: {
    label: 'Acessível',
    description: 'Acesso nivelado ou com rampas, boa circulação e melhor apoio para idosos e pessoas com mobilidade reduzida.',
    className: 'accessible'
  },
  partial: {
    label: 'Acessibilidade Parcial',
    description: 'Possui alguns recursos de acessibilidade, mas pode exigir atenção em trechos irregulares ou com pequenos desníveis.',
    className: 'partial'
  },
  limited: {
    label: 'Acessibilidade Limitada',
    description: 'Pode incluir escadas, ladeiras acentuadas, trilhas ou terrenos irregulares com dificuldade significativa de acesso.',
    className: 'limited'
  }
};

const state = {
  query: '',
  categoria: 'Todos',
  tipo: 'Todos',
  mes: 'Todos',
  local: 'Todos',
  accessibility: [],
  visibleCount: 9,
  selectedDay: null,
  calDate: new Date(2026, 5, 1)
};

function normalizar(texto) {
  return String(texto || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function byNextDate(a, b) {
  const da = a.calDays?.[0] || { month: 12, day: 31 };
  const db = b.calDays?.[0] || { month: 12, day: 31 };
  return (da.year || 2026) - (db.year || 2026) || da.month - db.month || da.day - db.day;
}

function getEventMonths(ev) {
  return [...new Set((ev.calDays || []).map(d => d.month))];
}

function isDefaultFilter(value) {
  return normalizar(value) === 'todos';
}

function sameText(a, b) {
  return normalizar(a) === normalizar(b);
}

function includesText(texto, trecho) {
  return normalizar(texto).includes(normalizar(trecho));
}

function getAccessibilityMeta(key) {
  return ACCESSIBILITY_META[key] || ACCESSIBILITY_META.partial;
}

function getAccessibilityLabel(key) {
  return getAccessibilityMeta(key).label;
}

function AccessibilityTag(key) {
  const meta = getAccessibilityMeta(key);
  return `<span class="accessibility-tag ${meta.className}" title="${meta.description}">${meta.label}</span>`;
}

function hasActiveFilter() {
  return Boolean(state.query.trim())
    || !isDefaultFilter(state.categoria)
    || !isDefaultFilter(state.tipo)
    || !isDefaultFilter(state.mes)
    || !isDefaultFilter(state.local)
    || state.accessibility.length > 0;
}

function getFilterOptions(key) {
  if (key === 'categoria') return ['Todos', ...new Set(EVENTOS.map(ev => ev.categoria))].sort((a, b) => a === 'Todos' ? -1 : b === 'Todos' ? 1 : a.localeCompare(b));
  if (key === 'tipo') return ['Todos', ...new Set(EVENTOS.map(ev => ev.tipo))].sort((a, b) => a === 'Todos' ? -1 : b === 'Todos' ? 1 : a.localeCompare(b));
  if (key === 'local') return ['Todos', ...new Set(EVENTOS.map(ev => ev.bairro || ev.local))].sort((a, b) => a === 'Todos' ? -1 : b === 'Todos' ? 1 : a.localeCompare(b));
  if (key === 'mes') return ['Todos', ...new Set(EVENTOS.flatMap(getEventMonths))].sort((a, b) => a === 'Todos' ? -1 : b === 'Todos' ? 1 : a - b);
  return ['Todos'];
}

function eventMatches(ev) {
  const haystack = normalizar([
    ev.nome, ev.categoria, ev.tipo, ev.local, ev.bairro, ev.desc, ev.dataTexto, ...(ev.tags || [])
  ].join(' '));
  const matchesQuery = !state.query || haystack.includes(normalizar(state.query));
  const matchesCategory = isDefaultFilter(state.categoria) || sameText(ev.categoria, state.categoria);
  const matchesType = isDefaultFilter(state.tipo) || sameText(ev.tipo, state.tipo);
  const matchesMonth = isDefaultFilter(state.mes) || getEventMonths(ev).includes(Number(state.mes));
  const matchesLocal = isDefaultFilter(state.local) || sameText(ev.bairro, state.local) || includesText(ev.local, state.local);
  const matchesAccessibility = !state.accessibility.length || state.accessibility.includes(ev.accessibility || 'partial');
  return matchesQuery && matchesCategory && matchesType && matchesMonth && matchesLocal && matchesAccessibility;
}

function filteredEvents() {
  return EVENTOS.filter(eventMatches).sort(byNextDate);
}

function renderFilterOptions() {
  document.querySelectorAll('[data-filter]').forEach(select => {
    const key = select.dataset.filter;
    select.innerHTML = getFilterOptions(key).map(option => {
      const value = option;
      let label = option;

      if (key === 'categoria' && option === 'Todos') {
        label = 'Categoria (Todas)';
      }

      if (key === 'tipo' && option === 'Todos') {
        label = 'Tipo (Todos)';
      }

      if (key === 'mes' && option === 'Todos') {
        label = 'Mês (Todos)';
      }

      if (key === 'local' && option === 'Todos') {
        label = 'Local (Todos)';
      }

      if (key === 'mes' && option !== 'Todos') {
        label = MESES[Number(option) - 1];
      } return `<option value="${value}">${label}</option>`;
    }).join('');
  });
}

function cardTemplate(ev) {
  const color = CATEGORY_CLASS[ev.categoria] || '#b89548';
  return `
    <article class="event-card fade-in" data-event-card>
      <div class="card-img-wrap">
        <img src="${ev.img}" alt="${ev.nome}" loading="lazy">
        <div class="badge-row">
          <span class="badge" style="border-color:${color};color:#fff;background:${color}">${ev.categoria}</span>
          <span class="badge">${ev.tipo}</span>
          ${AccessibilityTag(ev.accessibility)}
        </div>
        <div class="card-date-float">${ev.dataTexto}</div>
      </div>
      <div class="card-body">
        <h3 class="card-title">${ev.nome}</h3>
        <p class="card-desc">${ev.desc}</p>
        <div class="card-meta">
          <span>${ev.local}</span>
          <span>${ev.horario}</span>
        </div>
        <div class="card-actions">
          <button class="btn-card" type="button" data-open-event="${ev.id}">Saiba mais</button>
          <span class="badge badge-date">${ev.dataTexto}</span>
        </div>
      </div>
    </article>
  `;
}

function renderEvents() {
  const grids = document.querySelectorAll('[data-events-grid]');
  if (!grids.length) return;

  const all = filteredEvents();
  const isDedicatedPage = document.body.dataset.page === 'eventos';
  const shouldShowFilteredResults = isDedicatedPage || hasActiveFilter();
  const list = shouldShowFilteredResults ? all.slice(0, state.visibleCount) : all.filter(ev => ev.destaque).slice(0, 6);

  grids.forEach(grid => {
    grid.innerHTML = list.length ? list.map(cardTemplate).join('') : '<p class="empty-state">Nenhum evento encontrado com os filtros selecionados.</p>';
  });

  const meta = document.querySelector('[data-results-meta]');
  if (meta) {
    meta.textContent = `${all.length} evento${all.length === 1 ? '' : 's'} encontrado${all.length === 1 ? '' : 's'}`;
  }

  const notice = document.querySelector('[data-accessibility-notice]');
  if (notice) {
    notice.hidden = false;
  }

  const loadMore = document.querySelector('[data-load-more]');
  if (loadMore) {
    loadMore.hidden = !isDedicatedPage || state.visibleCount >= all.length;
  }

  refreshObserver();
}

function setupFilters() {
  const search = document.querySelector('[data-search]');
  if (search) {
    search.addEventListener('input', e => {
      state.query = e.target.value;
      state.visibleCount = 9;
      renderEvents();
    });
  }

  document.querySelectorAll('[data-filter]').forEach(select => {
    select.addEventListener('change', e => {
      state[e.target.dataset.filter] = e.target.value;
      state.visibleCount = 9;
      renderEvents();
      renderCalendar();
      resetCalendarPreview();
    });
  });

  document.querySelectorAll('[data-accessibility-filter]').forEach(input => {
    input.addEventListener('change', () => {
      state.accessibility = [...document.querySelectorAll('[data-accessibility-filter]:checked')].map(el => el.value);
      state.visibleCount = 9;
      renderEvents();
      renderCalendar();
      resetCalendarPreview();
    });
  });

  const loadMore = document.querySelector('[data-load-more]');
  if (loadMore) {
    loadMore.addEventListener('click', () => {
      state.visibleCount += 6;
      renderEvents();
    });
  }

  // Toggle filter legend
  const legendToggle = document.querySelector('.filter-legend-toggle');
  if (legendToggle) {
    legendToggle.addEventListener('click', e => {
      const isExpanded = legendToggle.getAttribute('aria-expanded') === 'true';
      legendToggle.setAttribute('aria-expanded', !isExpanded);
      const content = document.getElementById('filter-help');
      if (content) {
        content.hidden = isExpanded;
      }
    });
  }
}

function getEventsOnDay(month0, day) {
  const year = state.calDate.getFullYear();
  return EVENTOS
    .filter(eventMatches)
    .filter(ev => ev.calDays?.some(d => d.month === month0 + 1 && d.day === day && (!d.year || d.year === year)));
}

function resetCalendarPreview() {
  const preview = document.querySelector('[data-cal-preview]');
  if (!preview) return;
  preview.innerHTML = '<span class="cal-no-event">Selecione um dia com miniatura ou marcador para ver os detalhes.</span>';
}

function renderCalendar() {
  const monthLabel = document.querySelector('[data-cal-month]');
  const daysContainer = document.querySelector('[data-cal-days]');
  if (!monthLabel || !daysContainer) return;

  const yr = state.calDate.getFullYear();
  const mo = state.calDate.getMonth();
  monthLabel.textContent = `${MESES[mo]} ${yr}`;
  daysContainer.innerHTML = '';

  const firstDow = new Date(yr, mo, 1).getDay();
  const daysInMonth = new Date(yr, mo + 1, 0).getDate();
  const today = new Date();

  for (let i = 0; i < firstDow; i += 1) {
    daysContainer.insertAdjacentHTML('beforeend', '<button class="cal-day empty" type="button" tabindex="-1"></button>');
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const evs = getEventsOnDay(mo, day);
    const isToday = today.getFullYear() === yr && today.getMonth() === mo && today.getDate() === day;
    const isSelected = state.selectedDay?.day === day && state.selectedDay?.month === mo && state.selectedDay?.year === yr;
    const thumbs = evs.slice(0, 3).map(ev => `<img class="cal-thumb" src="${ev.img}" alt="">`).join('');
    const markers = evs.slice(0, 4).map(ev => `<span class="marker" style="background:${CATEGORY_CLASS[ev.categoria] || '#681f2b'}"></span>`).join('');

    daysContainer.insertAdjacentHTML('beforeend', `
      <button class="cal-day ${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''}" type="button" data-cal-day="${day}">
        <span class="cal-number">${day}</span>
        ${evs.length ? `<span class="cal-thumbs">${thumbs}</span><span class="cal-markers">${markers}</span>` : ''}
      </button>
    `);
  }
}

function updateCalendarPreview(month0, day) {
  const preview = document.querySelector('[data-cal-preview]');
  if (!preview) return;
  const evs = getEventsOnDay(month0, day);

  if (!evs.length) {
    preview.innerHTML = '<span class="cal-no-event">Nenhum evento encontrado neste dia com os filtros atuais.</span>';
    return;
  }

  preview.innerHTML = evs.map(ev => `
    <button class="cal-event-item" type="button" data-open-event="${ev.id}">
      <img src="${ev.img}" alt="">
      <span>
        <span class="cal-event-name">${ev.nome}</span>
        <span class="cal-event-info">${ev.local}<br>${ev.horario}</span>
      </span>
    </button>
  `).join('');
}

function setupCalendar() {
  const prev = document.querySelector('[data-cal-prev]');
  const next = document.querySelector('[data-cal-next]');
  const days = document.querySelector('[data-cal-days]');

  prev?.addEventListener('click', () => {
    state.calDate.setMonth(state.calDate.getMonth() - 1);
    state.selectedDay = null;
    renderCalendar();
    resetCalendarPreview();
  });

  next?.addEventListener('click', () => {
    state.calDate.setMonth(state.calDate.getMonth() + 1);
    state.selectedDay = null;
    renderCalendar();
    resetCalendarPreview();
  });

  days?.addEventListener('click', e => {
    const dayButton = e.target.closest('[data-cal-day]');
    if (!dayButton) return;
    const day = Number(dayButton.dataset.calDay);
    state.selectedDay = { day, month: state.calDate.getMonth(), year: state.calDate.getFullYear() };
    renderCalendar();
    updateCalendarPreview(state.calDate.getMonth(), day);
  });
}

function openModal(id) {
  const ev = EVENTOS.find(item => item.id === Number(id));
  const overlay = document.querySelector('[data-modal-overlay]');
  if (!ev || !overlay) return;

  overlay.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div class="modal-hero">
        <img src="${ev.img}" alt="${ev.nome}">
        <button class="modal-close" type="button" data-close-modal aria-label="Fechar">x</button>
        <div class="modal-heading">
          <span class="badge">${ev.categoria} · ${ev.tipo}</span>
          <h2 id="modal-title">${ev.nome}</h2>
        </div>
      </div>
      <div class="modal-body">
        <div>
          <div class="modal-accessibility">
            ${AccessibilityTag(ev.accessibility)}
            <p>${getAccessibilityMeta(ev.accessibility).description}</p>
          </div>
          <p class="modal-desc">${ev.descCompleta}</p>
         ${ev.parceiro ? `
<div class="partner-box">
  <span class="partner-badge">
    ⭐ Parceiro Oficial
  </span>

  <img src="${ev.parceiro.imagem}" alt="${ev.parceiro.nome}">

  <h3>${ev.parceiro.nome}</h3>

  <p>${ev.parceiro.descricao}</p>

  <div class="partner-info">
    <p>📍 ${ev.parceiro.distancia}</p>
    <p>🕒 ${ev.parceiro.horario}</p>
  </div>

  <div class="partner-actions">
    <a href="${ev.parceiro.whatsapp}" target="_blank">
      WhatsApp
    </a>

    <a href="${ev.parceiro.instagram}" target="_blank">
      Instagram
    </a>
      <a href="${ev.parceiro.cardapio}" target="_blank">
    Cardápio
      </a>
  </div>
</div>
` : ''}
          <div class="modal-box">
            <h3>Curiosidades</h3>
            <ul>${ev.curiosidades.map(item => `<li>${item}</li>`).join('')}</ul>
          </div>
          <div class="modal-box">
            <h3>Dicas locais</h3>
            <ul>${ev.dicas.map(item => `<li><strong>${item.titulo}:</strong> ${item.texto}</li>`).join('')}</ul>
          </div>
        </div>
        <aside class="modal-side">
          <div class="info-pill"><strong>Data</strong>${ev.data}</div>
          <div class="info-pill"><strong>Horário</strong>${ev.horario}</div>
          <div class="info-pill"><strong>Local</strong>${ev.local}</div>
          <div class="info-pill"><strong>Acessibilidade</strong>${getAccessibilityLabel(ev.accessibility)}</div>
          <div class="info-pill"><strong>Turismo</strong>${ev.turismo}</div>
          ${ev.observação ? `<div class="info-pill"><strong>Observação</strong>${ev.observação}</div>` : ''}
          ${ev.coordenadas ? `<a class="btn btn-primary" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps?q=${ev.coordenadas.lat},${ev.coordenadas.lng}">Abrir mapa</a>` : ''}
        </aside>
      </div>
    </div>
  `;
  overlay.classList.add('open');
  document.body.classList.add('modal-open');
}

function closeModal() {
  const overlay = document.querySelector('[data-modal-overlay]');
  overlay?.classList.remove('open');
  document.body.classList.remove('modal-open');
}

function setupModal() {
  document.addEventListener('click', e => {
    const openButton = e.target.closest('[data-open-event]');
    if (openButton) openModal(openButton.dataset.openEvent);

    if (e.target.matches('[data-close-modal]') || e.target.matches('[data-modal-overlay]')) {
      closeModal();
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
}

function setupNavigation() {
  const header = document.querySelector('[data-header]');
  const menu = document.querySelector('[data-mobile-menu]');
  const open = document.querySelector('[data-open-menu]');
  const close = document.querySelector('[data-close-menu]');

  const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 40);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  open?.addEventListener('click', () => {
    menu?.classList.add('open');
    document.body.classList.add('menu-open');
  });

  close?.addEventListener('click', () => {
    menu?.classList.remove('open');
    document.body.classList.remove('menu-open');
  });

  menu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      document.body.classList.remove('menu-open');
    });
  });
}

let observer;
function refreshObserver() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
    return;
  }

  if (!observer) {
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .12 });
  }

  document.querySelectorAll('.fade-in:not(.visible)').forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  renderFilterOptions();
  setupNavigation();
  setupFilters();
  setupCalendar();
  setupModal();
  renderEvents();
  renderCalendar();
  resetCalendarPreview();
  refreshObserver();
});

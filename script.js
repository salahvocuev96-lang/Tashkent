'use strict';

/* =========================================================
   ДАННЫЕ МЕНЮ — меняйте здесь, логику ниже трогать не нужно.

   price       — цена в рублях числом (например 450) или null,
                 пока цена неизвестна. Тогда на сайте будет
                 «Цена уточняется».
   photo       — путь к фото ('images/plov.jpg') или ''.
                 Без фото показывается узорная тарелка с буквой.
   description — короткое описание/состав. Заполняйте, только
                 если он точно известен. Пусто — строка не выводится.
   featured    — true: крупная карточка на широком экране.
   ========================================================= */

const CATEGORIES = [
  { id: 'shawarma',    title: 'Шаурма' },
  { id: 'doner',       title: 'Донер' },
  { id: 'baking',      title: 'Выпечка' },
  { id: 'drinks',      title: 'Напитки' },
];

const SHAWARMA_MENU_PHOTO   = 'https://raw.githubusercontent.com/salahvocuev96-lang/Tashkent/main/images/shawarma-menu.jpg';
const SHAWARMA_CHEESE_PHOTO = 'https://raw.githubusercontent.com/salahvocuev96-lang/Tashkent/main/images/shawarma-cheese.jpg';
const SHAWARMA_BBQ_PHOTO      = 'https://raw.githubusercontent.com/salahvocuev96-lang/Tashkent/main/images/shawarma-bbq.jpg';
const SHAWARMA_TERIYAKI_PHOTO = 'https://raw.githubusercontent.com/salahvocuev96-lang/Tashkent/main/images/shawarma-teriyaki.jpg';
const SHAWARMA_CAESAR_PHOTO   = 'https://raw.githubusercontent.com/salahvocuev96-lang/Tashkent/main/images/shawarma-caesar.jpg';
const SHAWARMA_MIX_PHOTO      = 'https://raw.githubusercontent.com/salahvocuev96-lang/Tashkent/main/images/shawarma-mix.jpg';
const SHAWARMA_BEEF_PHOTO     = 'https://raw.githubusercontent.com/salahvocuev96-lang/Tashkent/main/images/shawarma-beef.jpg';
const DONER_CHICKEN_PHOTO     = 'https://raw.githubusercontent.com/salahvocuev96-lang/Tashkent/main/images/doner-chicken.jpg';
const DONER_BEEF_PHOTO        = 'https://raw.githubusercontent.com/salahvocuev96-lang/Tashkent/main/images/doner-beef.jpg';

const MENU = [
  // Шаурма
  { id: 'shawarma',          name: 'Шаурма классическая', category: 'shawarma', price: 270, description: 'Сочная курица, свежие овощи и нежный фирменный соус, завернутые в тонкий лаваш и обжаренные до золотистой корочки. Классический вкус, который всегда к месту!', photo: SHAWARMA_MENU_PHOTO, featured: true },
  { id: 'shawarma-cheese',   name: 'Шаурма чиз',          category: 'shawarma', price: 320, description: 'Сочная курица, расплавленный сыр, свежие овощи и нежный фирменный соус в хрустящем лаваше. Любимое сочетание ингредиентов с насыщенным сырным вкусом!', photo: SHAWARMA_CHEESE_PHOTO, featured: true },
  { id: 'shawarma-bbq',      name: 'Шаурма барбекю',      category: 'shawarma', price: 320, description: 'Сочная курица, свежие овощи и фирменный соус барбекю с приятными копчёными нотками. Всё завернуто в тонкий лаваш и обжарено до золотистой корочки.', photo: SHAWARMA_BBQ_PHOTO, featured: true },
  { id: 'shawarma-teriyaki', name: 'Шаурма терияки',      category: 'shawarma', price: 310, description: 'Сочная курица, свежие овощи и ароматный соус терияки с приятным сладко-солёным вкусом. Всё в тонком лаваше, обжаренном до золотистой корочки.', photo: SHAWARMA_TERIYAKI_PHOTO, featured: true },
  { id: 'shawarma-caesar',   name: 'Шаурма цезарь',       category: 'shawarma', price: 320, description: 'Сочная курица, свежие овощи, хрустящие листья салата и нежный соус «Цезарь». Знакомое сочетание любимых ингредиентов в хрустящем лаваше.', photo: SHAWARMA_CAESAR_PHOTO, featured: true },
  { id: 'shawarma-mix',      name: 'Шаурма микс',         category: 'shawarma', price: 370, description: 'Сочная курица, свежие овощи и сочетание фирменных соусов, создающее насыщенный и яркий вкус. Всё завернуто в тонкий лаваш и обжарено до золотистой корочки.', photo: SHAWARMA_MIX_PHOTO, featured: true },
  { id: 'shawarma-beef',     name: 'Шаурма с говядиной',  category: 'shawarma', price: 420, description: 'Сочная говядина, свежие овощи и нежный фирменный соус в тонком лаваше, обжаренном до золотистой корочки. Насыщенный мясной вкус в каждом кусочке!', photo: SHAWARMA_BEEF_PHOTO, featured: true },
  { id: 'lyulya-beef',      name: 'Люля-кебаб говядина', category: 'shawarma', price: 450, description: '', photo: 'https://raw.githubusercontent.com/salahvocuev96-lang/Tashkent/main/images/lyulya-beef.jpg', featured: true },
  { id: 'lyulya-lamb',      name: 'Люля-кебаб баранина', category: 'shawarma', price: 470, description: '', photo: 'https://raw.githubusercontent.com/salahvocuev96-lang/Tashkent/main/images/lyulya-beef.jpg', featured: true },
  // Донер
  // Выпечка
  { id: 'lepeshka-big',     name: 'Лепёшка большая',       category: 'baking', price: 120, description: '', photo: '', featured: true },
  { id: 'lepeshka-small',   name: 'Лепёшка маленькая',     category: 'baking', price: 50,  description: '', photo: '', featured: true },
  { id: 'fatir',            name: 'Фатир',                  category: 'baking', price: 110, description: '', photo: '', featured: true },
  { id: 'cheburek-beef',    name: 'Чебурек с говядиной',   category: 'baking', price: 110, description: '', photo: '', featured: true },
  { id: 'cheburek-cheese',  name: 'Чебурек с сыром',       category: 'baking', price: 100, description: '', photo: '', featured: true },
  { id: 'belyash-beef',     name: 'Беляш с говядиной',     category: 'baking', price: 110, description: '', photo: '', featured: true },
  { id: 'pirozhok-potato',  name: 'Пирожки с картошкой',   category: 'baking', price: 70,  description: '', photo: '', featured: true },
  { id: 'pirozhok-beef',    name: 'Пирожки с говядиной',   category: 'baking', price: 90,  description: '', photo: '', featured: true },
  { id: 'pirozhok-cabbage', name: 'Пирожки с капустой',    category: 'baking', price: 60,  description: '', photo: '', featured: true },
  { id: 'sosiska',          name: 'Сосиска в тесте',       category: 'baking', price: 100, description: '', photo: '', featured: true },
  { id: 'samsa-beef',       name: 'Самса с говядиной',     category: 'baking', price: 110, description: '', photo: '', featured: true },
  { id: 'samsa-lamb',       name: 'Самса с бараниной',     category: 'baking', price: 120, description: '', photo: '', featured: true },
  // Донер
  // Напитки
  { id: 'rich-apple',          name: 'Рич яблочный',          category: 'drinks', price: 200, description: '', photo: 'https://raw.githubusercontent.com/salahvocuev96-lang/Tashkent/main/images/rich-apple.jpg', featured: true },
  { id: 'rich-cola',           name: 'Рич кола',              category: 'drinks', price: 200, description: '', photo: 'https://raw.githubusercontent.com/salahvocuev96-lang/Tashkent/main/images/rich-cola.jpg', featured: true },
  { id: 'coca-cola-1l',        name: 'Кока-Кола',             category: 'drinks', price: 200, description: '', photo: 'https://raw.githubusercontent.com/salahvocuev96-lang/Tashkent/main/images/coca-cola.jpg', featured: true },
  { id: 'natakhtari-dyushes',  name: 'Натахтари Дюшес',       category: 'drinks', price: 180, description: '', photo: 'https://raw.githubusercontent.com/salahvocuev96-lang/Tashkent/main/images/natakhtari-dyushes.jpg', featured: true },
  { id: 'natakhtari-cream',    name: 'Натахтари Крем-сода',   category: 'drinks', price: 180, description: '', photo: 'https://raw.githubusercontent.com/salahvocuev96-lang/Tashkent/main/images/natakhtari-cream.jpg', featured: true },
  { id: 'natakhtari-feijoa',   name: 'Натахтари Фейхоа',      category: 'drinks', price: 180, description: '', photo: 'https://raw.githubusercontent.com/salahvocuev96-lang/Tashkent/main/images/natakhtari-feijoa.jpg', featured: true },
  { id: 'natakhtari-tarhun',   name: 'Натахтари Тархун',      category: 'drinks', price: 180, description: '', photo: 'https://raw.githubusercontent.com/salahvocuev96-lang/Tashkent/main/images/natakhtari-tarhun.jpg', featured: true },
  { id: 'sultan-lemon',        name: 'Султан чай Лимон',      category: 'drinks', price: 150, description: '', photo: 'https://raw.githubusercontent.com/salahvocuev96-lang/Tashkent/main/images/sultan-lemon.jpg', featured: true },
  { id: 'sultan-peach',        name: 'Султан чай Персик',     category: 'drinks', price: 150, description: '', photo: 'https://raw.githubusercontent.com/salahvocuev96-lang/Tashkent/main/images/sultan-peach.jpg', featured: true },
  { id: 'svgran-dyushes',      name: 'Святая Грань Дюшес',    category: 'drinks', price: 120, description: '', photo: 'https://raw.githubusercontent.com/salahvocuev96-lang/Tashkent/main/images/svgran-dyushes.jpg', featured: true },
  { id: 'svgran-tarhun',       name: 'Святая Грань Тархун',   category: 'drinks', price: 120, description: '', photo: 'https://raw.githubusercontent.com/salahvocuev96-lang/Tashkent/main/images/svgran-tarhun.jpg', featured: true },
  { id: 'flavis',              name: 'Флавис',                category: 'drinks', price: 120, description: '', photo: 'https://raw.githubusercontent.com/salahvocuev96-lang/Tashkent/main/images/flavis.jpg', featured: true },
  { id: 'fanta-05',            name: 'Фанта',                 category: 'drinks', price: 120, description: '', photo: 'https://raw.githubusercontent.com/salahvocuev96-lang/Tashkent/main/images/fanta.jpg', featured: true },
  { id: 'coca-cola-05',        name: 'Кока-Кола',             category: 'drinks', price: 120, description: '', photo: 'https://raw.githubusercontent.com/salahvocuev96-lang/Tashkent/main/images/coca-cola-05.jpg', featured: true },
  { id: 'fanta-033',           name: 'Фанта',                 category: 'drinks', price: 120, description: '', photo: 'https://raw.githubusercontent.com/salahvocuev96-lang/Tashkent/main/images/fanta.jpg', featured: true },
  { id: 'coca-cola-033',       name: 'Кока-Кола',             category: 'drinks', price: 120, description: '', photo: 'https://raw.githubusercontent.com/salahvocuev96-lang/Tashkent/main/images/coca-cola.jpg', featured: true },
  { id: 'ayran',               name: 'Айран',                 category: 'drinks', price: 120, description: '', photo: '', featured: true },
  { id: 'mors',                name: 'Морс',                  category: 'drinks', price: 120, description: '', photo: '', featured: true },
  { id: 'royal-granat',        name: 'Роял гранатовый',       category: 'drinks', price: 100, description: '', photo: '', featured: true },
  { id: 'drive',               name: 'Драйв',                 category: 'drinks', price: 120, description: '', photo: '', featured: true },
  { id: 'gorilla',             name: 'Горилла',               category: 'drinks', price: 120, description: '', photo: '', featured: true },
  { id: 'adrenalin-449',       name: 'Адреналин',             category: 'drinks', price: 160, description: '', photo: '', featured: true },
  { id: 'adrenalin-zero',      name: 'Адреналин Зеро',        category: 'drinks', price: 160, description: '', photo: '', featured: true },
  { id: 'adrenalin-100',       name: 'Адреналин',             category: 'drinks', price: 120, description: '', photo: '', featured: true },
  { id: 'redbull-473',         name: 'Ред Булл',              category: 'drinks', price: 300, description: '', photo: '', featured: true },
  { id: 'redbull-100',         name: 'Ред Булл',              category: 'drinks', price: 160, description: '', photo: '', featured: true },
  { id: 'monster',             name: 'Монстер',               category: 'drinks', price: 250, description: '', photo: '', featured: true },
  // Донер
  { id: 'doner-chicken',    name: 'Донер с курицей',     category: 'doner',  price: 300, description: 'Нежная сочная курица, свежие овощи и фирменный соус, собранные в мягкой ароматной лепёшке. Сытный донер с насыщенным вкусом и аппетитной начинкой.', photo: DONER_CHICKEN_PHOTO, featured: true },
  { id: 'doner-beef',       name: 'Донер с говядиной',   category: 'doner',  price: 430, description: 'Сочная говядина, свежие овощи и фирменный соус в мягкой ароматной лепёшке. Насыщенный мясной вкус и щедрая начинка в каждом кусочке.', photo: DONER_BEEF_PHOTO,    featured: true },
];

const EXTRAS = [
  { id: 'extra-beef',    name: 'Мясо говядина',  weight: 100, price: 160 },
  { id: 'extra-chicken', name: 'Мясо курица',    weight: 100, price: 130 },
  { id: 'extra-cheese',  name: 'Сыр',            weight: 70,  price: 120 },
  { id: 'extra-fries',   name: 'Картошка фри',   weight: 70,  price: 50  },
  { id: 'extra-sauce',   name: 'Соус на выбор',  weight: 30,  price: 50  },
  { id: 'extra-jalapeno',name: 'Халапеньо',      weight: 30,  price: 30  },
];

const ADDRESS = 'Москва, улица Зорге, 2';

/* =========================================================
   ЛОГИКА САЙТА
   ========================================================= */

const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
const reducedMotion = () => motionQuery.matches;

const catById  = Object.fromEntries(CATEGORIES.map(c => [c.id, c]));
const itemById = Object.fromEntries(MENU.map(i => [i.id, i]));

const state = { category: CATEGORIES[0].id, query: '' };
// cart: Map<lineKey, {itemId, extraIds, qty}>
// lineKey = itemId  (без добавок)  или  itemId + '|' + sorted extraIds
const cart = new Map();

function makeLineKey(itemId, extraIds) {
  if (!extraIds || !extraIds.length) return itemId;
  return itemId + '|' + [...extraIds].sort().join(',');
}
function lineFromKey(lineKey) {
  const [itemId, extrasStr] = lineKey.split('|');
  return { itemId, extraIds: extrasStr ? extrasStr.split(',') : [] };
}
function lineUnitPrice(itemId, extraIds) {
  const item = itemById[itemId];
  if (!hasPrice(item)) return null;
  const extrasSum = (extraIds || []).reduce((s, eid) => {
    const ex = EXTRAS.find(e => e.id === eid);
    return s + (ex ? ex.price : 0);
  }, 0);
  return item.price + extrasSum;
}
function lineDisplayName(itemId, extraIds) {
  const item = itemById[itemId];
  if (!extraIds || !extraIds.length) return item.name;
  const names = extraIds.map(eid => EXTRAS.find(e => e.id === eid)?.name || eid);
  return item.name + ' + ' + names.join(', ');
}

const DISH_FORMS    = ['блюдо', 'блюда', 'блюд'];
const PORTION_FORMS = ['порция', 'порции', 'порций'];

/* ---------- Утилиты ---------- */
function esc(value) {
  return String(value).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
}
function norm(text) {
  return text.toLowerCase().replace(/ё/g, 'е').replace(/\s+/g, ' ').trim();
}
function plural(n, forms) {
  const n10 = n % 10, n100 = n % 100;
  if (n10 === 1 && n100 !== 11) return forms[0];
  if (n10 >= 2 && n10 <= 4 && (n100 < 12 || n100 > 14)) return forms[1];
  return forms[2];
}
function formatPrice(value) {
  return new Intl.NumberFormat('ru-RU').format(value) + '\u00A0₽';
}
function hasPrice(item) {
  return typeof item.price === 'number' && Number.isFinite(item.price);
}
function priceText(item) {
  return hasPrice(item) ? formatPrice(item.price) : 'Цена уточняется';
}
function icon(name) {
  return `<svg class="icon" aria-hidden="true" focusable="false"><use href="#i-${name}"/></svg>`;
}

/* ---------- Узорный борт тарелки ---------- */
function rimMarkup() {
  let petals = '';
  let dots = '';
  for (let i = 0; i < 16; i++) {
    const angle = i * 22.5;
    petals += `<path class="rim-petal" style="--i:${i}" transform="rotate(${angle} 100 100)" d="M100 5.5c4.2 4 4.6 9.6 0 14.5c-4.6-4.9-4.2-10.5 0-14.5z"/>`;
    dots += `<circle class="rim-dot" style="--i:${i}" transform="rotate(${angle + 11.25} 100 100)" cx="100" cy="12.5" r="2.1"/>`;
  }
  return `<svg class="plate-rim" viewBox="0 0 200 200" aria-hidden="true" focusable="false">
    <circle class="rim-line" cx="100" cy="100" r="97"/>
    <circle class="rim-line" cx="100" cy="100" r="80"/>
    ${petals}${dots}
  </svg>`;
}

function plateMarkup(item, extraClass = '') {
  const img = item.photo
    ? `<img src="${esc(item.photo)}" alt="${esc(item.name)}" loading="lazy" decoding="async">`
    : '';
  return `<div class="plate ${extraClass}" data-tone="${item.category}">
      <div class="plate-food">${img}</div>
      ${rimMarkup()}
    </div>`;
}

/* ---------- Карточки меню ---------- */
function controlMarkup(lineKey, qty, label) {
  const name = esc(label || '');
  if (qty <= 0) {
    return `<button class="add-btn" type="button" data-action="add" aria-label="Добавить «${name}» в корзину">${icon('plus')}<span>В корзину</span></button>`;
  }
  return `<div class="stepper" role="group" aria-label="Количество: ${name}">
      <button type="button" data-action="dec" aria-label="Убрать одну порцию">${icon('minus')}</button>
      <output aria-live="polite">${qty}</output>
      <button type="button" data-action="inc" aria-label="Добавить ещё одну порцию">${icon('plus')}</button>
    </div>`;
}

function cardMarkup(item) {
  const lineKey = item.id; // карточки всегда используют базовую линию (без добавок)
  const qty = cart.get(lineKey)?.qty || 0;
  return `<article class="dish${item.featured ? ' dish--featured' : ''}" data-id="${esc(item.id)}" data-tone="${item.category}">
      ${plateMarkup(item, 'dish-plate')}
      <div class="dish-body">
        <div>
          <h4 class="dish-name">${esc(item.name)}</h4>
        </div>
        <div class="dish-foot">
          <span class="price${hasPrice(item) ? '' : ' price--tbd'}">${priceText(item)}</span>
          <div class="dish-control">${controlMarkup(lineKey, qty, item.name)}</div>
        </div>
      </div>
    </article>`;
}

/* ---------- Меню: категории, поиск, вывод ---------- */
const menuList   = $('#menu-list');
const menuEmpty  = $('#menu-empty');
const menuStatus = $('#menu-status');
const tabsEl     = $('#menu-tabs');
const searchEl   = $('#menu-search');
const searchClr  = $('#search-clear');
const emptyBtn   = $('#menu-empty-btn');

function filterItems(categoryId) {
  const q = norm(state.query);
  return MENU.filter(item =>
    (categoryId === 'all' || item.category === categoryId) &&
    (!q || norm(item.name).includes(q))
  );
}

function renderTabs() {
  const tabs = [
    ...CATEGORIES.map(c => ({ id: c.id, title: c.title, count: MENU.filter(i => i.category === c.id).length })),
  ];
  tabsEl.innerHTML = tabs.map(t =>
    `<button class="tab" type="button" data-category="${t.id}" aria-pressed="${t.id === state.category}">${esc(t.title)}<span class="tab-count">${t.count}</span></button>`
  ).join('');
}

function renderMenu({ animate = false } = {}) {
  const items = filterItems(state.category);
  let html = '';

  if (items.length) {
    html = `<div class="dish-grid">${items.map(cardMarkup).join('')}</div>`;
  }

  menuList.innerHTML = html;

  if (items.length) {
    menuEmpty.hidden = true;
    menuStatus.textContent = state.query.trim()
      ? `Найдено: ${items.length} ${plural(items.length, DISH_FORMS)}`
      : '';
  } else {
    showEmpty();
  }

  if (animate && !reducedMotion()) {
    menuList.animate(
      [{ opacity: 0, transform: 'translateY(10px)' }, { opacity: 1, transform: 'none' }],
      { duration: 320, easing: 'cubic-bezier(.22,.8,.24,1)' }
    );
  }
}

function showEmpty() {
  const query = state.query.trim();
  const elsewhere = state.category !== 'all' ? filterItems('all').length : 0;

  $('#menu-empty-title').textContent = query
    ? `По запросу «${query}» ничего не нашлось`
    : 'В этом разделе пока нет блюд';

  if (elsewhere) {
    $('#menu-empty-text').textContent =
      `В разделе «${catById[state.category].title}» такого нет, но в других разделах есть ${elsewhere} ${plural(elsewhere, DISH_FORMS)}.`;
    emptyBtn.textContent = 'Искать во всём меню';
    emptyBtn.dataset.mode = 'all';
  } else {
    $('#menu-empty-text').textContent = 'Проверьте, нет ли опечатки, или посмотрите всё меню.';
    emptyBtn.textContent = 'Показать всё меню';
    emptyBtn.dataset.mode = 'reset';
  }
  menuEmpty.hidden = false;
  menuStatus.textContent = 'Ничего не найдено';
}

function setCategory(id) {
  state.category = id;
  $$('.tab', tabsEl).forEach(tab => tab.setAttribute('aria-pressed', String(tab.dataset.category === id)));
  const active = $(`.tab[data-category="${id}"]`, tabsEl);
  if (active) tabsEl.scrollTo({ left: active.offsetLeft - 20, behavior: reducedMotion() ? 'auto' : 'smooth' });
  renderMenu({ animate: true });
  scrollToMenuTop();
}

// Если пользователь уже далеко внизу меню — поднимаем к началу списка
function scrollToMenuTop() {
  const controls = $('#menu-controls');
  const offset = controls.getBoundingClientRect().bottom + 8;
  const listTop = menuList.getBoundingClientRect().top;
  if (listTop < offset) {
    window.scrollTo({ top: window.scrollY + listTop - offset, behavior: reducedMotion() ? 'auto' : 'smooth' });
  }
}

tabsEl.addEventListener('click', e => {
  const tab = e.target.closest('.tab');
  if (tab && tab.dataset.category !== state.category) setCategory(tab.dataset.category);
});

let searchTimer;
searchEl.addEventListener('input', () => {
  searchClr.hidden = !searchEl.value;
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    state.query = searchEl.value;
    renderMenu();
  }, 140);
});
searchEl.addEventListener('keydown', e => {
  if (e.key === 'Enter') searchEl.blur(); // прячет клавиатуру на телефоне
  if (e.key === 'Escape' && searchEl.value) { e.stopPropagation(); clearSearch(); }
});
function clearSearch() {
  clearTimeout(searchTimer);
  searchEl.value = '';
  state.query = '';
  searchClr.hidden = true;
  renderMenu({ animate: true });
}
searchClr.addEventListener('click', () => { clearSearch(); searchEl.focus(); });

emptyBtn.addEventListener('click', () => {
  if (emptyBtn.dataset.mode === 'all') {
    setCategory('all');
  } else {
    searchEl.value = '';
    state.query = '';
    searchClr.hidden = true;
    setCategory('all');
  }
});

/* ---------- Действия в карточках ---------- */
menuList.addEventListener('click', e => {
  const btn = e.target.closest('[data-action]');
  if (btn) {
    const card = btn.closest('.dish');
    const id = card.dataset.id;
    const lineKey = id; // карточки — базовая линия
    const qty = cart.get(lineKey)?.qty || 0;

    switch (btn.dataset.action) {
      case 'add':
        setQty(lineKey, 1, 'inc');
        flyToCart($('.dish-plate', card));
        showToast(`«${itemById[id].name}» в корзине`);
        break;
      case 'inc':
        setQty(lineKey, qty + 1, 'inc');
        bumpCart();
        break;
      case 'dec':
        setQty(lineKey, qty - 1, qty - 1 > 0 ? 'dec' : 'add');
        break;
    }
    return;
  }
  const card = e.target.closest('.dish');
  if (card) openDishModal(card.dataset.id);
});

function setQty(lineKey, qty, focusAction) {
  if (qty > 0) {
    const existing = cart.get(lineKey);
    if (existing) {
      cart.set(lineKey, { ...existing, qty: Math.min(qty, 99) });
    } else {
      const { itemId, extraIds } = lineFromKey(lineKey);
      cart.set(lineKey, { itemId, extraIds, qty: Math.min(qty, 99) });
    }
  } else {
    cart.delete(lineKey);
  }
  const { itemId } = lineFromKey(lineKey);
  updateCardControl(itemId, focusAction);
  updateModalControl(); // обновляет кнопку в модалке для текущего lineKey
  renderCart();
  updateCount();
}

function updateCardControl(itemId, focusAction) {
  const lineKey = itemId; // карточки — базовая линия (без добавок)
  const card = menuList.querySelector(`.dish[data-id="${CSS.escape(itemId)}"]`);
  if (!card) return;
  const ctrl = $('.dish-control', card);
  const item = itemById[itemId];
  const qty = cart.get(lineKey)?.qty || 0;
  const output = $('output', ctrl);

  if (output && qty > 0) { output.textContent = qty; return; }

  const hadFocus = ctrl.contains(document.activeElement);
  ctrl.innerHTML = controlMarkup(lineKey, qty, item.name);
  ctrl.classList.remove('is-changed');
  void ctrl.offsetWidth;
  ctrl.classList.add('is-changed');
  if (hadFocus && focusAction) $(`[data-action="${focusAction}"]`, ctrl)?.focus();
}

function refreshAllCardControls() {
  $$('.dish', menuList).forEach(card => {
    const item = itemById[card.dataset.id];
    const lineKey = item.id;
    const qty = cart.get(lineKey)?.qty || 0;
    $('.dish-control', card).innerHTML = controlMarkup(lineKey, qty, item.name);
  });
}

/* ---------- Модалка блюда ---------- */
const dishModal        = $('#dish-modal');
const dishModalBackdrop = $('#dish-modal-backdrop');
const dishModalPhoto   = $('#dish-modal-photo');
const dishModalCat     = $('#dish-modal-cat');
const dishModalName    = $('#dish-modal-name');
const dishModalDesc    = $('#dish-modal-desc');
const dishModalPrice   = $('#dish-modal-price');
const dishModalControl = $('#dish-modal-control');
const dishModalExtras  = $('#dish-modal-extras');
let modalItemId = null;
let modalLastFocus = null;
let modalSelectedExtras = new Set();

function openDishModal(id) {
  const item = itemById[id];
  if (!item) return;
  modalItemId = id;
  modalLastFocus = document.activeElement;

  dishModalCat.textContent = catById[item.category]?.title || '';
  dishModalName.textContent = item.name;
  if (item.description) {
    dishModalDesc.textContent = item.description;
    dishModalDesc.hidden = false;
  } else {
    dishModalDesc.hidden = true;
  }

  modalSelectedExtras = new Set();
  updateModalPrice(item);

  // Добавки — для шаурмы и донера
  if ((item.category === 'shawarma' || item.category === 'doner') && hasPrice(item)) {
    dishModalExtras.innerHTML = '<p class="extras-title">Добавки</p>' +
      EXTRAS.map(ex => `<label class="extra-row">
        <input type="checkbox" class="extra-check" data-extra-id="${ex.id}" data-extra-price="${ex.price}">
        <span class="extra-name">${esc(ex.name)} <span class="extra-weight">${ex.weight} г</span></span>
        <span class="extra-price">+${formatPrice(ex.price)}</span>
      </label>`).join('');
    dishModalExtras.hidden = false;
  } else {
    dishModalExtras.innerHTML = '';
    dishModalExtras.hidden = true;
  }

  updateModalControl();

  // фото: берём то же, что в карточке — в кэше, покажется мгновенно
  dishModalPhoto.innerHTML = item.photo
    ? `<img src="${esc(item.photo)}" alt="${esc(item.name)}" decoding="async">`
    : '';
  const img = dishModalPhoto.querySelector('img');
  if (img) {
    if (img.complete && img.naturalWidth) img.classList.add('is-loaded');
    else img.addEventListener('load', () => img.classList.add('is-loaded'), { once: true });
  }

  dishModal.hidden = false;
  dishModalBackdrop.hidden = false;
  // перезапуск transition
  void dishModal.offsetWidth;
  dishModal.classList.add('is-open');
  dishModalBackdrop.classList.add('is-open');
  document.documentElement.classList.add('is-locked');
  $('[data-close]', dishModal).focus({ preventScroll: true });
}

function closeDishModal() {
  if (!dishModal.classList.contains('is-open')) return;
  dishModal.classList.remove('is-open');
  dishModalBackdrop.classList.remove('is-open');
  modalItemId = null;
  // скрыть после transition
  setTimeout(() => {
    if (!dishModal.classList.contains('is-open')) {
      dishModal.hidden = true;
      dishModalBackdrop.hidden = true;
    }
  }, 450);
  if (!drawer.classList.contains('is-open')) {
    document.documentElement.classList.remove('is-locked');
  }
  if (modalLastFocus && document.contains(modalLastFocus)) {
    modalLastFocus.focus({ preventScroll: true });
  }
}

function updateModalPrice(item) {
  if (!item) item = itemById[modalItemId];
  if (!item) return;
  if (!hasPrice(item)) {
    dishModalPrice.textContent = 'Цена уточняется';
    dishModalPrice.classList.add('price--tbd');
    return;
  }
  dishModalPrice.classList.remove('price--tbd');
  const extrasSum = [...modalSelectedExtras].reduce((s, eid) => {
    const ex = EXTRAS.find(e => e.id === eid);
    return s + (ex ? ex.price : 0);
  }, 0);
  dishModalPrice.textContent = formatPrice(item.price + extrasSum);
}

function currentModalLineKey() {
  if (!modalItemId) return null;
  return makeLineKey(modalItemId, [...modalSelectedExtras]);
}

function updateModalControl() {
  if (!modalItemId) return;
  const lineKey = currentModalLineKey();
  const qty = cart.get(lineKey)?.qty || 0;
  dishModalControl.innerHTML = controlMarkup(lineKey, qty, lineDisplayName(modalItemId, [...modalSelectedExtras]));
}

dishModalExtras.addEventListener('change', e => {
  const cb = e.target.closest('.extra-check');
  if (!cb) return;
  if (cb.checked) modalSelectedExtras.add(cb.dataset.extraId);
  else modalSelectedExtras.delete(cb.dataset.extraId);
  updateModalPrice();
  updateModalControl();
});

dishModalBackdrop.addEventListener('click', closeDishModal);
dishModal.addEventListener('click', e => {
  if (e.target.closest('[data-close]')) { closeDishModal(); return; }
  const btn = e.target.closest('[data-action]');
  if (!btn || !modalItemId) return;
  const lineKey = currentModalLineKey();
  const qty = cart.get(lineKey)?.qty || 0;
  if (btn.dataset.action === 'add') {
    setQty(lineKey, 1, 'inc');
    bumpCart();
    showToast(`«${itemById[modalItemId].name}» в корзине`);
  } else if (btn.dataset.action === 'inc') {
    setQty(lineKey, qty + 1, 'inc');
    bumpCart();
  } else if (btn.dataset.action === 'dec') {
    setQty(lineKey, qty - 1, qty - 1 > 0 ? 'dec' : 'add');
  }
});

/* ---------- Анимация «в корзину» ---------- */
const cartBtn = $('#cart-btn');

function bumpCart() {
  if (reducedMotion()) return;
  cartBtn.animate(
    [{ transform: 'scale(1)' }, { transform: 'scale(1.12)' }, { transform: 'scale(1)' }],
    { duration: 360, easing: 'ease-out' }
  );
}

function flyToCart(fromEl) {
  if (reducedMotion() || !fromEl || !cartBtn.animate) { bumpCart(); return; }
  const a = fromEl.getBoundingClientRect();
  const b = cartBtn.getBoundingClientRect();
  const size = 44;
  const x0 = a.left + a.width / 2 - size / 2;
  const y0 = a.top + a.height / 2 - size / 2;
  const x1 = b.left + b.width / 2 - size / 2;
  const y1 = b.top + b.height / 2 - size / 2;
  const mx = x0 + (x1 - x0) * 0.45;
  const my = Math.max(8, Math.min(y0, y1) - 90);

  const dot = document.createElement('div');
  dot.className = 'fly-dot';
  document.body.appendChild(dot);

  const anim = dot.animate([
    { transform: `translate(${x0}px, ${y0}px) scale(1.5)`, opacity: 0 },
    { transform: `translate(${x0}px, ${y0}px) scale(1.2)`, opacity: 1, offset: 0.12 },
    { transform: `translate(${mx}px, ${my}px) scale(.9)`, offset: 0.55 },
    { transform: `translate(${x1}px, ${y1}px) scale(.35)`, opacity: 0.85 },
  ], { duration: 720, easing: 'cubic-bezier(.45,0,.25,1)' });

  anim.onfinish = () => { dot.remove(); bumpCart(); };
}

/* ---------- Корзина ---------- */
const drawer      = $('#cart');
const backdrop    = $('#drawer-backdrop');
const cartList    = $('#cart-list');
const cartEmpty   = $('#cart-empty');
const cartFoot    = $('#cart-foot');
const cartCount   = $('#cart-count');
const toCheckout  = $('#to-checkout');
const views       = $$('.drawer-view', drawer);
let lastFocus = null;

function totals() {
  let sum = 0, unknown = 0, count = 0;
  for (const [lineKey, { itemId, extraIds, qty }] of cart) {
    count += qty;
    const p = lineUnitPrice(itemId, extraIds);
    if (p !== null) sum += p * qty;
    else unknown += qty;
  }
  return { sum, unknown, count };
}

function updateCount() {
  const { count } = totals();
  cartCount.textContent = count;
  cartCount.classList.toggle('is-zero', count === 0);
  cartBtn.setAttribute('aria-label', count
    ? `Корзина: ${count} ${plural(count, PORTION_FORMS)}`
    : 'Корзина пуста');
}

function cartItemPriceLine(itemId, extraIds, qty) {
  const p = lineUnitPrice(itemId, extraIds);
  if (p === null) return 'Цена уточняется';
  return qty > 1 ? `${formatPrice(p)} × ${qty} = ${formatPrice(p * qty)}` : formatPrice(p);
}

function cartItemMarkup(lineKey, { itemId, extraIds, qty }) {
  const item = itemById[itemId];
  const name = lineDisplayName(itemId, extraIds);
  const extrasHtml = extraIds.length
    ? `<p class="cart-item-extras">${extraIds.map(eid => EXTRAS.find(e => e.id === eid)?.name || '').join(', ')}</p>`
    : '';
  return `<li class="cart-item" data-line="${esc(lineKey)}">
      ${plateMarkup(item)}
      <div>
        <p class="cart-item-name">${esc(item.name)}</p>
        ${extrasHtml}
        <p class="cart-item-price">${cartItemPriceLine(itemId, extraIds, qty)}</p>
      </div>
      ${controlMarkup(lineKey, qty, name)}
      <button class="icon-btn cart-remove" type="button" data-action="remove" aria-label="Удалить из корзины">${icon('trash')}</button>
    </li>`;
}

function renderCart() {
  const focused = document.activeElement;
  const focusLine = cartList.contains(focused) ? focused.closest('.cart-item')?.dataset.line : null;
  const focusAction = focusLine ? focused.dataset.action : null;

  const entries = [...cart.entries()];
  const lineKeys = new Set(entries.map(([k]) => k));

  // Удалить строки, которых больше нет в корзине
  $$('.cart-item', cartList).forEach(li => {
    if (!lineKeys.has(li.dataset.line)) li.remove();
  });

  // Обновить существующие или добавить новые
  entries.forEach(([lineKey, entry]) => {
    const { itemId, extraIds, qty } = entry;
    let li = cartList.querySelector(`.cart-item[data-line="${CSS.escape(lineKey)}"]`);
    if (!li) {
      const tmpl = document.createElement('template');
      tmpl.innerHTML = cartItemMarkup(lineKey, entry);
      cartList.appendChild(tmpl.content.firstElementChild);
    } else {
      const priceEl = li.querySelector('.cart-item-price');
      if (priceEl) priceEl.textContent = cartItemPriceLine(itemId, extraIds, qty);
      const ctrl = li.querySelector('.dish-control');
      if (ctrl) ctrl.innerHTML = controlMarkup(lineKey, qty, lineDisplayName(itemId, extraIds));
    }
  });

  cartList.hidden = entries.length === 0;
  cartEmpty.hidden = entries.length > 0;
  cartFoot.hidden = entries.length === 0;
  toCheckout.disabled = entries.length === 0;

  const { sum, unknown, count } = totals();
  $('#cart-total').textContent = count && unknown === count ? 'Уточняется' : formatPrice(sum);
  $('#cart-total-note').textContent =
    unknown === count ? 'Сумма появится, когда в меню будут указаны цены.'
    : unknown > 0 ? `Без учёта ${unknown} ${plural(unknown, PORTION_FORMS)} без цены.`
    : '';

  if (focusLine && drawer.classList.contains('is-open')) {
    const target = $(`.cart-item[data-line="${CSS.escape(focusLine)}"] [data-action="${focusAction}"]`, cartList)
      || $(`.cart-item[data-line="${CSS.escape(focusLine)}"] [data-action]`, cartList)
      || $('[data-action="remove"]', cartList)
      || $('[data-view="cart"] [data-close]', drawer);
    target?.focus();
  }
}

cartList.addEventListener('click', e => {
  const btn = e.target.closest('[data-action]');
  if (!btn) return;
  const row = btn.closest('.cart-item');
  const lineKey = row.dataset.line;
  const qty = cart.get(lineKey)?.qty || 0;

  if (btn.dataset.action === 'inc') setQty(lineKey, qty + 1);
  if (btn.dataset.action === 'dec') {
    if (qty - 1 > 0) setQty(lineKey, qty - 1);
    else removeRow(row, lineKey);
  }
  if (btn.dataset.action === 'remove') removeRow(row, lineKey);
});

function removeRow(row, lineKey) {
  if (reducedMotion()) { setQty(lineKey, 0); return; }
  row.classList.add('is-leaving');
  row.addEventListener('animationend', () => setQty(lineKey, 0), { once: true });
}

function showView(name, { back = false, instant = false } = {}) {
  for (const view of views) {
    const active = view.dataset.view === name;
    view.hidden = !active;
    view.classList.remove('is-entering', 'is-entering-back');
    if (active && !instant && !reducedMotion()) {
      void view.offsetWidth;
      view.classList.add(back ? 'is-entering-back' : 'is-entering');
    }
  }
}

function openCart() {
  lastFocus = document.activeElement;
  setNav(false);
  hideToast();
  showView('cart', { instant: true });
  drawer.inert = false;
  drawer.classList.add('is-open');
  backdrop.classList.add('is-open');
  document.documentElement.classList.add('is-locked');
  $('[data-view="cart"] [data-close]', drawer).focus({ preventScroll: true });
}

function closeCart() {
  if (!drawer.classList.contains('is-open')) return;
  drawer.classList.remove('is-open');
  backdrop.classList.remove('is-open');
  drawer.inert = true;
  document.documentElement.classList.remove('is-locked');
  if (lastFocus && document.contains(lastFocus)) lastFocus.focus({ preventScroll: true });
}

cartBtn.addEventListener('click', openCart);
backdrop.addEventListener('click', closeCart);
drawer.addEventListener('click', e => { if (e.target.closest('[data-close]')) closeCart(); });

// Удерживаем фокус внутри открытой корзины
drawer.addEventListener('keydown', e => {
  if (e.key !== 'Tab') return;
  const view = $('.drawer-view:not([hidden])', drawer);
  const focusable = $$('a[href], button:not([disabled]), input, textarea, [tabindex]:not([tabindex="-1"])', view)
    .filter(el => !el.closest('[hidden]') && !(el.type === 'radio' && !el.checked));
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
});

/* ---------- Оформление (демо) ---------- */
const form = $('#checkout-form');
const nameInput = $('#f-name');
const nameError = $('#f-name-error');

function renderSummary() {
  const { count } = totals();
  $('#order-summary-title').textContent = `В заказе ${count} ${plural(count, PORTION_FORMS)}`;
  $('#order-summary-list').innerHTML = [...cart.entries()]
    .map(([lineKey, { itemId, extraIds, qty }]) =>
      `<li><span>${esc(lineDisplayName(itemId, extraIds))}</span><span>× ${qty}</span></li>`)
    .join('');
}

toCheckout.addEventListener('click', () => {
  if (!cart.size) return;
  renderSummary();
  showView('checkout');
  $('#back-to-cart').focus({ preventScroll: true });
});

$('#back-to-cart').addEventListener('click', () => {
  showView('cart', { back: true });
  toCheckout.focus({ preventScroll: true });
});

function validateName() {
  const ok = nameInput.value.trim().length >= 2;
  nameError.hidden = ok;
  nameInput.setAttribute('aria-invalid', String(!ok));
  return ok;
}
nameInput.addEventListener('input', () => { if (!nameError.hidden) validateName(); });

form.addEventListener('submit', e => {
  e.preventDefault(); // демо: ничего никуда не отправляем
  if (!validateName()) { nameInput.focus(); return; }
  showView('done');
  $('#done-title').focus({ preventScroll: true });
});

$('#clear-cart').addEventListener('click', () => {
  cart.clear();
  refreshAllCardControls();
  renderCart();
  updateCount();
  closeCart();
  showToast('Корзина очищена', false);
});

/* ---------- Уведомление ---------- */
const toast = $('#toast');
const toastText = $('#toast-text');
const toastAction = $('#toast-action');
let toastTimer;

function showToast(text, withAction = true) {
  toastText.textContent = text;
  toastAction.hidden = !withAction;
  toast.classList.toggle('no-action', !withAction);
  toast.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(hideToast, 3000);
}
function hideToast() {
  clearTimeout(toastTimer);
  toast.classList.remove('is-visible');
}
toastAction.addEventListener('click', openCart);

/* ---------- Шапка и навигация ---------- */
const header = $('#site-header');
const nav = $('#site-nav');
const navToggle = $('#nav-toggle');

function setNav(open) {
  nav.classList.toggle('is-open', open);
  header.classList.toggle('nav-open', open);
  navToggle.setAttribute('aria-expanded', String(open));
  navToggle.setAttribute('aria-label', open ? 'Закрыть навигацию' : 'Открыть навигацию');
}
navToggle.addEventListener('click', () => setNav(!nav.classList.contains('is-open')));
nav.addEventListener('click', e => { if (e.target.closest('a')) setNav(false); });
document.addEventListener('click', e => {
  if (nav.classList.contains('is-open') && !header.contains(e.target)) setNav(false);
});

document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  if (dishModal.classList.contains('is-open')) closeDishModal();
  else if (drawer.classList.contains('is-open')) closeCart();
  else if (nav.classList.contains('is-open')) { setNav(false); navToggle.focus(); }
});

// Прозрачная шапка над первым экраном, светлая — ниже
const hero = $('.hero');
if ('IntersectionObserver' in window) {
  new IntersectionObserver(([entry]) => {
    header.classList.toggle('is-solid', !entry.isIntersecting);
  }, { rootMargin: '-90px 0px 0px 0px' }).observe(hero);
} else {
  header.classList.add('is-solid');
}

/* ---------- Появление блоков при прокрутке ---------- */
const revealEls = $$('[data-reveal]');
if ('IntersectionObserver' in window && !reducedMotion()) {
  const revealObserver = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    }
  }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
  revealEls.forEach(el => revealObserver.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('is-visible'));
}

/* ---------- Фото: плавное появление и запасной вариант ---------- */
document.addEventListener('load', e => {
  if (e.target.tagName === 'IMG') e.target.classList.add('is-loaded');
}, true);
document.addEventListener('error', e => {
  // фото не загрузилось — убираем его, остаётся узорная тарелка с буквой
  if (e.target.tagName === 'IMG' && e.target.closest('.plate-food')) e.target.remove();
}, true);

/* ---------- Копирование адреса ---------- */
$('#copy-address').addEventListener('click', async () => {
  let ok = false;
  try {
    await navigator.clipboard.writeText(ADDRESS);
    ok = true;
  } catch {
    const ta = document.createElement('textarea');
    ta.value = ADDRESS;
    ta.setAttribute('readonly', '');
    ta.style.cssText = 'position:fixed;opacity:0;top:0;left:0';
    document.body.appendChild(ta);
    ta.select();
    try { ok = document.execCommand('copy'); } catch { ok = false; }
    ta.remove();
  }
  showToast(ok ? 'Адрес скопирован' : `Адрес: ${ADDRESS}`, false);
});

/* ---------- Запуск ---------- */
$$('[data-rim]').forEach(el => el.insertAdjacentHTML('beforeend', rimMarkup()));

// фото первого экрана могло загрузиться (или сломаться) раньше скрипта
$$('.plate-food img').forEach(img => {
  if (img.complete) {
    if (img.naturalWidth) img.classList.add('is-loaded');
    else img.remove();
  }
});

drawer.inert = true;
renderTabs();
renderMenu();
renderCart();
updateCount();

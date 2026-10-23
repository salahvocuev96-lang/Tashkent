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
  { id: 'hot',    title: 'Горячие блюда' },
  { id: 'soups',  title: 'Супы' },
  { id: 'other',  title: 'Другие блюда' },
  { id: 'salads', title: 'Салаты' },
];

const PLOV_PHOTO = 'https://raw.githubusercontent.com/salahvocuev96-lang/Tashkent/main/images/plov-beef-new.jpg';
const DOLMA_PHOTO = 'https://raw.githubusercontent.com/salahvocuev96-lang/Tashkent/main/images/dolma.jpg';
const KAZAN_KEBAB_PHOTO = 'https://raw.githubusercontent.com/salahvocuev96-lang/Tashkent/main/images/kazan-kebab.jpg';
const CHICKEN_SHASHLIK_PHOTO = 'https://raw.githubusercontent.com/salahvocuev96-lang/Tashkent/main/images/chicken-shashlik.jpg';
const KHANUM_PHOTO = 'https://raw.githubusercontent.com/salahvocuev96-lang/Tashkent/main/images/khanum.jpg';
const BIFSHTEKS_PHOTO = 'https://raw.githubusercontent.com/salahvocuev96-lang/Tashkent/main/images/bifshteks.jpg';
const CHINESE_MEAT_PHOTO = 'https://raw.githubusercontent.com/salahvocuev96-lang/Tashkent/main/images/chinese-meat.jpg';
const STUFFED_PEPPER_PHOTO = 'https://raw.githubusercontent.com/salahvocuev96-lang/Tashkent/main/images/stuffed-pepper.jpg';
const CHICKEN_SOUR_CREAM_PHOTO = 'https://raw.githubusercontent.com/salahvocuev96-lang/Tashkent/main/images/chicken-sour-cream.jpg';
const GOULASH_PHOTO = 'https://raw.githubusercontent.com/salahvocuev96-lang/Tashkent/main/images/goulash.jpg';
const STROGANOFF_PHOTO = 'https://raw.githubusercontent.com/salahvocuev96-lang/Tashkent/main/images/stroganoff.jpg';
const LEGS_POTATOES_PHOTO = 'https://raw.githubusercontent.com/salahvocuev96-lang/Tashkent/main/images/legs-potatoes.jpg';
const BEEF_ROAST_PHOTO = 'https://raw.githubusercontent.com/salahvocuev96-lang/Tashkent/main/images/beef-roast.jpg';
const CHICKEN_ROAST_PHOTO = 'https://raw.githubusercontent.com/salahvocuev96-lang/Tashkent/main/images/chicken-roast.jpg';
const MEATBALLS_PHOTO = 'https://raw.githubusercontent.com/salahvocuev96-lang/Tashkent/main/images/meatballs.jpg';

const MENU = [
  // Горячие блюда
  { id: 'plov',               name: 'Плов из говядины',     category: 'hot', price: null, description: '', photo: PLOV_PHOTO, featured: true },
  { id: 'kazan-kebab',        name: 'Казан-кебаб',          category: 'hot', price: null, description: '', photo: KAZAN_KEBAB_PHOTO, featured: true },
  { id: 'chicken-shashlik',   name: 'Куриный шашлык',       category: 'hot', price: null, description: '', photo: CHICKEN_SHASHLIK_PHOTO, featured: true },
  { id: 'khanum',             name: 'Ханум',                category: 'hot', price: null, description: '', photo: KHANUM_PHOTO, featured: true },
  { id: 'beefsteak',          name: 'Бифштекс',             category: 'hot', price: null, description: '', photo: BIFSHTEKS_PHOTO, featured: true },
  { id: 'dolma',              name: 'Долма',                category: 'hot', price: null, description: '', photo: DOLMA_PHOTO, featured: true },
  { id: 'chinese-meat',       name: 'Мясо по-китайски',     category: 'hot', price: null, description: '', photo: CHINESE_MEAT_PHOTO, featured: true },
  { id: 'stuffed-pepper',     name: 'Фарш-перец',          category: 'hot', price: null, description: '', photo: STUFFED_PEPPER_PHOTO, featured: true },
  { id: 'chicken-sour-cream', name: 'Курица в сметане',     category: 'hot', price: null, description: '', photo: CHICKEN_SOUR_CREAM_PHOTO, featured: true },
  { id: 'goulash',            name: 'Гуляш с гарниром',     category: 'hot', price: null, description: '', photo: GOULASH_PHOTO, featured: true },
  { id: 'stroganoff',         name: 'Бефстроганов',         category: 'hot', price: null, description: '', photo: STROGANOFF_PHOTO, featured: true },
  { id: 'legs-potatoes',      name: 'Окорочка с картошкой', category: 'hot', price: null, description: '', photo: LEGS_POTATOES_PHOTO, featured: true },
  { id: 'beef-roast',         name: 'Жаркое из говядины',   category: 'hot', price: null, description: '', photo: BEEF_ROAST_PHOTO, featured: true },
  { id: 'chicken-roast',      name: 'Жаркое из курицы',     category: 'hot', price: null, description: '', photo: CHICKEN_ROAST_PHOTO, featured: true },
  { id: 'meatballs',          name: 'Тефтели',              category: 'hot', price: null, description: '', photo: MEATBALLS_PHOTO, featured: true },
  { id: 'pollock',            name: 'Жареный минтай',       category: 'hot', price: null, description: '', photo: '' },

  // Супы
  { id: 'shurpa', name: 'Шурпа из баранины', category: 'soups', price: null, description: '', photo: '', featured: true },
  { id: 'borsch', name: 'Борщ',              category: 'soups', price: null, description: '', photo: '' },
  { id: 'lagman', name: 'Лагман',            category: 'soups', price: null, description: '', photo: '' },

  // Другие блюда
  { id: 'manty', name: 'Манты', category: 'hot', price: null, description: '', photo: '', featured: true },

  // Салаты
  { id: 'veg-salad',      name: 'Овощной салат',       category: 'salads', price: null, description: '', photo: '' },
  { id: 'carrot-salad',   name: 'Морковный салат',     category: 'salads', price: null, description: '', photo: '' },
  { id: 'olivier',        name: 'Оливье',              category: 'salads', price: null, description: '', photo: '' },
  { id: 'eggplant-salad', name: 'Салат из баклажанов', category: 'salads', price: null, description: '', photo: '' },
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

const state = { category: 'all', query: '' };
const cart = new Map(); // id -> количество

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
      <div class="plate-food"><span class="plate-mono" aria-hidden="true">${esc(item.name.charAt(0))}</span>${img}</div>
      ${rimMarkup()}
    </div>`;
}

/* ---------- Карточки меню ---------- */
function controlMarkup(item, qty) {
  if (qty <= 0) {
    return `<button class="add-btn" type="button" data-action="add" aria-label="Добавить «${esc(item.name)}» в корзину">${icon('plus')}<span>В корзину</span></button>`;
  }
  return `<div class="stepper" role="group" aria-label="Количество: ${esc(item.name)}">
      <button type="button" data-action="dec" aria-label="Убрать одну порцию">${icon('minus')}</button>
      <output aria-live="polite">${qty}</output>
      <button type="button" data-action="inc" aria-label="Добавить ещё одну порцию">${icon('plus')}</button>
    </div>`;
}

function cardMarkup(item) {
  const qty = cart.get(item.id) || 0;
  return `<article class="dish${item.featured ? ' dish--featured' : ''}" data-id="${esc(item.id)}" data-tone="${item.category}">
      ${plateMarkup(item, 'dish-plate')}
      <div class="dish-body">
        <div>
          <h4 class="dish-name">${esc(item.name)}</h4>
          ${item.description ? `<p class="dish-desc">${esc(item.description)}</p>` : ''}
        </div>
        <div class="dish-foot">
          <span class="price${hasPrice(item) ? '' : ' price--tbd'}">${priceText(item)}</span>
          <div class="dish-control">${controlMarkup(item, qty)}</div>
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
    { id: 'all', title: 'Всё меню', count: MENU.length },
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
  if (!btn) return;
  const card = btn.closest('.dish');
  const id = card.dataset.id;
  const qty = cart.get(id) || 0;

  switch (btn.dataset.action) {
    case 'add':
      setQty(id, 1, 'inc');
      flyToCart($('.dish-plate', card));
      showToast(`«${itemById[id].name}» в корзине`);
      break;
    case 'inc':
      setQty(id, qty + 1, 'inc');
      bumpCart();
      break;
    case 'dec':
      setQty(id, qty - 1, qty - 1 > 0 ? 'dec' : 'add');
      break;
  }
});

function setQty(id, qty, focusAction) {
  if (qty > 0) cart.set(id, Math.min(qty, 99));
  else cart.delete(id);
  updateCardControl(id, focusAction);
  renderCart();
  updateCount();
}

function updateCardControl(id, focusAction) {
  const card = menuList.querySelector(`.dish[data-id="${CSS.escape(id)}"]`);
  if (!card) return;
  const ctrl = $('.dish-control', card);
  const qty = cart.get(id) || 0;
  const output = $('output', ctrl);

  // Количество просто изменилось — меняем только цифру
  if (output && qty > 0) {
    output.textContent = qty;
    return;
  }

  const hadFocus = ctrl.contains(document.activeElement);
  ctrl.innerHTML = controlMarkup(itemById[id], qty);
  ctrl.classList.remove('is-changed');
  void ctrl.offsetWidth; // перезапуск анимации
  ctrl.classList.add('is-changed');
  if (hadFocus && focusAction) $(`[data-action="${focusAction}"]`, ctrl)?.focus();
}

function refreshAllCardControls() {
  $$('.dish', menuList).forEach(card => {
    const item = itemById[card.dataset.id];
    $('.dish-control', card).innerHTML = controlMarkup(item, cart.get(item.id) || 0);
  });
}

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
  for (const [id, qty] of cart) {
    const item = itemById[id];
    count += qty;
    if (hasPrice(item)) sum += item.price * qty;
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

function cartItemMarkup(item, qty) {
  const line = hasPrice(item)
    ? (qty > 1 ? `${formatPrice(item.price)} × ${qty} = ${formatPrice(item.price * qty)}` : formatPrice(item.price))
    : 'Цена уточняется';
  return `<li class="cart-item" data-id="${esc(item.id)}">
      ${plateMarkup(item)}
      <div>
        <p class="cart-item-name">${esc(item.name)}</p>
        <p class="cart-item-price">${line}</p>
      </div>
      ${controlMarkup(item, qty)}
      <button class="icon-btn cart-remove" type="button" data-action="remove" aria-label="Удалить «${esc(item.name)}» из корзины">${icon('trash')}</button>
    </li>`;
}

function renderCart() {
  // запоминаем фокус, чтобы не потерять его после перерисовки
  const focused = document.activeElement;
  const focusId = cartList.contains(focused) ? focused.closest('.cart-item')?.dataset.id : null;
  const focusAction = focusId ? focused.dataset.action : null;

  const entries = [...cart.entries()];
  cartList.innerHTML = entries.map(([id, qty]) => cartItemMarkup(itemById[id], qty)).join('');
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

  if (focusId && drawer.classList.contains('is-open')) {
    const target = $(`.cart-item[data-id="${CSS.escape(focusId)}"] [data-action="${focusAction}"]`, cartList)
      || $(`.cart-item[data-id="${CSS.escape(focusId)}"] [data-action]`, cartList)
      || $('[data-action="remove"]', cartList)
      || $('[data-view="cart"] [data-close]', drawer);
    target?.focus();
  }
}

cartList.addEventListener('click', e => {
  const btn = e.target.closest('[data-action]');
  if (!btn) return;
  const row = btn.closest('.cart-item');
  const id = row.dataset.id;
  const qty = cart.get(id) || 0;

  if (btn.dataset.action === 'inc') setQty(id, qty + 1);
  if (btn.dataset.action === 'dec') {
    if (qty - 1 > 0) setQty(id, qty - 1);
    else removeRow(row, id);
  }
  if (btn.dataset.action === 'remove') removeRow(row, id);
});

function removeRow(row, id) {
  if (reducedMotion()) { setQty(id, 0); return; }
  row.classList.add('is-leaving');
  row.addEventListener('animationend', () => setQty(id, 0), { once: true });
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
    .map(([id, qty]) => `<li><span>${esc(itemById[id].name)}</span><span>× ${qty}</span></li>`)
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
  if (drawer.classList.contains('is-open')) closeCart();
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

'use strict';

const CATEGORIES = [
  { id: 'hot',    title: 'Горячие блюда' },
  { id: 'soups',  title: 'Супы' },
  { id: 'other',  title: 'Другие блюда' },
  { id: 'salads', title: 'Салаты' },
];

const PLOV_PHOTO = 'https://commons.wikimedia.org/wiki/Special:FilePath/Uzbek_palov_in_Yerevan_Food_Court.jpg?width=700';

const MENU = [
  { id: 'plov',               name: 'Плов из говядины',     category: 'hot', price: null, featured: true },
  { id: 'kazan-kebab',        name: 'Казан-кебаб',          category: 'hot', price: null, featured: true },
  { id: 'chicken-shashlik',   name: 'Куриный шашлык',       category: 'hot', price: null, featured: true },
  { id: 'khanum',             name: 'Ханум',                category: 'hot', price: null, featured: true },
  { id: 'shurpa',             name: 'Шурпа из баранины',    category: 'soups', price: null, featured: true },
  { id: 'manty',              name: 'Манты',                category: 'other', price: null, featured: true },
  { id: 'beefsteak',          name: 'Бифштекс',             category: 'hot', price: null },
  { id: 'dolma',              name: 'Долма',                category: 'hot', price: null },
  { id: 'borsch',             name: 'Борщ',                 category: 'soups', price: null },
  { id: 'lagman',             name: 'Лагман',               category: 'soups', price: null },
  { id: 'veg-salad',          name: 'Овощной салат',        category: 'salads', price: null },
];

const state = { category: 'all', query: '' };
const cart = new Map();

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function esc(str) {
  return String(str).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
}

function norm(text) {
  return text.toLowerCase().replace(/ё/g, 'е').trim();
}

function hasPrice(item) {
  return typeof item.price === 'number' && Number.isFinite(item.price);
}

function priceText(item) {
  return hasPrice(item) ? item.price + ' ₽' : 'Цена уточняется';
}

function filterItems(catId) {
  const q = norm(state.query);
  return MENU.filter(item =>
    (catId === 'all' || item.category === catId) &&
    (!q || norm(item.name).includes(q))
  );
}

function renderTabs() {
  const tabs = [
    { id: 'all', title: 'Всё меню', count: MENU.length },
    ...CATEGORIES.map(c => ({ id: c.id, title: c.title, count: MENU.filter(i => i.category === c.id).length })),
  ];
  
  $('#menu-tabs').innerHTML = tabs.map(t =>
    `<button class="tab" type="button" data-category="${t.id}" aria-pressed="${t.id === state.category}">${esc(t.title)}</button>`
  ).join('');
}

function renderMenu() {
  const items = filterItems(state.category);
  
  if (!items.length) {
    $('#menu-list').innerHTML = '<p style="text-align:center;padding:40px 20px;">Ничего не найдено</p>';
    return;
  }

  const html = items.map(item => `
    <article class="dish" data-id="${esc(item.id)}">
      <div style="background:var(--saffron);width:96px;height:96px;border-radius:50%;"></div>
      <div>
        <h4 class="dish-name">${esc(item.name)}</h4>
        <div style="display:flex;gap:12px;margin-top:10px;align-items:center;">
          <span class="price${hasPrice(item) ? '' : ' price--tbd'}">${priceText(item)}</span>
          <button class="add-btn" type="button" data-action="add">+ В корзину</button>
        </div>
      </div>
    </article>
  `).join('');

  $('#menu-list').innerHTML = html;
  attachDishHandlers();
}

function attachDishHandlers() {
  $$('[data-id]', $('#menu-list')).forEach(dish => {
    const id = dish.dataset.id;
    dish.querySelector('.add-btn').addEventListener('click', () => {
      cart.set(id, (cart.get(id) || 0) + 1);
      updateCart();
      showToast('Добавлено в корзину');
    });
  });
}

function updateCart() {
  const count = Array.from(cart.values()).reduce((a, b) => a + b, 0);
  $('#cart-count').textContent = count;
  renderCartList();
}

function renderCartList() {
  const list = $('#cart-list');
  if (!cart.size) {
    list.innerHTML = '<div class="cart-empty"><p>Пока пусто</p></div>';
    return;
  }

  list.innerHTML = Array.from(cart.entries()).map(([id, qty]) => {
    const item = MENU.find(i => i.id === id);
    return `
      <li class="cart-item" data-id="${esc(id)}">
        <div style="background:var(--saffron);width:56px;height:56px;border-radius:50%;"></div>
        <div>
          <div class="cart-item-name">${esc(item.name)}</div>
          <div style="color:var(--muted);font-size:.9rem;">${qty} шт</div>
        </div>
      </li>
    `;
  }).join('');
}

function showToast(text) {
  const toast = $('#toast');
  $('#toast-text').textContent = text;
  toast.classList.add('is-visible');
  setTimeout(() => toast.classList.remove('is-visible'), 3000);
}

$('#menu-tabs').addEventListener('click', e => {
  const tab = e.target.closest('.tab');
  if (!tab) return;
  state.category = tab.dataset.category;
  renderTabs();
  renderMenu();
});

$('#menu-search').addEventListener('input', e => {
  state.query = e.target.value;
  renderMenu();
});

$('#cart-btn').addEventListener('click', () => {
  $('#cart').classList.add('is-open');
});

$$('[data-close]').forEach(btn => {
  btn.addEventListener('click', () => {
    $('#cart').classList.remove('is-open');
  });
});

window.addEventListener('scroll', () => {
  $('#site-header').classList.toggle('is-solid', window.scrollY > 20);
});

renderTabs();
renderMenu();
updateCart();

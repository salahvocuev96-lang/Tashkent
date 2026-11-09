import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js';
import { getFirestore, collection, addDoc, getDocs, orderBy, query, serverTimestamp }
  from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyBSU3-gtmH3x_3u87CYM9L95WTrNcuKn8I",
  authDomain: "avtorskaya-shawarma.firebaseapp.com",
  projectId: "avtorskaya-shawarma",
  storageBucket: "avtorskaya-shawarma.firebasestorage.app",
  messagingSenderId: "272158704179",
  appId: "1:272158704179:web:30d3b2829ee541e3919946"
};

const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

/* ---------- звёзды ---------- */
let selectedStars = 0;
const starBtns = document.querySelectorAll('.star-btn');

function paintStars(n) {
  starBtns.forEach(b => b.classList.toggle('active', Number(b.dataset.v) <= n));
}
starBtns.forEach(b => {
  b.addEventListener('click', () => { selectedStars = Number(b.dataset.v); paintStars(selectedStars); });
  b.addEventListener('mouseenter', () => paintStars(Number(b.dataset.v)));
  b.addEventListener('mouseleave', () => paintStars(selectedStars));
});

/* ---------- загрузка отзывов ---------- */
async function loadReviews() {
  const list  = document.getElementById('reviews-list');
  const empty = document.getElementById('reviews-empty');
  try {
    const q    = query(collection(db, 'reviews'), orderBy('createdAt', 'desc'));
    const snap = await getDocs(q);
    if (snap.empty) { empty.hidden = false; return; }
    empty.hidden = true;
    snap.forEach(doc => {
      const d = doc.data();
      list.insertBefore(makeCard(d), list.firstChild);
    });
  } catch(e) { console.error('load reviews', e); }
}

function makeCard({ name, rating, text, createdAt }) {
  const card = document.createElement('article');
  card.className = 'review-card';
  const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating);
  const date  = createdAt?.toDate
    ? createdAt.toDate().toLocaleDateString('ru-RU', { day:'numeric', month:'long', year:'numeric' })
    : '';
  card.innerHTML = `
    <div class="review-card-top">
      <span class="review-card-name">${esc(name)}</span>
      <span class="review-card-stars">${stars}</span>
    </div>
    ${text ? `<p class="review-card-text">${esc(text)}</p>` : ''}
    ${date ? `<time class="review-card-date">${date}</time>` : ''}`;
  return card;
}

function esc(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

/* ---------- отправка ---------- */
const form = document.getElementById('review-form');
const msg  = document.getElementById('review-msg');

form.addEventListener('submit', async e => {
  e.preventDefault();
  const name   = document.getElementById('review-name').value.trim();
  const text   = document.getElementById('review-text').value.trim();
  const rating = selectedStars;

  if (!name) { showMsg('Введите ваше имя', 'error'); return; }
  if (!rating) { showMsg('Поставьте оценку', 'error'); return; }

  const btn = form.querySelector('.review-submit');
  btn.disabled = true;
  btn.textContent = 'Отправка...';

  try {
    await addDoc(collection(db, 'reviews'), { name, text, rating, createdAt: serverTimestamp() });
    const list  = document.getElementById('reviews-list');
    const empty = document.getElementById('reviews-empty');
    empty.hidden = true;
    list.insertBefore(makeCard({ name, text, rating }), list.firstChild);
    form.reset();
    selectedStars = 0;
    paintStars(0);
    showMsg('Спасибо за отзыв!', 'ok');
  } catch(err) {
    console.error(err);
    showMsg('Ошибка. Попробуйте ещё раз.', 'error');
  } finally {
    btn.disabled = false;
    btn.textContent = 'Отправить отзыв';
  }
});

function showMsg(text, type) {
  msg.textContent = text;
  msg.className = 'review-msg review-msg--' + type;
  msg.hidden = false;
  setTimeout(() => { msg.hidden = true; }, 4000);
}

loadReviews();

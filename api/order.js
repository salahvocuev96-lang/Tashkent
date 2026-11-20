module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, phone, comment, items, sum } = req.body || {};
  if (!name || !phone) return res.status(400).json({ error: 'Missing fields' });

  const TG_TOKEN = process.env.TELEGRAM_TOKEN;
  const TG_CHAT  = '-1004440411000';

  if (!TG_TOKEN) return res.status(500).json({ error: 'Token not configured' });

  const text = [
    '🛒 <b>Новый заказ</b>',
    `👤 ${name}`,
    `📞 ${phone}`,
    '',
    items || '',
    '',
    `💰 Итого: ${sum} ₽`,
    comment ? `💬 ${comment}` : '',
  ].filter(Boolean).join('\n');

  try {
    const tgCtrl = new AbortController();
    const tgTimer = setTimeout(() => tgCtrl.abort(), 8000);
    let tgRes;
    try {
      tgRes = await fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: TG_CHAT, text, parse_mode: 'HTML' }),
        signal: tgCtrl.signal,
      });
    } finally {
      clearTimeout(tgTimer);
    }
    const data = await tgRes.json();
    if (!data.ok) return res.status(500).json({ error: data.description });
    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(500).json({ error: err.message, type: err.name });
  }
};

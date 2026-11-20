module.exports = function(req, res) {
  res.json({
    ok: true,
    token_set: !!process.env.TELEGRAM_TOKEN,
    token_preview: process.env.TELEGRAM_TOKEN ? process.env.TELEGRAM_TOKEN.slice(0, 15) + '...' : 'NOT SET'
  });
};

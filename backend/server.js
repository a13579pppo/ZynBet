const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/place-bet', async (req, res) => {
  const { userId, amount, prediction } = req.body;
  const telegramFee = 0.05; // Telegram fee per bet
  await processPayment(amount, telegramFee); // Send to owner's wallet
  res.json({ status: 'Bet placed' });
});

app.listen(3000, () => console.log('Server running'));

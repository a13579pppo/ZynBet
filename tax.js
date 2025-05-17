async function payMonthlyTax(nftId, monthlyTax = 0.25) {
  await processPayment(monthlyTax, 0); // No Telegram fee for monthly tax
  alert('Monthly Tax Paid!');
}

async function payTelegramFee(amount, fee = 0.1) {
  await processPayment(amount, fee); // For NFT purchase or bet
  alert(`Telegram Fee Paid: ${fee} TON`);
}

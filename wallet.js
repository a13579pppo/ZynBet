import { TonConnect } from '@tonconnect/sdk';

const OWNER_WALLET = 'UQBbDbfN09WPh5vbQwuQNwAYi_GLhSo2MXF1-MK8m002Pixc'; // Your wallet
const tonConnect = new TonConnect();

document.getElementById('connect-wallet').addEventListener('click', async () => {
  try {
    const wallet = await tonConnect.connect({ appName: 'ZynBet' });
    displayWalletInfo(wallet);
    getBalance(wallet.address);
  } catch (error) {
    alert('Connection Failed: ' + error.message);
  }
});

function displayWalletInfo(wallet) {
  document.getElementById('wallet-address').innerText = wallet.address.slice(0, 4) + '...' + wallet.address.slice(-4);
}

async function getBalance(address) {
  const response = await fetch(`https://toncenter.com/api/v2/getAddressInformation?address=${address}`);
  const data = await response.json();
  document.getElementById('balance').innerText = `${(data.result.balance / 1e9).toFixed(2)} TON`;
}

async function processPayment(amount, telegramFee = 0.1) {
  const totalAmount = amount + telegramFee; // Add Telegram fee
  try {
    const response = await fetch('https://toncenter.com/api/v2/sendTransaction', {
      method: 'POST',
      body: JSON.stringify({
        from: window.Telegram.WebApp.initDataUnsafe.user.wallet, // User's wallet
        to: OWNER_WALLET, // Your wallet
        amount: totalAmount * 1e9, // Convert to nanoTON
      }),
    });
    if (response.ok) {
      alert(`Payment Successful! Fee: ${telegramFee} TON`);
    } else {
      alert('Payment Failed. Try Again.');
    }
  } catch (error) {
    alert('Error: ' + error.message);
  }
    }

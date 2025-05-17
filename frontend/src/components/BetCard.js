async function setProfileNFT(nftId) {
  const userId = window.Telegram.WebApp.initDataUnsafe.user.id;
  const response = await fetch('/api/set-nft', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, nftId }),
  });
  if (response.ok) {
    alert('NFT Set on Your Profile!');
  }
}

import React from 'react';
import './NFTGallery.css';
import { processPayment } from '../wallet';

const nfts = [
  { id: 1, name: 'Cosmic Dragon #42', price: 0.5, image: 'dragon.png', tags: ['Popular', 'New'] },
];

const NFTGallery = () => {
  return (
    <div className="nft-grid">
      {nfts.map(nft => (
        <div key={nft.id} className="nft-card">
          <img src={nft.image} alt={nft.name} />
          <h3>{nft.name}</h3>
          <p>Price: {nft.price} TON + 0.1 TON Telegram Fee</p>
          <button onClick={() => buyNFT(nft.id, nft.price)}>Buy & Show on Profile</button>
          <p>Tags: {nft.tags.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

async function buyNFT(id, price) {
  await processPayment(price, 0.1); // Price + Telegram fee
  alert('NFT Purchased!');
}

export default NFTGallery;

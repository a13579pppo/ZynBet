import React from 'react';
import { processPayment } from '../wallet';

const Dashboard = ({ user }) => {
  return (
    <div>
      <h2>Your Dashboard</h2>
      <div className="nfts">
        {user.nfts.map(nft => (
          <div key={nft.id}>
            <img src={nft.image} alt={nft.name} />
            <button onClick={() => setProfileNFT(nft.id)}>Set on Profile</button>
          </div>
        ))}
      </div>
      <p>Telegram Fees Paid: {user.telegramFees} TON</p>
      <p>Monthly NFT Tax: 0.25 TON due in 22 days</p>
      <button onClick={() => processPayment(0.25, 0)}>Pay Tax</button>
    </div>
  );
};

export default Dashboard;

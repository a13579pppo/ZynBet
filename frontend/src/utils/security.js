const crypto = require('crypto');

function encryptData(data) {
  const cipher = crypto.createCipher('aes-256-cbc', 'secret-key');
  return cipher.update(data, 'utf8', 'hex') + cipher.final('hex');
}

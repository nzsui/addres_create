const { ethers } = require("ethers");
const fs = require("fs");

const totalWallets = 1000;
const walletList = [];

for (let i = 0; i < totalWallets; i++) {
  const wallet = ethers.Wallet.createRandom();
  walletList.push({
    index: i + 1,
    address: wallet.address,
    privateKey: wallet.privateKey,
    mnemonic: wallet.mnemonic.phrase
  });
}

fs.writeFileSync("wallets.json", JSON.stringify(walletList, null, 2));
console.log(`${totalWallets} wallets generated and saved to wallets.json`);


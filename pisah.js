const fs = require("fs");
const path = require("path");

// Baca isi wallets.json
const wallets = JSON.parse(fs.readFileSync("wallets.json"));

// Siapkan array kosong
const addresses = [];
const privateKeys = [];
const mnemonics = [];

// Pisahkan datanya
wallets.forEach(wallet => {
  addresses.push(wallet.address);
  privateKeys.push(wallet.privateKey);
  mnemonics.push(wallet.mnemonic);
});

// Buat folder 'output' jika belum ada
const outputDir = path.join(__dirname, "output");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Tulis ke file dalam folder output
fs.writeFileSync(path.join(outputDir, "addresses.txt"), addresses.join("\n"));
fs.writeFileSync(path.join(outputDir, "privateKeys.txt"), privateKeys.join("\n"));
fs.writeFileSync(path.join(outputDir, "mnemonics.txt"), mnemonics.join("\n"));

console.log("Data berhasil dipisah ke folder 'output'.");


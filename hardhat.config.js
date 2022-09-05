
const fs = require('fs');

require("@nomicfoundation/hardhat-toolbox");

const privateKey = fs.readFileSync('.env').toString().trim();

module.exports = {
  solidity: "0.8.9",
  networks: {
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [privateKey],
    },
  },
  paths: {
    artifacts: "./artifacts",
  },
};
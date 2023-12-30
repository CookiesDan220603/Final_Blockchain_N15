require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
const privateKeys = process.env.PRIVATE_KEYS || "";
const goerliApiKey = process.env.GOERLI_API_KEY;
module.exports = {
  solidity: '0.8.0',
  networks: {
    localhost: {
      url: 'http://127.0.0.1:8545/',
      accounts: ['0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d'],
    },
    ganache: {
      url: 'HTTP://127.0.0.1:7545', // Update with your Ganache network URL
      accounts: ['0x64f90079adfbf3298f523f157e083212d43175e81bbd742dc59a0c023edf8387'],
    },
  },
};
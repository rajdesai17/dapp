/** @type import('hardhat/config').HardhatUserConfig */
require('dotenv').config();
require('hardhat-deploy');
module.exports = {
  solidity: "0.8.24",
  networks: {
    polygon: {
      url: process.env.POLYGON_MAINNET_URL, // Replace with your actual Infura URL
      accounts: [process.env.METAMASK_PRIVATE_KEY], // Replace with your private key
    },
  },
};

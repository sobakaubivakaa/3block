require("dotenv").config();
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  solidity: "0.8.10",
  networks: {
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/fSDTzVbsMn4iK1JLPHUItMOXqH88h-78",
      accounts: ["d402f535aa1d19249dad79e61c9c4cbf04e54411097c42b9eebed383f086718f"]
    }
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY
  }
};

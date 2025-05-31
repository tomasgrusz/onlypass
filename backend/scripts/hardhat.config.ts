import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("@nomiclabs/hardhat-ethers");

// deploying with address 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    localhost: {
      url: "http://127.0.0.1:7545",
      chainId: 31337,
    },
    flowTestnet: {
      url: "https://testnet.evm.nodes.onflow.org",
      accounts: ["<PK>"]      
    },
    sepoliaETH: {
      url: "https://rpc.ankr.com/eth_sepolia",
      accounts: ["<PK>"]
    },
    holesky: {
      url: "https://ethereum-holesky.publicnode.com",
      accounts: ["<PK>"]
    },
  },
};

export default config;


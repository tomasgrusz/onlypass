const hre = require("hardhat");
const { ethers } = hre;


async function main() {

  const provider = ethers.provider;
  const wallet = new ethers.Wallet(<PRIVATE-KEY>, provider); // 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266

  const NFTt = await hre.ethers.getContractFactory("NFTicket", wallet);
  const NFTi = await NFTt.deploy();
  
  await NFTi.deployTransaction.wait();

  console.log("NFTicket deployed to:", NFTi.address);
  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

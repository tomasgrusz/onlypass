const hre = require("hardhat");

async function main() {
  const NFTt = await hre.ethers.getContractFactory("NFTicket");
  const NFTi = await NFTt.deploy();

  await NFTi.deployTransaction.wait();

  console.log("NFTicket deployed to:", NFTi.address);

  const [deployer] = await hre.ethers.getSigners();

  const ticketOwner = deployer.address // "0x5fbdb2315678afecb367f032d93f642f64180aa3"
  
  const tx = await NFTi.createNFT(ticketOwner, "Martin", "22-13-2025", "M.Jackson", "0x00112233445566778899aabbccddeeff");
  await tx.wait();

  console.log("NFT minted to:", deployer.address);

  const details = await NFTi.getNFTDetails(0);

  console.log("Details of tokenId 0:");
  console.log("Location:", details.location);
  console.log("Date:", details.date);
  console.log("Name:", details.title);
  console.log("Signature:", details.signature);


}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

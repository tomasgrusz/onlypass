const hre = require("hardhat");
const { ethers } = hre;


async function main() {

  const provider = ethers.provider;
  const wallet = new ethers.Wallet("<PK>", provider);

  const NFTt = await hre.ethers.getContractFactory("NFTicket", wallet);
  const deployedAddress = "0xD83C9f1B0DaFb1992eF92ac62D6509e54AD4eD48"; 
  const NFTi = NFTt.attach(deployedAddress);


  // -------------------------------------- DETAILS ---------------------------------------
  const ticketOwner = wallet.address;
  const location = "Berlin";
  const date = "31-02-3063";
  const title = "Elvis.P";
  const tokenHash = "0xffeeddccbbaa99887766554433221100";
  const signature = "0x00112233445566778899aabbccddeeff";
  // --------------------------------------------------------------------------------------

  const tx = await NFTi.createNFT(ticketOwner, location, date, title, tokenHash, signature "https://raw.githubusercontent.com/tomasgrusz/onlypass/main/backend/images/onlypass.json");
  await tx.wait();

  console.log("NFT minted to:", ticketOwner);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

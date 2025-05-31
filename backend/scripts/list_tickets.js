const hre = require("hardhat");
const { ethers } = hre;


async function main() {

  const provider = ethers.provider;

  const wallet = new ethers.Wallet("0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80", provider);

  const NFTt = await hre.ethers.getContractFactory("NFTicket", wallet);
  const deployedAddress = "0xD83C9f1B0DaFb1992eF92ac62D6509e54AD4eD48";  
  const NFTi = NFTt.attach(deployedAddress);

  for (let tokenID = 0; tokenID <= 2; tokenID++) {
    try {
      const details = await NFTi.getNFTDetails(tokenID);

      console.log("Details of tokenId ", tokenID);
      console.log("Location:", details.location);
      console.log("Date:", details.date);
      console.log("Name:", details.title);
      console.log("tokenHash:", details.tokenHash);
      console.log("Signature:", details.signature);
    } catch (err) {
      console("Error!");
    }
  }

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

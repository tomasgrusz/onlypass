const hre = require("hardhat");
const { ethers } = hre;


async function main() {

  const provider = ethers.provider;
  const wallet = new ethers.Wallet(<PRIVATE-KEY>, provider); // 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266

  const NFTt = await hre.ethers.getContractFactory("NFTicket", wallet);
  const NFTi = await NFTt.deploy();
  
  // const deployedAddress = "0x457cCf29090fe5A24c19c1bc95F492168C0EaFdb";  // flow address
  // const NFTi = NFTt.attach(deployedAddress);

  // await NFTi.deployTransaction.wait();

  console.log("NFTicket deployed to:", NFTi.address);

  // -------------------------------------- DETAILS ---------------------------------------
  const ticketOwner = wallet.address // "0x5fbdb2315678afecb367f032d93f642f64180aa3"
  const location = "Berlin";
  const date = "31-02-3063";
  const title = "Elvis.P";
  const tokenHash = "0xffeeddccbbaa99887766554433221100";
  const signature = "0x00112233445566778899aabbccddeeff";
  // --------------------------------------------------------------------------------------

  // const tx = await NFTi.createNFT(ticketOwner, location, date, title, tokenHash, signature);
  // await tx.wait();

  console.log("NFT minted to:", ticketOwner);

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

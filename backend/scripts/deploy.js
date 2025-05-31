const hre = require("hardhat");

async function main() {
  const NFTt = await hre.ethers.getContractFactory("NFTicket");
  // const NFTi = await NFTt.deploy();

  const deployedAddress = "0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82";
  const NFTi = NFTt.attach(deployedAddress);

  // await NFTi.deployTransaction.wait();

  // console.log("NFTicket deployed to:", NFTi.address);

  const [deployer] = await hre.ethers.getSigners();

  // -------------------------------------- DETAILS ---------------------------------------
  const ticketOwner = deployer.address // "0x5fbdb2315678afecb367f032d93f642f64180aa3"
  const location = "Oravska";
  const date = "01-01-2000";
  const title = "PeciPeci";
  const tokenHash = "0xffeeddccbbaa99887766554433221100";
  const signature = "0x00112233445566778899aabbccddeeff";
  // --------------------------------------------------------------------------------------

  // const tx = await NFTi.createNFT(ticketOwner, location, date, title, tokenHash, signature);
  // await tx.wait();

//  console.log("NFT minted to:", deployer.address);

  for (let tokenID = 0; tokenID <= 4; tokenID++) {
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


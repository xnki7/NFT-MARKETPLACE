const hre = require("hardhat");

async function main() {
  const NFT = await hre.ethers.getContractFactory("NFT");
  const contract1 = await NFT.deploy(); //instance of contract

  await contract1.deployed(); //now contract get deployed on hardhat blockchain
  console.log("Address of NFT contract", contract1.address); //displaying address of contract

  const Marketplace = await hre.ethers.getContractFactory("NFT");
  const contract2 = await Marketplace.deploy(); //instance of contract

  await contract2.deployed(); //now contract get deployed on hardhat blockchain
  console.log("Address of Marketplace contract", contract2.address); //displaying address of contract
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

/*async function main({ getNamedAccounts, deployments }){
    console.log("Deploying contract...");
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();

    const candidates = ["Candidate 1", "Candidate 2", "Candidate 3"];

    await deploy("VotingContract", {
        from: deployer,
        args: [candidates],
        log: true
    });

    console.log("Contract deployed to address: ", await deployments.get("VotingContract").address);
};

// module.exports = main();
main()
.then(() => process.exit(0))
.catch(error => {
  console.error(error);
  process.exit(1);
});*/

// const { keccak256 } = require("ethers");
const { ethers } = require("hardhat");
// const { utils, abi } = require("hardhat").ethers;
// const { eth } = require("ethers");
 
async function main() {
    const VotingContract = await ethers.getContractFactory("VotingContract");
    const votingContract = await VotingContract.deploy(); // Provide candidate names here ["Anish", "Sumedh"]
    // const votingAddress = await votingContract.getAddress();
    const candidate1 = votingContract.generateToken("Anish");
    const candidate2 = votingContract.generateToken("Sumedh");
    // const candidate1 = utils.formatBytes32String("Anish");
    // const candidate2 = utils.formatBytes32String("Sumedh");
    // console.log(candidate1, candidate2);
    await votingContract.Voting([candidate1, candidate2]);
//    await votingContract.deploy();
 
    console.log("VotingContract deployed to:", votingContract.target);

}
 
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });


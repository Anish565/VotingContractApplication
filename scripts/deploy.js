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

const { ethers } = require("hardhat");
 
async function main() {
    const VotingContract = await ethers.getContractFactory("VotingContract");
    const votingContract = await VotingContract.deploy(["Anish", "Akshat"]); // Provide candidate names here
//    await votingContract.deploy();
 
    console.log("VotingContract deployed to:", votingContract.target);
}
 
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });


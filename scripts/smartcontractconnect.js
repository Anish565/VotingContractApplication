const { ethers } = require("ethers");
const { artifacts } = require("hardhat/internal/lib/hardhat-lib");
const contractInfo = require("../artifacts/contracts/VotingContract.sol/VotingContract.json");
async function main() {
//    const intermediary = new ethers.providers;
//    console.log(intermediary)
    const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545"); // "http://localhost:8545" Connect to local Hardhat node
//     const contractAddress = await provider.getContractAddress('YourContractName');
// console.log(contractAddress);

    // Replace the contract address and ABI with your deployed contract's address and ABI
    const contractAddress = "0xc3e53F4d16Ae77Db1c982e75a937B9f60FE63690";
    // Another way below
    //const contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");
    // contract.abi
    const abi = contractInfo.abi;
 
    const signer = provider.getSigner(); // Get a signer (account) to send transactions
    const contract = await new ethers.Contract(contractAddress, abi, signer);
    console.log(contract);
    // Example: Triggering the voteForCandidate function
    const candidate = "Anish";
    const candidate2 = "Sumedh";
    console.log("Failing here");
    const byteCode = await contract.generateToken(candidate, {gasLimit:3000000});
    const byteCode2 = await contract.generateToken(candidate2, {gasLimit:3000000});
    const byteCode3 = await contract.generateToken("Name", {gasLimit:3000000});
    // const candidates = [byteCode, byteCode2];
    // console.log(byteCode);
    // await contract.Voting(candidates, {gasLimit:3000000});
    const testCandidate = await contract.validCandidate(byteCode);
    console.log(testCandidate)
    const testCandidate2 = await contract.validCandidate(byteCode2);
    console.log(testCandidate2)
    const testCandidate3 = await contract.validCandidate(byteCode3);
    console.log(testCandidate3)

    console.log("Failing here");
    // byteCode Candidate Name, NameofVoter, Drivers License, Address
    // const testVariable = await contract.voteForCandidate(byteCode2, "bnXlejdrhsSGEfr", "BikdWlbsdfklWuB", "hFdRLJcanTOsdflkbvzQLwRek", {gasLimit:3000000});
    // console.log(testVariable);
    // console.log("Failing here");
    // const testVariable2 = await contract.voteForCandidate(byteCode2, "bnXlsSGEfr", "BikdWlbWuB", "hFdRLJcanTObvzQLwRek", {gasLimit:3000000});
    // console.log(testVariable2);
    // console.log("Failing here");
    console.log("Total Votes..");
    // Example: Triggering the totalVotesFor function
    const totalVotes1 = await contract.totalVotesFor(byteCode);
    const totalVotes2 = await contract.totalVotesFor(byteCode2);
    // console.log(totalVotes);
    console.log("Total votes for", candidate, ":", totalVotes1);
    console.log("Total votes for", candidate2, ":", totalVotes2);
}
 
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
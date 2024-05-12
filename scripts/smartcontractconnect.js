const { ethers } = require("ethers");
const { artifacts } = require("hardhat/internal/lib/hardhat-lib");
const contractInfo = require("../artifacts/contracts/VotingContract.sol/VotingContract.json");
const {API_KEY, API_URL, PRIVATE_KEY} = process.env
async function main() {
//    const intermediary = new ethers.providers;
//    console.log(intermediary)
    // const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545"); // "http://localhost:8545" Connect to local Hardhat node
//     const contractAddress = await provider.getContractAddress('YourContractName');
// Get Alchemy App URL
//const API_KEY = process.env.API_KEY;
// Alchemy provider
const provider = new ethers.providers.JsonRpcProvider(API_URL);
// const provider = new ethers.providers.AlchemyProvider('eth-sepolia', API_KEY);
// console.log(contractAddress);

    // Replace the contract address and ABI with your deployed contract's address and ABI
    const contractAddress = "0x124d0Db0be06bA3162B4351DB480FfDffD393b87";
    // Another way below
    //const contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");
    // contract.abi
    const abi = contractInfo.abi;
 
    const signer =  new ethers.Wallet(PRIVATE_KEY, provider);
    // const signer = provider.getSigner(); // Get a signer (account) to send transactions
    const contract = await new ethers.Contract(contractAddress, abi, signer);
    console.log(contract);
    // Example: Triggering the voteForCandidate function
    const candidate = "Anish";
    const candidate2 = "Sumedh";
    const failCase =  "John";

    console.log("Retrieved the contract..");
/*    const byteCode = await contract.generateToken(candidate, {gasLimit:3000000});
    const byteCode2 = await contract.generateToken(candidate2, {gasLimit:3000000});
    const byteCode3 = await contract.generateToken("Name", {gasLimit:3000000});*/

    const byteCode = ethers.utils.formatBytes32String(candidate);
    const byteCode2 = ethers.utils.formatBytes32String(candidate2);
    const byteCode3 = ethers.utils.formatBytes32String(failCase);
    // const candidates = [byteCode, byteCode2];
    // console.log(byteCode);
    // await contract.Voting(candidates, {gasLimit:3000000});
    console.log("Validating candidates..");
    const testCandidate = await contract.validCandidate(byteCode);
    console.log(testCandidate)
    const testCandidate2 = await contract.validCandidate(byteCode2);
    console.log(testCandidate2)
    const testCandidate3 = await contract.validCandidate(byteCode3);
    console.log(testCandidate3)

    // console.log("Finished validating candidates..");

    // // byteCode Candidate Name, NameofVoter, Drivers License, Address
    // const testVariable = await contract.voteForCandidate(byteCode, "bnXlejdrhsSGEfr", "BikdWlbsdfklWuB", "hFdRLJcanTOsdflkbvzQLwRek", {gasLimit:3000000});
    // console.log(testVariable);
    // const testVariable1 = await contract.voteForCandidate(byteCode, "XyZabc123", "DefGhi456", "JklMno789", {gasLimit:3000000});
    // console.log(testVariable1);
    // const testVariable2 = await contract.voteForCandidate(byteCode2, "AbcDefGhi", "JklMnoPqr", "StuVwxYz1", {gasLimit:3000000});
    // const testVariable3 = await contract.voteForCandidate(byteCode, "BcdEfgHij", "KlmNopQrs", "TuvWxyZ23", {gasLimit:3000000});
    // const testVariable4 = await contract.voteForCandidate(byteCode2, "CdeFghIjk", "MnoPqrStu", "VwxYzA12", {gasLimit:3000000});
    // const testVariable5 = await contract.voteForCandidate(byteCode, "DefGhiJkl", "NopQrsTuv", "WxyZab34", {gasLimit:3000000});
    // const testVariable6 = await contract.voteForCandidate(byteCode2, "EfgHijKlm", "PqrStuVwx", "XyZabc45", {gasLimit:3000000});
    // const testVariable7 = await contract.voteForCandidate(byteCode, "FghIjkLmn", "QrsTuvWxy", "YzAbcDe6", {gasLimit:3000000});
    // const testVariable8 = await contract.voteForCandidate(byteCode2, "GhiJklMno", "RstUvwXyZ", "AbcDefG7", {gasLimit:3000000});
    // const testVariable9 = await contract.voteForCandidate(byteCode, "HijKlmNop", "StuVwxYzA", "BcdEfgH8", {gasLimit:3000000});
    // const testVariable10 = await contract.voteForCandidate(byteCode2, "IjkLmnOpq", "TuvWxyZab", "CdeFghI9", {gasLimit:3000000});
    // const testVariable11 = await contract.voteForCandidate(byteCode, "JklMnoPqr", "UvwXyZabc", "DefGhiJ10", {gasLimit:3000000});
    // const testVariable12 = await contract.voteForCandidate(byteCode2, "KlmNopQrs", "VwxYzAbcD", "EfgHijK11", {gasLimit:3000000});
    // const testVariable13 = await contract.voteForCandidate(byteCode, "LmnOpqRst", "WxyZabcdE", "FghIjkL12", {gasLimit:3000000});
    // const testVariable14 = await contract.voteForCandidate(byteCode2, "MnoPqrStu", "XyZabcdeF", "GhiJklM13", {gasLimit:3000000});
    // const testVariable15 = await contract.voteForCandidate(byteCode, "NopQrsTuv", "YzAbcdefG", "HijKlmN14", {gasLimit:3000000});
    // const testVariable16 = await contract.voteForCandidate(byteCode2, "OpqRstUvw", "AbcdefGhi", "IjkLmnOp15", {gasLimit:3000000});
    // const testVariable17 = await contract.voteForCandidate(byteCode, "PqrStuVwx", "BcdefGhij", "JklMnoPq16", {gasLimit:3000000});
    // const testVariable18 = await contract.voteForCandidate(byteCode2, "QrsTuvWxy", "CdefGhijk", "KlmNopQr17", {gasLimit:3000000});
    // const testVariable19 = await contract.voteForCandidate(byteCode, "RstUvwXyZ", "DefGhijkl", "LmnOpqRs18", {gasLimit:3000000});
    // const testVariable20 = await contract.voteForCandidate(byteCode2, "StuVwxYzA", "EfgHijklm", "MnoPqrStu19", {gasLimit:3000000});
    // const testVariable21 = await contract.voteForCandidate(byteCode, "TuvWxyZab", "FghIjklmn", "NopQrsTuv20", {gasLimit:3000000});
    // const testVariable22 = await contract.voteForCandidate(byteCode2, "UvwXyZabc", "GhiJklmno", "OpqRstUvw21", {gasLimit:3000000});
    // const testVariable23 = await contract.voteForCandidate(byteCode, "VwxYzAbcD", "HijKlmnop", "PqrStuVwx22", {gasLimit:3000000});
    // const testVariable24 = await contract.voteForCandidate(byteCode2, "WxyZabcdE", "IjkLmnopq", "QrsTuvWxy23", {gasLimit:3000000});
    // const testVariable25 = await contract.voteForCandidate(byteCode, "XyZabcdeF", "JklMnopqr", "RstUvwXyZ24", {gasLimit:3000000});
    // const testVariable26 = await contract.voteForCandidate(byteCode2, "YzAbcdefG", "KlmNopqrs", "StuVwxYzA25", {gasLimit:3000000});
    // const testVariable27 = await contract.voteForCandidate(byteCode, "ZabcdEfgH", "LmnOpqrst", "TuvWxyZab26", {gasLimit:3000000});
    // const testVariable28 = await contract.voteForCandidate(byteCode2, "AbcdefGhi", "MnoPqrstu", "UvwXyZabc27", {gasLimit:3000000});
    // const testVariable29 = await contract.voteForCandidate(byteCode, "BcdefGhij", "NopQrstuv", "VwxYzAbcD28", {gasLimit:3000000});
    // const testVariable30 = await contract.voteForCandidate(byteCode2, "CdefGhijk", "OpqRstuvw", "WxyZabcdE29", {gasLimit:3000000});
    
    
    // // // console.log("Failing here");
    // // const testVariable2 = await contract.voteForCandidate(byteCode2, "bnXlsSGEfr", "BikdWlbWuB", "hFdRLJcanTObvzQLwRek", {gasLimit:3000000});
    // // console.log(testVariable2);
    // // console.log("Failing here");
    // setTimeout(function() {
      
    // },240000);
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
const { ethers } = require("ethers");

async function main() {
//    const intermediary = new ethers.providers;
//    console.log(intermediary)
    const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545"); // "http://localhost:8545" Connect to local Hardhat node
 
    // Replace the contract address and ABI with your deployed contract's address and ABI
    const contractAddress = "0xdc64a140aa3e981100a9beca4e685f962f0cf6c9";
    const abi = [ 
        {
          "inputs": [
            {
              "internalType": "bytes32[]",
              "name": "candidates",
              "type": "bytes32[]"
            }
          ],
          "name": "Voting",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "candidatesNames",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "info",
              "type": "string"
            }
          ],
          "name": "generateToken",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "pure",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "candidate",
              "type": "bytes32"
            }
          ],
          "name": "totalVotesFor",
          "outputs": [
            {
              "internalType": "uint8",
              "name": "",
              "type": "uint8"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "candidate",
              "type": "bytes32"
            }
          ],
          "name": "validCandidate",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "candidate",
              "type": "bytes32"
            }
          ],
          "name": "voteForCandidate",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "name": "voters",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "name": "votes",
          "outputs": [
            {
              "internalType": "uint8",
              "name": "",
              "type": "uint8"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        } ];
 
    const signer = provider.getSigner(); // Get a signer (account) to send transactions
    const contract = new ethers.Contract(contractAddress, abi, signer);
 
    // Example: Triggering the voteForCandidate function
    const candidate = "Anish";
    const candidate2 = "Akshat";
    console.log("Failing here");
    const byteCode = await contract.generateToken(candidate, {gasLimit:3000000});
    const byteCode2 = await contract.generateToken(candidate, {gasLimit:3000000});
    const candidates = [byteCode, byteCode2];
    console.log(byteCode);
    await contract.Voting(candidates, {gasLimit:3000000});

    const testVariable = await contract.voteForCandidate(byteCode, {gasLimit:3000000});
    console.log(testVariable)
    console.log("Total Votes..");
    // Example: Triggering the totalVotesFor function
    const totalVotes = await contract.totalVotesFor(ethers.utils.formatBytes32String(candidate));
    console.log("Total votes for", candidate, ":", totalVotes.toNumber());
}
 
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
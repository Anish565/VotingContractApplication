// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VotingContract {
    uint256 public chainId = 11155111; // Sepolia chain ID
    mapping(bytes32 => uint8) public votes;
    bytes32[] public candidatesNames;
    mapping(bytes32 => bool) public voters; 

     function Voting(bytes32[] memory candidates) public {
        candidatesNames = candidates;
    }
   
    // constructor(bytes32[] memory _candidates) {
    //     candidatesNames = _candidates;
    // }

    function totalVotesFor(bytes32 candidate) public view returns (uint8) {
        if (!validCandidate(candidate)) {
            revert("Not a valid candidate! Exiting..");
        }
        return votes[candidate];
    }

    function voteForCandidate(bytes32 candidate, string memory _name, string memory _driverLicense, string memory _address) public {
        if (!validCandidate(candidate)) {
            revert("Not a valid candidate. Exiting..");
        }
        bytes32 token = generateToken(string(abi.encodePacked(
            msg.sender,
            bytes32(abi.encodePacked(_name)),
            bytes32(abi.encodePacked(_driverLicense)),
            bytes32(abi.encodePacked(_address))
        )));
        if (voters[token]) {
            revert("Already voted. Cannot vote again!");
        }
        votes[candidate]++;
        voters[token] = true;
    }

    function validCandidate(bytes32 candidate) public view returns (bool) {
        for (uint i = 0; i < candidatesNames.length; i++) {
            if (candidatesNames[i] == candidate) {
                return true;
            }
        }
        return false;
    }

    function generateToken(string memory info) public pure returns (bytes32){
        return keccak256(abi.encodePacked(info));
    }
}
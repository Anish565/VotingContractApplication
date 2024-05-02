// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VotingContract {
    mapping(bytes32 => uint8) public votes;
    bytes32[] public candidatesNames;
    mapping(bytes32 => bool) public voters; 

    function Voting(bytes32[] memory candidates) public {
        candidatesNames = candidates;
    }

    function totalVotesFor(bytes32 candidate) public view returns (uint8) {
        if (!validCandidate(candidate)) {
            revert();
        }
        return votes[candidate];
    }

    function voteForCandidate(bytes32 candidate) public {
        if (!validCandidate(candidate)) {
            revert();
        }
        bytes32 token = generateToken(string(abi.encodePacked(msg.sender, candidate)));
        if (voters[token]) {
            revert();
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
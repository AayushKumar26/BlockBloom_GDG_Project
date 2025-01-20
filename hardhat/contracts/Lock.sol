// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleVoting {
    struct Candidate {
        string name;
        uint256 votes;
    }
    mapping(uint256 => Candidate) public candidates; 
    mapping(address => bool) public voters; 
    uint256 public totalCandidates = 10;
    constructor() {
        candidates[1] = Candidate("Candidate 1", 0);
        candidates[2] = Candidate("Candidate 2", 0);
        candidates[3] = Candidate("Candidate 3", 0);
        candidates[4] = Candidate("Candidate 4", 0);
        candidates[5] = Candidate("Candidate 5", 0);
        candidates[6] = Candidate("Candidate 6", 0);
        candidates[7] = Candidate("Candidate 7", 0);
        candidates[8] = Candidate("Candidate 8", 0);
        candidates[9] = Candidate("Candidate 9", 0);
        candidates[10] = Candidate("Candidate 10", 0);
    }

    function vote(uint256 candidateId) public {
        require(!voters[msg.sender], "You have already voted");
        require(candidateId > 0 && candidateId <= totalCandidates, "Invalid candidate ID");

        voters[msg.sender] = true;
        candidates[candidateId].votes++;
    }
    function getWinner() public view returns (string memory winnerName, uint256 winnerVotes) {
        uint256 maxVotes = 0;
        uint256 winnerId = 0;

        for (uint256 i = 1; i <= totalCandidates; i++) {
            if (candidates[i].votes > maxVotes) {
                maxVotes = candidates[i].votes;
                winnerId = i;
            }
        }
        winnerName = candidates[winnerId].name;
        winnerVotes = candidates[winnerId].votes;
    }
}

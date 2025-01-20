# Simple Voting DApp

## Description
The Simple Voting DApp is a decentralized application built on Ethereum that allows users to cast votes for predefined candidates. Designed with simplicity and functionality in mind, this application leverages smart contracts to ensure secure, transparent, and tamper-proof voting. It provides a user-friendly interface to connect with MetaMask, view the list of candidates, cast a vote, and determine the winner of the election.

## Features
  - Candidate Voting: Users can view a list of candidates and cast their vote securely.
  - MetaMask Integration: Seamless integration with MetaMask for account connection and transaction signing.
  - Real-Time Updates: Automatically fetches the latest candidate details, including the number of votes.
  - Winner Declaration: Users can determine the winner based on the highest vote count.
  - Tamper-Proof: The smart contract ensures each user can vote only once, maintaining the integrity of the election.


## Tech Part
- Frontend: React.js for building a responsive and interactive UI.
- Blockchain: Ethereum smart contract written in Solidity.
- Tools and Libraries:
  - Ethers.js for blockchain interaction.
  - MetaMask for wallet integration.


## How It Works
- Connect your MetaMask wallet to the DApp.
- View the list of candidates and their current vote counts.
- Select your preferred candidate and cast your vote.
- Optionally, retrieve the election winner through the "Get Winner" button.


## Smart Contract Highlights
The smart contract ensures:
- Voting is restricted to one vote per user.
- Secure storage of candidate details and vote counts.
- Transparent retrieval of voting results, including the election winner.

#### This voting system DApp is perfect for learning about blockchain-based voting systems and experimenting with smart contracts and decentralized applications. So, I preferred it as a use case.
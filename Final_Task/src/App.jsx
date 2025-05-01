import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import './App.css';
import { BrowserProvider } from "ethers"
import {abi,address} from "./vote.json"


function App() {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [candidates, setCandidates] = useState([]);
  const [hasVoted, setHasVoted] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState();
  const [voteCount, setVoteCount] = useState(0);
  const [winner,setWinner] = useState();

  // Connect to MetaMask
  const connectMetaMask = async () => {
    
    try {
      
        const provider = new BrowserProvider(window.ethereum);
        const signer = await provider.getSigner()
        setAccount(signer.address)

        // Show alert with the address
        alert(`Connected to MetaMask with address: ${signer.address}`);
      
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
      alert('Failed to connect to MetaMask. Please try again.');
    }
  }
  const vote = async(id) => {
    const provider = new BrowserProvider(window.ethereum);
        const signer = await provider.getSigner()

      const votingContract = new ethers.Contract(address, abi, signer);
      // console.log(selectedCandidate);
      
      await votingContract.vote(id);
  }
  const getVoteCount = async() =>{
    const provider = new BrowserProvider(window.ethereum);
        const signer = await provider.getSigner()

      const votingContract = new ethers.Contract(address, abi, signer);
      // console.log(selectedCandidate);
      
      const winner = await votingContract.getWinner();
      setWinner(winner)
  }



// Fetch contract and candidates when account is connected
useEffect(() => {
  if (account) {
    const initContract = async () => {
      const provider = new BrowserProvider(window.ethereum);
        const signer = await provider.getSigner()

      const votingContract = new ethers.Contract(address, abi, signer);
      setContract(votingContract);
      
      const cands = []
      const total = await votingContract.totalCandidates()
      for(let i=0;i<total;i++){
        cands.push(await votingContract.candidates(i+1))
      }
      console.log(cands);
      setHasVoted(await votingContract.voters(signer.address))
      
      setCandidates(cands)
    };

    initContract();
  }
}, [account]);


return (
  <div className="App">
    <h1>Voting System DApp</h1>

    {!account && (
      <button onClick={connectMetaMask}>Connect to MetaMask</button>
    )}

    {account && (
      <>
        <h2>Welcome, {account}</h2>

        <div>
          <h3>Candidates:</h3>
          <ul>
              {candidates.map((candidate, index) => (
                <li key={index}>
                  <label>
                    <input
                      type="radio"
                      name="candidate"
                      value={index + 1} // Assuming the candidate ID starts from 1
                      checked={selectedCandidate === index + 1} // Match candidate ID with selected ID
                      onChange={() => setSelectedCandidate(index + 1)} // Update selected candidate
                    />
                    {candidate.name} - {parseInt(candidate.votes)} votes
                  </label>
                </li>
              ))}
            </ul>

          <button onClick={()=>vote(selectedCandidate)}>Vote</button>

          { hasVoted && <p>You have already voted.</p>}

          <button onClick={getVoteCount}>Get winner</button>
          <p>Vote Winner: {winner}</p>
        </div>
      </>
    )}
  </div>
);
}

export default App;

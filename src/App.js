
import './App.css';
import { useEffect, useState } from 'react';
import Organizer from './Components/Organizer';
import Judge from './Components/Judge';
import Spectator from './Components/Spectator';
import Player from './Components/Player';

function App() {

  let url = 'https://petrotranzdata.azurewebsites.net/api/matches/get';

  let [matches, setMatches] = useState([]);

  let [playerChoice, setPlayerChoice] = useState("player");
  let [computerChoice, setComputerChoice] = useState("computer");
  let [winner, setWinner] = useState("");
  let [loading, setLoading] = useState(true);

  let [matchData, setmatchData] = useState(
    {
      rock: 0,
      paper: 0,
      scissor: 0,
      tie: 0,
      matchCount:0,
    }
  )

  
  let chooseState = (event) =>{

    let choices = ["rock","paper","scissor"];
    let randomChoice = choices[Math.floor(Math.random()*choices.length)];

    setPlayerChoice(event.target.value);
    setComputerChoice(randomChoice);
  
    updateWins([{choice1: event.target.value, choice2: randomChoice}]);
  }

  useEffect(() => {
    (async function () {
      let data = await fetch(url);
      let myData = await data.json();
      setMatches(myData.matches);
      updateWins(myData.matches);
      setWinner("");
      setLoading(false);
    })();
  }, [url]);

  const updateWins = (data) => {

    let matchDistribution = { ...matchData }

    data.forEach(match => {
      matchDistribution['matchCount']++;

      if (match.choice1 === 'rock') {
        if (match.choice2 === 'paper') {
          matchDistribution['paper']++;
          setWinner("paper");
        } else if (match.choice2 === 'rock') {
          matchDistribution['tie']++;
          setWinner("tie");
          
        }
        else {
          matchDistribution['rock']++;
          setWinner("rock");
        }

      } else if (match.choice1 === 'paper') {
        if (match.choice2 === 'rock') {
          matchDistribution['paper']++;
          setWinner("paper");
        } else if (match.choice2 === 'paper') {
          matchDistribution['tie']++;
          setWinner("tie");
        } else {
          matchDistribution['scissor']++;
          setWinner("scissor");
        }

      } else if (match.choice1 === 'scissor') {
        if (match.choice2 === 'rock') {
          matchDistribution['rock']++;
          setWinner("rock");
        } else if (match.choice2 === 'scissor') {
          matchDistribution['tie']++;
          setWinner("tie");
        } else {
          matchDistribution['scissor']++;
          setWinner("scissor");
        }
      }
    })

    setmatchData(matchDistribution);
    
  }

  return (
    <div className="App">
      <Player loading={loading} winner={winner} onClick={(event)=>chooseState(event)} choice={playerChoice} computerChoice={computerChoice}/>
      <Organizer loading={loading} totalMatches={matchData.matchCount} />
      <Judge loading={loading} tie={matchData.tie} rock={matchData.rock} paper={matchData.paper} scissor={matchData.scissor} />
      <Spectator loading={loading} tiePercent={matchData.tie/matchData.matchCount} rockPercent={matchData.rock / matchData.matchCount} paperPercent={matchData.paper / matchData.matchCount} scissorPercent={matchData.scissor / matchData.matchCount} />
    </div>
  );
}

export default App;

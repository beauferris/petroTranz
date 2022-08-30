
import './App.css';
import { useEffect,useState } from 'react';
import Organizer from './Components/Organizer';
import Judge from './Components/Judge';
import Spectator from './Components/Spectator';


function App() {

  let url = 'https://petrotranzdata.azurewebsites.net/api/matches/get';
  
  let [matches,setMatches] = useState([]);

  let matchDistribution= 
  {
    rock:0,
    paper:0,
    scissor:0,
    tie:0,
  };

  useEffect(()=>{
   async function fetchData() {
    let data = await fetch(url);
    let myData = await data.json();
    console.log(myData)
    setMatches(myData.matches)
   }
   
   fetchData();
   
  }, [url])

  const distributeWins = (data) =>{
    matches.forEach(match=>{
     
      if(match.choice1 === 'rock'){
        if(match.choice2 === 'paper'){
          matchDistribution['paper']++;
        }else if(match.choice2 === 'rock'){
          matchDistribution['tie']++;
        }
        else{
          matchDistribution['rock']++;
        }

      }else if(match.choice1 === 'paper'){
        if(match.choice2 === 'rock'){
          matchDistribution['paper']++;
        }else if(match.choice2 === 'paper'){
          matchDistribution['tie']++;
        }else {
          matchDistribution['scissor']++;
        }

      }else if(match.choice1 === 'scissor'){
        if(match.choice2 === 'rock'){
          matchDistribution['rock']++;
        }else if(match.choice2 === 'scissor'){
          matchDistribution['tie']++;
        }else{
          matchDistribution['scissor']++;
        }
      }
    })
  }

  distributeWins()

  console.log(matchDistribution)



  return (
    <div className="App">
      <Organizer totalMatches={matches.length}/>
      <Judge rock={matchDistribution.rock} paper={matchDistribution.paper} scissors={matchDistribution.scissor}/>
      <Spectator rockPercent={matchDistribution.rock/matches.length} paperPercent={matchDistribution.paper/matches.length} scissorsPercent={matchDistribution.scissor/matches.length}/>
    </div>
  );
}

export default App;

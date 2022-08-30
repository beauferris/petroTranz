const Judge = ({rock,paper,scissor,tie, loading}) =>{
    return(
        <div className="data">
        
            <h1>Number of Wins</h1>
            <h2>Rock: {loading? "Loading...":  rock}</h2>
            <h2>Paper: {loading? "Loading...":paper}</h2>
            <h2>Scissor: {loading? "Loading...":scissor}</h2>
            <h2>Tie: {loading? "Loading...":tie}</h2> 
          
        </div>
    )
}

export default Judge; 
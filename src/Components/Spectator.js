const Spectator = ({rockPercent, paperPercent, scissorPercent, tiePercent, loading}) => {
    return (
        <div className="data">
            <h1>Win Percentage</h1>
            <h2>Rock: {loading? "Loading...": Math.round(rockPercent*100)}%</h2>
            <h2>Paper: {loading? "Loading...": Math.round(paperPercent*100)}%</h2>
            <h2>Scissor: {loading? "Loading...": Math.round(scissorPercent*100)}%</h2>
            <h2>Tie: {loading? "Loading...": Math.round((tiePercent*100))}%</h2>
        </div>
    )
}

export default Spectator; 
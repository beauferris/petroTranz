const Spectator = ({rockPercent, paperPercent, scissorsPercent}) => {
    return (
        <div className="data">
            <h2>Rock: {rockPercent}%</h2>
            <h2>Paper: {paperPercent}%</h2>
            <h2>scissors: {scissorsPercent}%</h2>
        </div>
    )
}

export default Spectator; 
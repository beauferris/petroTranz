import './Player.css';

const Player = ({ choice, computerChoice, onClick, winner }) => {

    let emojiObject = {
        paper: "🖐",
        rock: "👊",
        scissor: "✌",
        player: "🧔",
        computer: "💻"
    }

    return (
        <>
            <div className='board'>
                <div>

                    <h2>Player </h2>
                    <div className={choice === winner ? "choice winner" : "choice"}>
                        <h1> {emojiObject[choice]}</h1>
                    </div>
                </div>

                <div>
                <h2>Computer </h2>
                
                <div className={computerChoice === winner ? "choice winner" : "choice"}>
                    <h1>{emojiObject[computerChoice]}</h1>
                </div>
                </div>

            </div>

            <h2>{!winner.toUpperCase() ? "PICK ONE OF THE BELOW" : winner.toUpperCase() + " WON!"}</h2>

            <div className='player'>

                <button onClick={onClick} value={"rock"}>{emojiObject["rock"]} ROCK</button>
                <button onClick={onClick} value={"paper"}>{emojiObject["paper"]} PAPER</button>
                <button onClick={onClick} value={"scissor"}>{emojiObject["scissor"]} SCISSOR</button>
            </div>
        </>
    )
}

export default Player; 
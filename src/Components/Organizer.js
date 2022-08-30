const Organizer = ({totalMatches, loading}) =>{
    return(
        <div className="data">
            <h1>Total Matches: {loading? "Loading...":totalMatches} </h1>
        </div>
    )
}

export default Organizer; 
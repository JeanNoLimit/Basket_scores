import "../styles/Card.css";
import {LeagueInformation} from "./card/LeagueInformation.jsx";
import {Team} from "./card/Team.jsx";

export function Card({event, teams, setEventId, setIsSelected}) {
    
    const homeTeam = teams.length>0 ? teams.find(team => team.idTeam == event.idHomeTeam) : "noLogo"
    const awayTeam = teams.length>0 ? teams.find(team => team.idTeam == event.idAwayTeam) : "noLogo"
    
    return <>
        <div className="card shadow border-0 rounded-5 score-card h-100" >
            <div className="p-3 ">
                <LeagueInformation numJournee={event.intRound} date={event.dateEvent}/>
                <div className="row align-items-center row-score">
                    <Team teamName={event.strHomeTeam} logo={homeTeam.strTeamBadge} idTeam={homeTeam.idTeam} key={event.strHomeTeam}/>
                    <div className="col d-flex flex-column justify-content-between align-items-center score-container">
                        <div className="score-display">
                            <span className="fw-medium">{event.intHomeScore}</span>
                            <span className="fw-medium">-</span>
                            <span className="fw-medium">{event.intAwayScore}</span>
                        </div>
                        <button 
                            type="button" 
                            className="btn btn-outline-dark rounded-pill border border-dark border-1 fw-medium btn-sm w-100"
                            onClick={() => {setEventId(event.idEvent);setIsSelected(true)}}>Détails</button>
                    </div>
                    <Team teamName={event.strAwayTeam} logo={awayTeam.strTeamBadge} idTeam={awayTeam.idTeam} key={event.strAwayTeam}/>
                </div>
            </div> 
        </div>
    </>
}

// import { useState} from 'react'
import '../styles/EventDetails.css';

export function EventDetails({event, teams, handleModalClose}){
    console.log(event);

    const dateFormat = event ===undefined ? new Date() : new Date(event.dateEvent);

    const homeTeam = teams.length>0 && event!== undefined ? teams.find(team => team.idTeam == event.idHomeTeam) : "noLogo"
    const awayteam = teams.length>0 && event!== undefined ? teams.find(team => team.idTeam == event.idAwayTeam) : "noLogo"
    
    return (
        event === undefined ? 
            (<div>Pas de match selectionné pour l'instant </div>) : 
            (
            <div className="w-100 bg-secondary bg-gradient py-4">
                <div className="container-md mx-auto">
                    <div>
                        <button className="float-end btn btn-outline-dark border-0" onClick={handleModalClose}><i className="fa-solid fa-xmark"></i></button>
                    </div>
                    <div className="text-center pb-3">
                        <h2 className="fw-bolder mb-0">{event.strEvent}</h2>
                        <p className="fw-bolder fs-4">le {dateFormat.toLocaleDateString("fr")} <span>à {timeEvent(event.strTime)}</span></p>
                    </div>
                    <div className="row w-100">
                        <div className="col d-flex flex-column align-items-center justify-content-center">
                            <img src={homeTeam.strTeamBadge} alt="" className="img-fluid" style={{width: 10+'rem'}} />
                            <p className="card-subtitle text-center fw-semibold pt-1 fs-3"> {event.strHomeTeam}</p>
                        </div>
                        <div className="col d-flex flex-column text-center border bg-dark border-3 rounded rounded-3 py-2 px-4 justify-content-center">
                            {event.intHomeScore && event.intAwayScore ?
                            (<>
                                <div className=" d-flex flex-row justify-content-around align-items-baseline">
                                    <span className="fw-medium score" style={{fontSize:3+'rem'}}>{event.intHomeScore}</span>
                                    <span className="fw-medium text-white" style={{fontSize:2+'rem'}}>VS</span>
                                    <span className="fw-medium score" style={{fontSize:3+'rem'}}>{event.intAwayScore}</span>
                                </div>
                                <div className="">
                                    <table className="table table_custom">
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th scope="col" className="text-white">Q1</th>
                                                <th scope="col" className="text-white">Q2</th>
                                                <th scope="col" className="text-white">Q3</th>
                                                <th scope="col" className="text-white">Q4</th>
                                                <th scope="col" className="text-white">PR</th>
                                            </tr>
                                        </thead>
                                        {event && <QuartersDetails result={event.strResult} />}
                                    </table>
                                </div>
                            </>) : (
                                <div className="awaitingResults">
                                    En attente des résultats...
                                </div>
                            )}
                        </div>
                        <div className="col d-flex flex-column align-items-center justify-content-center">
                            <img src={awayteam.strTeamBadge} alt="" className="img-fluid" style={{width: 10+'rem'}} />
                            <p className="card-subtitle text-center fw-semibold pt-1 fs-3" > {event.strAwayTeam}</p>
                        </div>
                    </div>
                </div>
            </div>
            )
    );
}

function QuartersDetails({result}) {

    const [qHome, qAway] =  result === undefined ? ["",""] :  extractNumberSeries(result)

    console.log(qHome)
    console.log(qAway)

    return(
        <tbody>
            <tr>
                <th className="text-white align-middle">LOC</th>
                {qHome.map((q)=>
                    <td className="score fs-4">{q}</td>
                )}
                {qHome.length==4 && <td className="score fs-4">-</td> }
            </tr>
            <tr>
                <th className="text-white align-middle">VIS</th>
                {qAway.map((q)=>
                    <td className="score fs-4">{q}</td>
                )}
                {qHome.length==4 && <td className="score fs-4">-</td> }
            </tr>
        </tbody>
    );

}




// Fonction pour afficher l'heure au format 
function timeEvent(strTime) {

    const parts = strTime.split(":")
    const hour = parts[0]
    const min = parts[1]

    const timeFormat = (hour < 10 ? '0' : '') + hour + 'H' + (min < 10 && min >0 ? '0' : '') + min
    return timeFormat
}

// Fonction pour extraire les séries de nombres dans 2 listes
function extractNumberSeries(input) {
    console.log("string en entré :",input)
    // Regex pour extraire les séries de nombres
    const regex = /\d+/g;
    //On obtient un tableau des correspondances entre la chaîne et la Regex
    const matches = input.match(regex);
    const qHome = [];
    const qAway = [];

    if (matches) {
        for (let i = 0; i < (matches.length/2); i ++) {
            qHome.push(Number(matches[i]));
            qAway.push(Number(matches[i+(matches.length/2) ]));
        }   
    }
    

    return [qHome, qAway];
}
import { useLoaderData, useOutletContext } from "react-router-dom"

export default function TeamDetails() {

    //Récupération du paramètre entré dans l'url, récupération de la liste des équipes et recherche de l'équipe dans la liste.
    const id = useLoaderData();
    const teams = useOutletContext();
    const team = teams.find(t => t.idTeam === id);
    console.log({team});
    let competitions = [];
    //On parcours les propriétés strLeague (de 2 à 7) de notre objet team pour vérifier la liste des compétitions dans lesquelles l'équipe est engagée. 
    for (let i = 2 ; i<8; i++) {
        const numLeague= `strLeague${i}`;
        if (team[numLeague] !== ""){
            competitions.push(team[numLeague])
        }
    }

    return (
        <div className="flex-grow-1 mx-5">
            <div className="container-sm ">
                <div className="mt-4 p-4 border border-3 border-dark rounded-4" style={{minHeight:23+"rem"}}>
                        <img src={team.strTeamBadge} alt=""  style={{maxHeight:20+"rem"}} className="float-start me-4 mb-4"/>
                        <div className="mx-4">
                            <h2 className="fw-bolder mt-2 mb-3">{team.strTeam}</h2>
                            <p className="">
                                {description(team)}
                            </p>
                        
                            <p className="fs-4 fw-bolder mb-1">Date de création : <span className="fs-5 fw-medium">{team.intFormedYear}</span> </p>
                            <p className="fs-4 fw-bolder mb-1">Compétitions :
                                <span className="ms-3 fs-5 fw-medium">{team.strLeague}</span>
                                {competitions.map(competition   => <span className="fs-5 fw-medium" key={team.strTeam+competition}>, {competition}</span>
                                )}
                            </p>
                    </div>
                </div>
                <div className="mt-4 p-4 border border-3 border-dark rounded-4">
                    <h3 className="mb-4">Informations complémentaires</h3>
                    <p className="ms-3 fs-5 fw-medium">Stade <span>{team.strStadium}</span> </p>
                    <p className="ms-3 fs-5 fw-medium">Ville : <span>{team.strStadiumLocation}</span></p>
                    <p className="ms-3 fs-5 fw-medium">Capacité : <span>{team.intStadiumCapacity} places</span> </p>
                   
                </div>
            </div>
        </div>
    )
}

function description (team) {
    if (team){
        if(team.strDescriptionFR){
            return team.strDescriptionFR
        }
        else if(team.strDescriptionEN){
            return team.strDescriptionEN
        }else {
            return "Pas de description disponible..."
        }
    }
}
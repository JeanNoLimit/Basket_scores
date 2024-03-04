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
            <div className="container-sm">
                <div className="mt-4 px-5 py-4 border border-3 border-dark rounded-4" >
                    <div className="pb-4" style={{minHeight:21.5+"rem"}}>
                        <img src={team.strTeamBadge} alt="" className="float-start me-4 mb-4" style={{maxHeight:20+"rem"}} />
                        <div className="">
                            <h1 className="fw-bolder mt-2 mb-3">{team.strTeam}</h1>
                            <p className="">
                                {description(team)}
                            </p>
                           
                        </div>
                    </div>
                    <p className="fs-4 fw-bolder mb-1">Date de création : <span className="fs-5 fw-medium">{team.intFormedYear}</span> </p>
                    <p className="fs-4 fw-bolder mb-1">Compétitions :
                        <span className="ms-3 fs-5 fw-medium">{team.strLeague}</span>
                        {competitions.map(competition   => <span className="fs-5 fw-medium" key={team.strTeam+competition}>, {competition}</span>
                        )}
                    </p>
                    <p className="fs-4 fw-bolder mb-1">Localisation : <span className="fs-5 fw-medium">{team.strStadium}, {team.strStadiumLocation} </span> </p>
                    {team.intStadiumCapacity && <p className="fs-4 fw-bolder mb-1">Capacité : <span className="fs-5 fw-medium">{team.intStadiumCapacity} places</span> </p>}

                    <div className="w-100 fs-2 d-flex justify-content-center pt-4">
                        {team.strFacebook && <a href={`https://${team.strFacebook}`} className="mx-3" target="_blank"><img src="/src/assets/facebook_logo.png" alt="lien vers facebook" style={{height:60}}/></a>}
                        {team.strInstagram && <a href={`https://${team.strInstagram}`} className="mx-3" target="_blank"><img src="/src/assets/instagram_icon.png" alt="lien vers instagram" style={{height:60}}/></a>}
                        {team.strTwitter && <a href={`https://${team.strTwitter}`} className="mx-3" target="_blank"><img src="/src/assets/X_logo_2023.svg.png" alt="lien vers twitter" style={{height:60}}/></a>}
                       {team.strWebsite && <a href={`https://${team.strWebsite}`} className="mx-3" target="_blank"><img src="/src/assets/logo-websites.png" alt="lien vers site du club" style={{height:60}}/></a>}
                    </div>
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
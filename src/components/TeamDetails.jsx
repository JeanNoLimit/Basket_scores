import { useLoaderData, useOutletContext } from "react-router-dom"

export default function TeamDetails() {

    //Récupération du paramètre entré dans l'url, récupération de la liste des équipes et recherche de l'équipe dans la liste.
    const id = useLoaderData();
    const teams = useOutletContext();
    const team = teams.find(t => t.idTeam === id);
    console.log(team);

    return (
        <div>
            <p>ICI BIENTOT DETAIL D'EQUIPE....</p>
        </div>
    )
}
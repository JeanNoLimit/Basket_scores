import { useState } from 'react'
import '../styles/Home.css'
import {DisplayEvents} from './DisplayEvents.jsx'
import {EventDetails} from './EventDetails.jsx'
import { useOutletContext } from "react-router-dom"

function Home() {

  //Récupération de la liste des équipes gràce à Outlet context. (React Router) 
  const teams = useOutletContext();
  const nbJournee = ((teams.length*2)-2);

  //Pour l'affichage du détail d'un évènement
  const[eventId, setEventId] = useState([0]);
  const[eventSelected, setEventSelected] = useState([]);
  const[isSelected, setIsSelected] = useState(false)

  //Fonction callback permettant la fermetur du composant EventDetails. Fermeture au clique sur bouton fermé dans le composant. Fermeture en cas de changement de journée.
  const handleModalClose = () => {
    setIsSelected(false)
  }
  

  return (
    <>
      <DisplayEvents 
        nbJournee={nbJournee} 
        teams={teams} 
        eventId={eventId} 
        setEventSelected={setEventSelected} 
        setEventId={setEventId}
        setIsSelected={setIsSelected}
        handleModalClose={handleModalClose}
      />
      { isSelected && <EventDetails event={eventSelected} teams={teams} handleModalClose={handleModalClose}/> }
      <div className="">
          <img src="/img/basketball-background-illustration-ai-generative-min.jpg" alt="image fond d'écran basket score" className="img-fluid"/>
      </div>
    </>
  )
}



export default Home;



/**
 * 
 * Appeler une API dans un composant fonctionnel React : https://techblog.ingeniance.fr/appeler-une-api-dans-un-composant-fonctionnel-react/
 * Rappel fonctionnement fetch : https://fr.javascript.info/fetch
 * 
 * 
 * 
 */


/**
 * 
 * Cette partie du code provient de la version initiale de l'application. L'appel de l'API s'effectue depuis le Router de React Route
 * 
 * On va récupérer le résultat de l'API dans cette variable. 
 * const [teams, setTeams] = useState({});
 * Va nous servir à vérifier si la liste des équipes à déjà été chargé, pour ne pas appeler l'API à chaque chargement du composant.
 * On utilise useRef car cette variable n'est pas lié à un element à render. On évite ainsi un re-render après modification.
 * const isMounted = useRef(false);
 * const [nbJournee, setNbJournee] = useState(45);
 * 
 *   
 * Appel de l'API sportdb pour récupérer la liste des équipes du championnat.
 * Cela va nous permettre de connaitre le nombre de journée par saison et l'affichage du détail des équipes par la suite...
 *
 * useEffect(() => {   
 * if(isMounted.current == false) {
 *    async function fetchTeams() {
 *
 *     try { 
 *       const response = await fetch(`https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=French%20LNB`)
 *       const data = await response.json();
 *       setTeams(data.teams); 
 *       setNbJournee((data.teams.length*2)-2);
 *       isMounted.current = true;  
 *      }  
 *     catch (error) {
 *       console.log(error);
 *     }
 *     finally {
 *      // sera utile plus tard, lorsqu'une barre de chargement sera visible sur le site.
 *     }
 *   }
 *   fetchTeams();
 *   }
 * }, []);
 * 
 * 
 * 
 */
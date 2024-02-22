import { useState ,useEffect, useRef } from 'react'
import '../styles/Home.css'
import {Select} from './form/Select.jsx'
import {DisplayEvents} from './DisplayEvents.jsx'
import {EventDetails} from './EventDetails.jsx'

function Home() {

  // On va récupérer le résultat de l'API dans cette variable.
  const [teams, setTeams] = useState({});
  // Va nous servir à vérifier si la liste des équipes à déjà été chargé, pour ne pas appeler l'API à chaque chargement du composant.
  // On utilise useRef car cette variable n'est pas lié à un element à render. On évite ainsi un re-render après modification.
  const isMounted = useRef(false);
  const [nbJournee, setNbJournee] = useState(45);
  const [numJournee, setNumJournee] = useState(1);

  //Pour l'affichage du détail d'un évènement
  const[eventId, setEventId] = useState([0]);
  const[eventSelected, setEventSelected] = useState([]);
  const[isSelected, setIsSelected] = useState(false)

  /**
   * Appel de l'API sportdb pour récupérer la liste des équipes du championnat.
   * Cela va nous permettre de connaitre le nombre de journée par saison et l'affichage du détail des équipes par la suite...
   */
  useEffect(() => {   
    if(isMounted.current == false) {
      async function fetchTeams() {

        try { 
          const response = await fetch(`https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=French%20LNB`)
          const data = await response.json();
          setTeams(data.teams); 
          setNbJournee((data.teams.length*2)-2);
          isMounted.current = true;  
        }  
        catch (error) {
          console.log(error);
        }
        finally {
         // sera utile plus tard, lorsqu'une barre de chargement sera visible sur le site.
        }
      }
      fetchTeams();
    }
    
  }, []);

  //Fonction callback permettant la fermetur du composant EventDetails. Fermeture au clique sur bouton fermé dans le composant. Fermeture en cas de changement de journée.
  const handleModalClose = () => {
    setIsSelected(false)
  }
  console.log(isSelected);

  return (
    <>
      <div className="events-results">
        <SearchBar nbJournee={nbJournee} onChange={setNumJournee} handleModalClose={handleModalClose}/>
        <DisplayEvents 
          numJournee={numJournee} 
          teams={teams} 
          eventId={eventId} 
          setEventSelected={setEventSelected} 
          setEventId={setEventId}
          setIsSelected={setIsSelected}
        />
      </div>
      { isSelected && <EventDetails event={eventSelected} teams={teams} handleModalClose={handleModalClose}/> }
      <div className="">
          <img src="/img/basketball-background-illustration-ai-generative-min.jpg" alt="image fond d'écran basket score" className="img-fluid"/>
      </div>
    </>
  )
}

/**
 * formulaire de recherche des matchs par journée.
 * 
 * @param {int} nbJournee 
 * @returns {JSX.Element} 
 */
function SearchBar({nbJournee, onChange,handleModalClose }) {
  
  return (
    <div className="d-flex flex-row align-items-center justify-content-between w-100 px-5 pt-3">
      <h2 className="text-center text-uppercase fs-4 m-0">Résultats par journée </h2>
      <Select 
        nbJournee = {nbJournee}
        onChange={onChange} 
        handleModalClose={handleModalClose}
      />
    </div>
  )
}




export default Home;



/**
 * 
 * Appeler une API dans un composant fonctionnel React : https://techblog.ingeniance.fr/appeler-une-api-dans-un-composant-fonctionnel-react/
 * Rappel fonctionnement fetch : https://fr.javascript.info/fetch
 * 
 */
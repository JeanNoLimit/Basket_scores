import { useState ,useEffect, useRef } from 'react'
import '../styles/App.css'
import {Select} from './form/Select.jsx'
import {DisplayEvents} from './DisplayEvents.jsx'


function App() {

  // On va récupérer le résultat de l'API dans cette variable.
  const [teams, setTeams] = useState({});
  // Va nous servir à vérifier si la liste des équipes à déjà été chargé, pour ne pas appeler l'API à chaque chargement du composant.
  // On utilise useRef car cette variable n'est pas lié à un element à render. On évite ainsi un re-render après modification.
  const isMounted = useRef(false);
  const [nbJournee, setNbJournee] = useState(45);
  const [numJournee, setNumJournee] = useState(1);

  // console.log(numJournee)
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
  console.log('les équipes dans app:')
  console.log(teams)
  return (
    <>
      <SearchBar nbJournee={nbJournee} onChange={setNumJournee}/>
      <h2 className="text-center">Résultats des matchs de la {numJournee==1?  <>{numJournee}<sup>ère</sup></> : <>{numJournee}<sup>eme</sup></>} journée  </h2>
      <DisplayEvents numJournee={numJournee} teams={teams}/>
    </>
  )
}

/**
 * formulaire de recherche des matchs par journée.
 * 
 * @param {int} nbJournee 
 * @returns {JSX.Element} 
 */
function SearchBar({nbJournee, onChange }) {
  
  return <div className="">
    <div className="position-relative w-100" style={{ height: 80 }}>
      <Select 
        nbJournee = {nbJournee}
        onChange={onChange} 
      />
      
    </div>
  </div>
}




export default App;



/**
 * 
 * Appeler une API dans un composant fonctionnel React : https://techblog.ingeniance.fr/appeler-une-api-dans-un-composant-fonctionnel-react/
 * Rappel fonctionnement fetch : https://fr.javascript.info/fetch
 * 
 */
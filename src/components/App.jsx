import { useState ,useEffect } from 'react'
import '../styles/App.css'
import {Select} from './form/Select.jsx'


function App() {

  // On va récupérer le résultat de l'API dans cette variable.
  const [teams, setTeams] = useState([]);
  // Va nous servir à vérifier si la liste des équipes à déjà été chargé, pour ne pas appeler l'API à chaque chargement du composant
  const [isMounted, setIsMounted] = useState(false);
  const [nbJournee, setNbJournee] = useState(0);


  /**
   * Appel de l'API sportdb pour récupérer la liste des équipes du championnat.
   * Cela va nous permettre de connaitre le nombre de journée par saison et l'affichage du détail des équipes par la suite...
   */
  useEffect(() => {   
    async function fetchTeams() {
      if(!isMounted) {
        try {
          const response = await fetch(`https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=French%20LNB`);
          await response.json().then((json) => {
            setTeams(json); 
            setNbJournee((json.teams.length*2)-2);
            setIsMounted(true);
          } );
        }  
        catch (error) {
          console.log(error);
        }
        finally {
         // sera utile plus tard, lorsqu'une barre de chargement sera visible sur le site.
        }
      }
    }
    fetchTeams();
  }, []);

  return (
    <>
      <SearchBar nbJournee={nbJournee} />
    </>
  )
}


/**
 * formulaire de recherche des matchs par journée.
 * 
 * @param {int} nbJournee 
 * @returns {JSX.Element} 
 */
function SearchBar({nbJournee}) {
  
  return <div>
    <div className="mb-3">
      <Select nbJournee = {nbJournee}/>
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
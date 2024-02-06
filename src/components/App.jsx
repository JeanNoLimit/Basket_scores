import { useState ,useEffect } from 'react'
import '../styles/App.css'
import {Select} from './form/Select.jsx'
import api from './api/api.jsx'

function App() {

  // On va récupérer le résultat de l'API dans cette variable.
  const [teams, setTeams] = useState([]);
  // Va nous servir à vérifier si la liste des équipes à déjà été chargé, pour ne pas appeler l'API à chaque chargement du composant
  const [isMounted, setIsMounted] = useState(false);

  const [nbJournee, setNbJournee] = useState(0);

  useEffect(() => {
  
      async function searchTeams() {
        await api.getTeams().then((json) => {
          setTeams(json);
          setNbJournee((json.teams.length*2)-2);
          setIsMounted(true);
        });
      } 
      searchTeams();
  }, [])

  console.log(teams)
  // console.log(isMounted)
  return (
    <>
      <SearchBar nbJournee={nbJournee} />
    </>
  )
}

function SearchBar({nbJournee}) {
  
  return <div>
    <div className="mb-3">
      <Select nbJournee = {nbJournee}/>
    </div>
  </div>
}



export default App;

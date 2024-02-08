import { useState ,useEffect } from 'react'
    
/**
 * 
 * @param {int} numJournee 
 * @returns 
 */
export function DisplayEvents({numJournee}) {
  
    const[events, setEvents] = useState([]);
    console.log(numJournee)
  
    useEffect(() => {
      async function fetchEvents() {
        try {
          const requete = "https://www.thesportsdb.com/api/v1/json/3/eventsround.php?id=4423&r="+numJournee+"&s=2023-2024";
          const response = await fetch(requete)
          await response.json().then((json) => {
            setEvents(json.events);
          } );
         
        }
        catch (err) {
          console.log(err);
        }
      }
      fetchEvents()
    }, [numJournee]);
  
    console.log(events);
    console.log("render events")
    return <>
    </>
  }
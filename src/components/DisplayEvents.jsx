import { useState ,useEffect } from 'react'
import { Card } from "./Card.jsx"
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Loading } from './Loading.jsx'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '/src/styles/swiper.css';

// import required modules
import { Navigation, FreeMode } from 'swiper/modules';


export function DisplayEvents({numJournee, teams, eventId,setEventId, setEventSelected, setIsSelected}) {
  
    const[events, setEvents] = useState([]);
    const[loading, setIsLoading] = useState(false);
    // Appel API, récupère les évènements d'une journée
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
        finally {
          setIsLoading(true);
        }
      }
      console.log("appel API events journee:"+ numJournee)
      fetchEvents()
    }, [numJournee]);

    //Lorsqu'on clique sur un bouton détail dans une Card, on récupère l'évènement en question pour l'afficher dans EventDetails.
    useEffect(() => {
      console.log(eventId);
      setEventSelected(events.find((event) => event.idEvent === eventId));
    },[eventId])
   
    return (
      <>
        {loading == false && <Loading /> }
        <Swiper  
          slidesPerView={"auto"}
          
          freeMode={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          modules={[Navigation, FreeMode]} 
          className="mySwiper pt-3 pb-2 px-3"
        >
          {events.map((event) => 
            <SwiperSlide key={event.idEvent}>
              <Card event={event} teams={teams} key={event.idEvent} setEventId={setEventId} setIsSelected={setIsSelected}/>
            </SwiperSlide>
          )}
          <div className="pt-2 px-4 text-center fs-4">
              <SlidePrevButton />
              <SlideNextButton />
          </div>
        </Swiper>
      </>
    );
  }


  export function SlideNextButton() {
    const swiper = useSwiper();
  
    return (
      <i onClick={() => swiper.slideNext()} className="fa-solid fa-chevron-right games-nav"></i>
    );
  }

  export function SlidePrevButton() {
    const swiper = useSwiper();
  
    return (
      <i onClick={() => swiper.slidePrev()} className="fa-solid fa-chevron-left px-5 games-nav"></i>
    );
  }
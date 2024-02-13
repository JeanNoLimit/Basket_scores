import { useState ,useEffect } from 'react'
import { Card } from "./Card.jsx"
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '/src/styles/swiper.css';

// import required modules
import { Navigation, FreeMode } from 'swiper/modules';

/**
 * 
 * @param {int} numJournee 
 * @returns 
 */
export function DisplayEvents({numJournee, teams}) {
  
    const[events, setEvents] = useState([]);
  
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
      console.log("appel API events journee:"+ numJournee)
      fetchEvents()
    }, [numJournee]);
  

    return <Swiper  
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
    className="mySwiper py-3 px-3">
      {events.map((event) => 
        <SwiperSlide><Card event={event} teams={teams} key={event.idEvent} /></SwiperSlide>
      )}
      <div className="pt-4 px-4 float-end fs-4">
          <SlidePrevButton />
          <SlideNextButton />
      </div>
     
    </Swiper>
  }


  function SlideNextButton() {
    const swiper = useSwiper();
  
    return (
      <i onClick={() => swiper.slideNext()} className="fa-solid fa-chevron-right games-nav"></i>
    );
  }

  function SlidePrevButton() {
    const swiper = useSwiper();
  
    return (
      <i onClick={() => swiper.slidePrev()} className="fa-solid fa-chevron-left px-5 games-nav"></i>
    );
  }
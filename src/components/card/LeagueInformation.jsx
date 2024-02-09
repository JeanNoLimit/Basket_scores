export function LeagueInformation({numJournee, date}) {

    const dateFormat = new Date(date);

    return <div className="w-100 d-flex flex-row justify-content-around align-items-center pb-2">
                <img src="/src/assets/lnb_banner.png" alt="banière lnb" className="img-banner"/>
                <p className="m-0 text-secondary-emphasis fw-medium text-uppercase">{numJournee==1?  <>{numJournee}ère</> : <>{numJournee}eme</>} journée - {dateFormat.toLocaleDateString("fr")}</p>
            </div>
    
}
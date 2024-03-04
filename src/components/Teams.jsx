import { 
    Outlet,
    useOutletContext,
    NavLink
} from "react-router-dom"
import '../styles/teams.css'

export default function Teams() {
    
    const teams = useOutletContext();

    return (
       <>
       <div className="d-flex flex-row flex-wrap justify-content-center mt-3">
            <div>
                <button className="btn btn-secondary d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">Selection d'une équipe</button>
                
                <div className="offcanvas-lg offcanvas-start" tabIndex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel" style={{minWidth:280}}>
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title text-uppercase" id="offcanvasResponsiveLabel">Les équipes</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body ">
                        <div className="d-flex flex-column flex-shrink-0 p-3 m-0 ">
                            <ul className="nav nav-pills flex-column mb-auto">
                                {teams.map((team) =>
                                <li className="nav-item" key={team.idTeam}>
                                    <NavLink className="nav-link link-dark" aria-current="page" to={`/teams/${team.idTeam}`}>
                                        <img src={team.strTeamBadge} alt="" style={{height: 2 + "rem"}}/>
                                        <span className="ps-2 fw-medium">{team.strTeam}</span>
                                    </NavLink>
                                </li>
                                
                                )}
                            
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        <Outlet context={ teams }/>
       </div>
       
       </>
    )
}
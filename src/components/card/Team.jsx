import { Link } from "react-router-dom";

export function Team({teamName, logo, idTeam}) {

    return <div className="col equal-height-col">
                <Link className="text-decoration-none link-dark" to={`/teams/${idTeam}`}>
                    <div className="d-flex flex-column align-items-center">
                        <img src={logo} alt="" className="img-fluid team-logo" />
                        <p className="card-subtitle text-center fw-semibold pt-1 team-name lh-sm"> {teamName}</p>
                    </div>
                </Link>
            </div>
    
}
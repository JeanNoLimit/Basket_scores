export function Team({teamName, logo}) {

    return <div className="col equal-height-col">
                <a href="#" className="text-decoration-none link-dark">
                    <div className="d-flex flex-column align-items-center">
                        <img src={logo} alt="" className="img-fluid team-logo" />
                        <p className="card-subtitle text-center fw-semibold pt-1 team-name lh-sm"> {teamName}</p>
                    </div>
                </a>
            </div>
    
}
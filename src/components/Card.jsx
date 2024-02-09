import "../styles/Card.css";

export function Card() {

    return <>
        <div className="card shadow border-0 rounded-5 score-card" >
            <div className="p-3 ">
                <div className="w-100 d-flex flex-row justify-content-around align-items-center pb-2">
                    <img src="/src/assets/lnb_banner.png" alt="banière lnb" className="img-banner"/>
                    <p className="m-0 text-secondary-emphasis fw-medium text-uppercase">15e journee - 20.03.2024</p>
                </div>
                <div className="row align-items-center">
                    <div className="col equal-height-col">
                        <a href="#" className="text-decoration-none link-dark">
                            <div className="d-flex flex-column align-items-center">
                                <img src="/public/img/blois.png" alt="" className="img-fluid team-logo" />
                                <p className="card-subtitle text-center fw-semibold pt-1 team-name"> Ada blois</p>
                            </div>
                        </a>
                    </div>
                    <div className="col d-flex flex-column justify-content-around align-items-center score-container">
                        <div className="score-display">
                            <span className="fw-medium">78</span>
                            <span className="fw-medium">-</span>
                            <span className="fw-medium">85</span>
                        </div>
                        <button type="button" className="btn btn-outline-dark rounded-pill border border-dark border-1 fw-medium btn-sm w-100">Détails</button>
                    </div>
                    <div className="col">
                        <a href="#" className="text-decoration-none link-dark">
                            <div className="d-flex flex-column align-items-center">
                                <img src="/public/img/monaco.png" alt="" className="img-fluid team-logo" />
                                <p className="card-subtitle text-center fw-semibold pt-1 team-name" > As Monaco</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div> 
            <div className="w-100 rounded-bottom-5 d-flex align-items-center justify-content-center location-wrapper">
                {/* <!-- Penser à modifier icon fontawsome pour React --> */}
                <div className="d-flex flex-row align-items-baseline text-white fw-medium">
                    <i className="fa-solid fa-location-dot"></i><p className="ps-2 m-0">Stade de Ada Blois</p>
                </div>
            </div>
        </div>
    </>
}
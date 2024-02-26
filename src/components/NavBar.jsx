import {
    Outlet, 
    Link, 
    useNavigation,
    useLoaderData,
} from 'react-router-dom'
import "../styles/loader.css"

export default function NavBar() {

    const { teams } = useLoaderData(); 
    const navigation = useNavigation();

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white fw-medium fs-5 text-dark text-uppercase">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={`/`}><img className="mx-3" src="/img/logo/logo_basket_score.png" alt="logo basket scores" height="55" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to={`/`}>Accueil</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`teams`}>Les équipes</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div>
                <div id="chargement" className={navigation.state === "loading" ? "loading" : ""}>
                    <div className="contener_animation">
                        <div align="center" syle="width:90px; height:115px;">
                            <div className="contener_ball">
                            <div className="ball_bleu"></div>
                        </div>
                            <div className="ombre_bleu"></div>
                        </div>
                    </div>
                    
                </div>
                <Outlet context={ teams }/>
            </div>
          
        </>
    )
}
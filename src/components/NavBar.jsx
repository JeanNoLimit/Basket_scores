import {
    Outlet, 
    Link,
    NavLink, 
    useNavigation,
    useLoaderData,
} from 'react-router-dom'

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
                                <NavLink className="nav-link" aria-current="page" to={`/`}>Accueil</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={`teams`}>Les équipes</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div>
                <Outlet context={ teams }/>
            </div>
          
        </>
    )
}
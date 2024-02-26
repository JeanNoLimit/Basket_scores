import { Outlet } from "react-router-dom"

export default function Teams() {
    
    return (
       <>
       <div style={{width:280}}>
        <button class="btn btn-primary d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">Toggle offcanvas</button>

        <div class="offcanvas-lg offcanvas-end" tabindex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasResponsiveLabel">Responsive offcanvas</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <ul className="">
                    <li>
                        equipe1
                    </li>
                    <li> equipe2</li>
                </ul>
            </div>
        </div>

       </div>
        <Outlet />
       </>
    )
}
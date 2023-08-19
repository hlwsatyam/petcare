import { Outlet, Link } from "react-router-dom";
const NavBar = () => {

    return (
        <>
        <header>

            
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">                   
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                      <button className="btn btn-outline-warning" type="button">Apply Dark Theme</button>

                        <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                            
                            <li className="nav-item">
                                <Link to='/' className="nav-link active" aria-current="HomePage">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/shop' className="nav-link">Shop Now</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/consult' className="nav-link">Consult</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/contact' className="nav-link">Contact</Link>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </header>
        <Outlet />
        </>
    )
}

export default NavBar;
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './Header.scss';

function Header() {
    const location = useLocation();

     // Check if the current pathname matches the desired page
    const path = location.pathname;
    // let isPageVisible = path === '/';
    // console.log(path)

    //show search bar by btn click
    const [active, setActive] = useState(false);

    const handleActive = event =>{
        setActive(current => !current);
    }


  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <Link className="navbar-brand fancy-text" to="/">Deepti</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item"><Link className={path === '/#about' ? "nav-link active about-link" : "nav-link about-link" } to="#about">About</Link></li>
                    <li className="nav-item"><Link className={path === '/#skill' ? "nav-link active skill-link" : "nav-link skill-link" } to="#skill">Skill</Link></li>
                    <li className="nav-item"><Link className={path === '/#projects' ? "nav-link active project-link" : "nav-link project-link" } to="/#projects">Project</Link></li>                    
                    <li className="nav-item"><Link className={path === '/#contact' ? "nav-link active contact-link" : "nav-link contact-link" } to="/contact">Contact</Link></li>                    
                </ul>
                {/* if you want to show only homepage search bar add this one */}
                {/* 
                    {
                        (isPageVisible) && 
                        <div className='search-box d-flex me-2'>
                            <button className='search-btn btn border-0' id='searchBtn' onClick={() => {setShow(currentShow => !currentShow); setSearch(currentIcon => !currentIcon);}}><i className={search ? 'far fa-search' : 'text-danger far fa-times-circle'}></i></button>
                            { show ? 
                                <form className="d-flex home-search" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form> : null
                            }
                        </div>
                    }
                */}
                    <div className='search-box d-flex me-2'>
                        <button className='search-btn btn border-0' id='searchBtn' onClick={() => handleActive()}><i className={!active ? 'far fa-search' : 'text-danger far fa-times-circle'}></i></button>
                        { active ? 
                            <form className="d-flex home-search" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form> : null
                        }
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Header;
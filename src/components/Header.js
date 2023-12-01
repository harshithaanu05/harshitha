import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {

    const [showMenu,setShowMenu]= useState(false);
  return (
  <header className="header" id="header">
    <nav className="nav container">
        <Link to ="/" className="nav__logo">
            Tra<spam>vlr</spam>
            </Link>
        <div className={'nav__menu ${showMenu ? "show-menu" : ""}'} 
        id="nav-menu"
        >
            <ul className="nav__list">
                <li class="nav__item">
                   <Link to ="/" class= "nav__link active">
                    Home
                    </Link>
                    </li>         
                    <li className="nav__item">
                        <Link to ="/about" className="nav__link">
                            About
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to ="/tour-Package" className="nav__link">
                            Tour Package
                            </Link>
                           </li>
                           <li className="nav__item">
                          <Link to="/login" className="nav__link">
                              Login
                            </Link>
                           </li>
                       </ul>
                </div>
                <div className="nav__toggle" onClick={()=> setShowMenu(!showMenu)}>
                    <i className="bx bx-menu"></i>
                </div>
    </nav>
  </header>
  );   
};

export default Header;



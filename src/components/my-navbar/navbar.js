import React, { Component, useEffect, useState } from 'react'
import './navbar.css';
import { MenuItems } from './menuItems';
import { HashLink } from 'react-router-hash-link';

function Navbar() {
    const [navbar, setNavbar] = useState(false);
    const [clicked, handleClick] = useState(false);


    const changeBackground = () => {
        if (window.scrollY >= 60) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <nav className={navbar ? 'navbar-active' : 'navbar'}>
             <div className="logo">
                <h1><HashLink className="username" smooth to="#">andreatanky</HashLink></h1>
            </div>
            <div className="menu-icon" onClick={() => handleClick(!clicked)}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className='nav-menu'>
                {MenuItems.map((item, index) => {
                    return (
                        <li><HashLink className="nav-links" smooth to={item.url}>{item.title}</HashLink></li>
                    )
                })}
            </ul>
        </nav>
    )
}

// class Navbar extends Component {

//     const [navbar, setNavBar] = useState(false);
//     render() {
//         return (
//             <nav>
//                 <header className="NavbarItems">
//                 <div className="logo">
//                     <h1 href="#">andreatanky</h1>
//                 </div>
//                 <ul className='nav-menu'>
//                     {MenuItems.map((item, index) => {
//                         return (
//                             <li><a className={item.cName} href={item.url}>{item.title}</a></li>
//                         )
//                     }
//                     )}
//                 </ul>
//                 </header>
//             </nav>
//         )
//     }
// }

export default Navbar;
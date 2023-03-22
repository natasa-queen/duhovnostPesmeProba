import React, { useState } from 'react'
import { Link } from 'gatsby'
import "../assets/css/navbar.scss"
// import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {

    const [show, setShow] = useState(false)

    return (

        <nav>
            <div className='logo'>
                <h2>N.T.</h2>
            </div>

            <ul className={show ? `menu-items active` : `menu-items`}>
                <li><Link to='/' onClick={() => setShow(false)}>Početna</Link></li>
                <li><Link to='/' onClick={() => setShow(false)}>O meni</Link></li>
                <li><Link to='/recepti' onClick={() => setShow(false)}>Recepti</Link></li>
                <li><Link to='/' onClick={() => setShow(false)}>Kontakt</Link></li>
            </ul>

            <div className="hamburger hidden" onClick={() => setShow(!show)}>
                <span className={show ? `bar active` : 'bar'}></span>
                <span className={show ? `bar active` : 'bar'}></span>
                <span className={show ? `bar active` : 'bar'}></span>
            </div>
        </nav>
    );
}

export default Navbar;

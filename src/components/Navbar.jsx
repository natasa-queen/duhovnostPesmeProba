import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import "../assets/css/navbar.scss";
// import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {

    const [show, setShow] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShow(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav>
            <div className='logo'>
                <Link to='/'><h2>Nataša Tofil</h2></Link>
            </div>

            <ul ref={menuRef} className={show ? `menu-items active` : `menu-items`}>
                <li><Link to='/' onClick={() => setShow(false)}>Početna</Link></li>
                {/* <li><Link to='/' onClick={() => setShow(false)}>O meni</Link></li> */}
                {/* <li><Link to='/recepti' onClick={() => setShow(false)}>Recepti</Link></li> */}
                <li><Link to='galerija' onClick={() => setShow(false)}>Galerija</Link></li>
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




// import React, { useState } from 'react'
// import { Link } from 'gatsby'
// import "../assets/css/navbar.scss"
// // import 'bootstrap/dist/css/bootstrap.min.css';
//
// function Navbar() {
//
//     const [show, setShow] = useState(false)
//
//     return (
//
//         <nav>
//             <div className='logo'>
//                 <Link to='/'><h2>Nataša Tofil</h2></Link>
//             </div>
//
//             <ul className={show ? `menu-items active` : `menu-items`}>
//                 <li><Link to='/' onClick={() => setShow(false)}>Početna</Link></li>
//                 {/* <li><Link to='/' onClick={() => setShow(false)}>O meni</Link></li> */}
//                 {/* <li><Link to='/recepti' onClick={() => setShow(false)}>Recepti</Link></li> */}
//                 <li><Link to='galerija' onClick={() => setShow(false)}>Galerija</Link></li>
//             </ul>
//
//             <div className="hamburger hidden" onClick={() => setShow(!show)}>
//                 <span className={show ? `bar active` : 'bar'}></span>
//                 <span className={show ? `bar active` : 'bar'}></span>
//                 <span className={show ? `bar active` : 'bar'}></span>
//             </div>
//         </nav>
//     );
// }
//
// export default Navbar;

import React from 'react'
import '../assets/css/footer.scss'

import { FaSquareFacebook, FaSquareInstagram } from "react-icons/fa6";
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";

const Footer = () => {
    
    let date =  new Date().getFullYear();
    
    return (
        <footer>
            <div className="fbox1">
                <a href="https://www.instagram.com/natasa_tofil/"><AiOutlineInstagram /></a>
                <a href="https://www.facebook.com/natasa.tofil"><AiOutlineFacebook /></a>
            </div>
            <div className="fbox2">
                <em>&copy; {date} N.T.</em>
            </div>
        </footer>
    )
}

export default Footer
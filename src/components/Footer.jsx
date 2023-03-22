import React from 'react'
import '../assets/css/footer.scss'

const Footer = () => {
    
    let date =  new Date().getFullYear();
    
    return (
        <footer>
            <div className="fbox1">

            </div>
            <div className="fbox2">
                <p>&copy; {date} N.T.</p>
            </div>
        </footer>
    )
}

export default Footer
import React from 'react'
import { StaticImage } from "gatsby-plugin-image"


function HeaderSlika() {

    return (
      <div>
        
        <StaticImage
            src="../assets/images/nati2.jpg"
            alt="Opis slike"
            className='mala-slika header-slika'
            placeholder="blurred"
            layout="fullWidth"
            style={{height: "100vh"}}
            transformOptions={{ grayscale: true }}
        />

        <StaticImage
            src="../assets/images/nati1.jpg"
            alt="Opis slike"
            className='velika-slika header-slika'
            placeholder="blurred"
            layout="fullWidth"
            style={{height: "100vh"}}
            transformOptions={{ grayscale: true }}
        />

      </div>
    )
  }
  
  export default HeaderSlika



import React from 'react'
// import { graphql  } from 'gatsby'
// import Img from 'gatsby-image'

// import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { StaticImage } from "gatsby-plugin-image"

import '../assets/css/header.scss'


export default function Header({ data }) {

    // const image = getImage(data.file.childImageSharp)

    // const [sirina, setSirina] = useState(window.innerWidth)

    


    return (

        <header className='header'>
            

            {/* <h2>Ovo je header</h2> */}
            
            {/* <Img fluid={data.file.childImageSharp.fluid} /> */}

            {/* <GatsbyImage image={image} alt="slika" /> */}
            

            <StaticImage
                // src={  sirina <= 400 ? '../assets/images/nati1.jpg' : '../assets/images/nati2.jpg' }

                // srcset="../assets/images/nati1.jpg 500w"
                // sizes="(max-width: 550px) 500px"

                src='../assets/images/nati2.jpg'


                alt="slika"
                placeholder="blurred"
                layout="fullWidth"
                style={{height: "100vh"}}
                className='header-slika'
                // width={100}
                // height={100%}
            />


        </header>
    )
}

// export const query = graphql`
//     query Slika {
//         file(relativePath: {eq: "images/nati1.jpg"}) {
//         childImageSharp {
//             gatsbyImageData(
//                 width: 200
//                 placeholder: BLURRED
//                 formats: [AUTO, WEBP, AVIF]
//               )
//         }
//         }
//     }
// `




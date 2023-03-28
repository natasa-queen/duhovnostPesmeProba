import React from "react"
import '../assets/css/spisak-pesama.scss'
import '../assets/css/pocetna.scss'
import '../assets/css/lista-pesama.scss'

import { graphql, useStaticQuery, Link } from 'gatsby'
import slugify from "slugify"


const query = graphql`
query {
    allContentfulPesma(sort: {datum: ASC}) {
        nodes {
            title
            datum(locale: "sr")
            id
        }
    }
}
`


 const SpisakPesama = () => {

    const data = useStaticQuery(query)

    const pesme = data.allContentfulPesma.nodes

  
    return (
        <>
       
        <div className="lista-pesama">
          {pesme.map(pesma => (

            <Link to={`${slugify(pesma.title,{lower:true})}`} key={pesma.id}>
              <h1>{ pesma.title }</h1>
            </Link>
          ))}
  
        </div> 
        </>
    )
  }

  export default SpisakPesama



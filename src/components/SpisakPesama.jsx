import React from "react"
import '../assets/css/spisak-pesama.scss'
import '../assets/css/pocetna.scss'
import '../assets/css/lista-pesama.scss'

import { graphql, useStaticQuery, Link } from 'gatsby'
import slugify from "slugify"


const query = graphql`
  query {
    allContentfulPesme(sort: {datum: DESC}) {
      nodes {
        naslov
        datum(formatString: "D.M.YYYY.")
        id
        pesma1 {
            pesma1
        }
      }
    }
  }
`

 const SpisakPesama = () => {

    const data = useStaticQuery(query)

    const pesme = data.allContentfulPesme.nodes

  
    return (
        <>
       
          <div className="lista-pesama">

            {pesme.map(pesma => {
                const { naslov, id } = pesma
                const slug = slugify(naslov, {lower:true})

                return (
                    <Link key={id} to={`/${slug}`}><h1>{pesma.naslov}</h1></Link>
                )
            })}

          </div>

        </>
    )
  }

  export default SpisakPesama



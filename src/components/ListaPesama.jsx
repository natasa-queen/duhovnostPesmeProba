import * as React from "react";
import { graphql, useStaticQuery, Link } from 'gatsby';
import "../assets/css/pocetnaListaPesama.scss";

import { FaHandsPraying } from "react-icons/fa6";


const Lista = () => {

    const data = useStaticQuery(graphql`
        query {
          allFile(
            filter: {relativeDirectory: {eq: "pesme"}}
            sort: {childMarkdownRemark: {frontmatter: {datum: DESC}}}
          ) {
            totalCount
            edges {
              node {
                id
                childMarkdownRemark {
                  frontmatter {
                    title
                    datum
                  }
                  html
                  parent {
                    ... on File {
                      id
                      name
                    }
                  }
                }
              }
            }
          }
        }
  `)


    const total = data.allFile.totalCount
    const pesme = data.allFile.edges

    return(

    <div className='kontejnerListe'>
        <div className='lista'>

            <h1 className="naslov">Duhovnost u stihovima</h1>

            {/*<h1>{total}</h1>*/}

            <ul className="list-group list-group-light">

                {pesme.map(({node}) => {

                    const pesmaName = node.childMarkdownRemark.parent.name

                    return(
                        <Link to={pesmaName}>
                        <li key={node.id} className="list-group-item d-flex justify-content-between align-items-center ">
                                <div className=" lista-item">

                                    <FaHandsPraying className='ruke' />

                                    <div className="ms-3">
                                        <p className="fw-bold mb-1 naslov-pesme">
                                            {node.childMarkdownRemark.frontmatter.title}
                                        </p>
                                        <p className="text-muted mb-0">{node.childMarkdownRemark.frontmatter.datum}</p>
                                    </div>
                                </div>
                        </li>
                        </Link>

                    )
                })}
            </ul>
        </div>

    </div>
    )
}
export default Lista



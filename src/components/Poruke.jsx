import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'


import '../assets/css/poruka.scss'

const Poruke = () => {

    const data = useStaticQuery(graphql`
        query {
          allFile(filter: {relativeDirectory: {eq: "poruke"}}) {
            totalCount
            edges {
              node {
                childMarkdownRemark {
                  frontmatter {
                    title
                  }
                  html
                }
                id
              }
            }
          }
        }
  `)

    const quotes = data.allFile.edges;

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex].node;


    return(

        <header>
            <div className="pozadina poruka">
                <div className="">
                    {/*<div className="d-flex justify-content-center align-items-center h-100">*/}
                    <div className="">

                        {/*<div className="text-white poruke">*/}
                        <div className="">
                            <figure className="quote text-end">
                                <blockquote className="blockquote">
                                    <p dangerouslySetInnerHTML={{ __html: randomQuote.childMarkdownRemark.html }} />
                                </blockquote>
                                <figcaption className="blockquote-footer">
                                    {randomQuote.childMarkdownRemark.frontmatter.title}
                                </figcaption>
                            </figure>
                        </div>

                    </div>
                </div>
            </div>
        </header>
    )
}
export default Poruke

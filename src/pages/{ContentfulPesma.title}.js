import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import '../assets/css/pesma-izgled.scss'
import '../assets/css/pesma-template.scss'





const PesmaTemplate = ({ data }) => {

    const { title, datum, gdeJeObjavljeno } = data.contentfulPesma

    const { html } = data.contentfulPesma.tekstPesme.childMarkdownRemark


    return (
        <Layout>

            <div className='telo-pesme'>
                <div className='naslov-datum'>
                    <h2 className='naslov-pesme'>{title}</h2>
                    <p className='datum-pesme'>{datum}</p>
                    <p className='objavljeno'>{gdeJeObjavljeno}</p>
                </div>

                <div dangerouslySetInnerHTML={{__html: html }} className="sadrzaj" />
                
            </div>
        </Layout>
    )
}


export const query = graphql`
    query singlePesma($title: String) {
        contentfulPesma(title: {eq: $title}) {
            title
            id
            datum(locale: "de", formatString: "D.M.YYYY.")
            tekstPesme {
                childMarkdownRemark {
                    html
                }
            }
            gdeJeObjavljeno
        }
    }
`

export default PesmaTemplate
import React from 'react'
import { graphql } from 'gatsby'
import '../assets/css/pesma-template.scss'

import Layout from '../components/Layout'

export default function PesmaTemplate({ data }) {

    // const { html } = data.markdownRemark
    // const { pesma } = data.contentfulPesma.tekstPesme.childMarkdownRemark.rawMarkdownBody
    // const { html } = data.contentfulPesma.tekstPesme.childMarkdownRemark
    // const { html } = data.contentfulPesma.tekstPesme.childMarkdownRemark
    // const { title, datum } = data.markdownRemark.frontmatter

    const { title, datum } = data.contentfulPesma

    return (
        <Layout>
            {/* <div className='telo-pesme'>
                <div className='naslov-datum'>
                    <h2 className='naslov-pesme'>{title}</h2>
                    <p className='datum-pesme'>{datum}</p>
                </div>

                <div dangerouslySetInnerHTML={{__html: html }} className="sadrzaj" />
                
            </div> */}

            <div className='telo-pesme'>
                <div className='naslov-datum'>
                    <h2 className='naslov-pesme'>{title}</h2>
                    {/* <p className='datum-pesme'>{datum}</p> */}
                </div>

                {/* <div dangerouslySetInnerHTML={{__html: html }} /> */}

                <div>
                    {/* {tekstPesme} */}
                    
                </div>
                
            </div>



        </Layout>
    )
}


export const query = graphql`
query MyQuery($title: String) {

    contentfulPesma(title: {eq: $title}) {        
        datum(locale: "de")
        title
    }

}
`


// export const query = graphql`
// query MyQuery($slug: String) {

//     contentfulPesma(slug: {eq: $slug}) {        
//         datum(locale: "de")
//         slug
//         title
        
//     }

// }
// `
import React from 'react'
import { graphql } from 'gatsby'
import '../assets/css/pesma-template.scss'

import Layout from '../components/Layout'

export default function PesmaTemplate({ data }) {

    const { html } = data.markdownRemark
    const { title, datum } = data.markdownRemark.frontmatter
    

    return (
        <Layout>
            <div className='telo-pesme'>
                <h2 className='naslov-pesme'>{title}</h2>
                <h3 className='datum-pesme'>{datum}</h3>

                <div dangerouslySetInnerHTML={{__html: html }} />
                
            </div>
        </Layout>
    )
}


export const query = graphql`
    query MyQuery($slug: String) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
        html
        frontmatter {
            title
            slug
            datum
            author
        }
    }
}
`

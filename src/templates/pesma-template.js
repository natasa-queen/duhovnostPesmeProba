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
                <div className='naslov-datum'>
                    <h2 className='naslov-pesme'>{title}</h2>
                    <p className='datum-pesme'>{datum}</p>
                </div>

                <div dangerouslySetInnerHTML={{__html: html }} className="sadrzaj" />
                
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

import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'

export default function Pesma({ data }) {

    const title = data.markdownRemark.frontmatter.title
    const datum = data.markdownRemark.frontmatter.datum
    const html = data.markdownRemark.html

    return(
        <Layout>
            <h1>Pesma template</h1>

            <h2>{title}</h2>
            <h3>{datum}</h3>

            <div dangerouslySetInnerHTML={{__html: html}} />

            <Link to="/" className="btn" >Nazad</Link>
        </Layout>
    )
}


export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: {eq: $id}) {
      id
      html
      frontmatter {
        datum
        title
      }
    }
  }
`
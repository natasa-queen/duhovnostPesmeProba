import React from "react"
import Layout from '../components/Layout'
import Header from '../components/Header'
// import SpisakPesama from '../components/SpisakPesama'

import '../assets/css/pocetna.scss'
import '../assets/css/lista-pesama.scss'
import { graphql, Link } from 'gatsby'


// import Post from '../components/Post'


export default function Home({ data }) {

  // console.log(data)

  const projects = data.allMarkdownRemark.nodes
  

  return (
    <Layout>

      <Header />

      <h1 className="naslov">Pjesme</h1>
      

      {/* <SpisakPesama /> */}

      <div className="lista-pesama">
        {projects.map(project => (
          <Link to={"/pesme/" + project.frontmatter.slug} key={project.id}>
            <h1>{ project.frontmatter.title }</h1>
          </Link>
        ))}

      </div>
    </Layout>
  )
}

export const query = graphql`
query ProjectsPage {
  allMarkdownRemark(sort: {frontmatter: {datum: DESC}}) {
    nodes {
      frontmatter {
        author
        datum
        slug
        title
      }
      id
      excerpt
    }
  }
}
`

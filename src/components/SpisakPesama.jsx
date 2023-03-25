// import React from "react"
// import '../assets/css/spisak-pesama.scss'
// import { graphql, Link } from 'gatsby'



// export default function SpisakPesama({ data }) {

//     const projects = data.allMarkdownRemark.nodes
    
  
//     return (
       
//         <div>
//           {projects.map(project => (
//             <Link to={"/pesme/" + project.frontmatter.slug} key={project.id}>
//               <h1>{ project.frontmatter.title }</h1>
//             </Link>
//           ))}
  
//         </div>
      
//     )
//   }
  
//   export const query = graphql`
//   query  {
//     allMarkdownRemark(sort: {frontmatter: {datum: DESC}}) {
//       nodes {
//         frontmatter {
//           author
//           datum
//           slug
//           title
//         }
//         id
//         excerpt
//       }
//     }
//   }
//   `
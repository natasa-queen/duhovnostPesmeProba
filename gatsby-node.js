

const path = require('path')

exports.createPages = async ({ graphql, actions }) => {

    const { data } = await graphql(`
    query Projects {
        allContentfulPesma {
          nodes {
            title
          }
        }
      }
    `)

    data.allContentfulPesma.nodes.forEach(node => {
        actions.createPage({
          path: `/${node.title}`,
          component: path.resolve('./src/templates/pesma-template.js'),
          context: { title: node.title }

        })
    })

}





// const path = require('path')

// exports.createPages = async ({ graphql, actions }) => {

//     const { data } = await graphql(`
//     query Projects {
//         allMarkdownRemark {
//           nodes {
//             frontmatter {
//               slug
//             }
//           }
//         }
//       }
//     `)

//     data.allMarkdownRemark.nodes.forEach(node => {
//         actions.createPage({
//           path: '/pesme/' + node.frontmatter.slug,
//           component: path.resolve('./src/templates/pesma-template.js'),
//           context: { slug: node.frontmatter.slug }

//         })
//     })

// }
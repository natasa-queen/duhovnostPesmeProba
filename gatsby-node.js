

const path = require('path')

exports.createPages = async ({ graphql, actions }) => {

    const { data } = await graphql(`
    query Projects {
        allMarkdownRemark {
          nodes {
            frontmatter {
              slug
            }
          }
        }
      }
    `)

    data.allMarkdownRemark.nodes.forEach(node => {
        actions.createPage({
          path: '/pesme/' + node.frontmatter.slug,
          component: path.resolve('./src/templates/pesma-template.js'),
          context: { slug: node.frontmatter.slug }

        })
    })

}

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */



module.exports = {

  siteMetadata:{
    title: "Nataša",
    description: "Moja sajt za poeziju",
    author: "@natasa"
  },

  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `pesme`,
        // Path to the directory
        path: `${__dirname}/src/assets/`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `images`,
        // Path to the directory
        path: `${__dirname}/src/assets/images`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `poruke`,
        // Path to the directory
        path: `${__dirname}/src/assets/poruke`
      },
    },
    
    `gatsby-plugin-mdx`,



    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Roboto",
              variants: ["300", "400", "500", "700"],
            },
            {
              family: "Open Sans Condensed",
              variants: ["300", "400", "500", "700"],
            },
          ],
        },
      },
    },



  ],
}

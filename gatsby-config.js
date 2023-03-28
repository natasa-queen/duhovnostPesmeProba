
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */



require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})


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
        path: `${__dirname}/src/assets/`
      },
    },
    `gatsby-plugin-mdx`,



    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: `cyps0qor801e`,
    //     // Learn about environment variables: https://gatsby.dev/env-vars  
    //     accessToken: process.env.CONTENTFUL_API_KEY,
    //   },
    // },

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `cyps0qor801e`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },


    `gatsby-transformer-json`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `/src/assets/poruke`,
    //   },
    // },



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
            {
              family: "Parisienne", 
              variants: ["300", "400", "500", "700"],
            },
          ],
        },
      },
    },

    


  ],
}

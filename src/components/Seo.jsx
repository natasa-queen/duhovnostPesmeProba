import React from 'react'
import { graphql, useStaticQuery, Script } from 'gatsby'


export const useSiteMetadata = () => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

    return data.site.siteMetadata
}

export const Seo = ({ title, description, children }) => {
    const { title: defaultTitle, description: defaultDescription } = useSiteMetadata()

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        // image: `${siteUrl}${image}`,
        // url: `${siteUrl}${pathname || ``}`,
        // twitterUsername,
    }

    return (
        <>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />

            <link rel="stylesheet" type="text/css" href={"https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"} />
            <Script src={"https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"}/>


            <link
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
              rel="stylesheet"
            />
            {/*<link*/}
            {/*  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"*/}
            {/*  rel="stylesheet"*/}
            {/*/>*/}
            <link
              href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.4.1/mdb.min.css"
              rel="stylesheet"
            />
            <Script src={"https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.4.1/mdb.min.js"}/>




            {/*<meta name="keywords" content="HTML, CSS, JavaScript" />*/}
            {/*<meta name="viewport" content="width=device-width, initial-scale=1.0" />*/}

            {/*<meta name="image" content={seo.image} />*/}
            {/*<meta name="twitter:card" content="summary_large_image" />*/}
            {/*<meta name="twitter:title" content={seo.title} />*/}
            {/*<meta name="twitter:url" content={seo.url} />*/}
            {/*<meta name="twitter:description" content={seo.description} />*/}
            {/*<meta name="twitter:image" content={seo.image} />*/}
            {/*<meta name="twitter:creator" content={seo.twitterUsername} />*/}
            {/*<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>" />*/}

            {children}
        </>
    )
}
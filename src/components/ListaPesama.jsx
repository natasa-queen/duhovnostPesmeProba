import * as React from "react";
import { graphql, useStaticQuery, Link } from 'gatsby';
import "../assets/css/pocetnaListaPesama.scss";

import { FaHandsPraying } from "react-icons/fa6";

// import slugify from 'slugify'

const Lista = () => {

    const data = useStaticQuery(graphql`
        query {
          allFile(filter: {relativeDirectory: {eq: "pesme"}}) {
            totalCount
            edges {
              node {
                id
                childMarkdownRemark {
                  frontmatter {
                    title
                  }
                  html
                  parent {
                    ... on File {
                      id
                      name
                    }
                  }
                }
              }
            }
          }
        }
  `)




  //   const data = useStaticQuery(graphql`
  //       query {
  //         allMarkdownRemark(sort: {frontmatter: {datum: DESC}}) {
  //           totalCount
  //           edges {
  //             node {
  //               frontmatter {
  //                 title
  //               }
  //               id
  //               parent {
  //                 ... on File {
  //                   name
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  // `)

    // const total = data.allMarkdownRemark.totalCount
    // const pesme = data.allMarkdownRemark.edges


    const total = data.allFile.totalCount
    const pesme = data.allFile.edges

    return(
        <div className='lista'>
            {/*<h1>Duhovnost u stihovima</h1>*/}

            <h1>{total}</h1>


            <ul className="list-group list-group-light">

                {pesme.map(({node}) => {

                    const pesmaName = node.childMarkdownRemark.parent.name

                    return(


                            <li key={node.id} className="list-group-item d-flex justify-content-between align-items-center">
                                <Link to={pesmaName}>
                                <div className="d-flex align-items-center">
                                    {/*<img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt=""*/}
                                    {/*     // style="width: 45px; height: 45px"*/}
                                    {/*     className="rounded-circle"/>*/}

                                    <FaHandsPraying className='ruke' />

                                    <div className="ms-3">
                                        <p className="fw-bold mb-1">
                                            {node.childMarkdownRemark.frontmatter.title}
                                        </p>
                                        {/*<p className="text-muted mb-0">john.doe@gmail.com</p>*/}
                                    </div>
                                </div>
                                {/*<a className="btn btn-link btn-rounded btn-sm" href="#" role="button">View</a>*/}
                                </Link>
                            </li>

                    )
                })}
            </ul>



{/*====================================================================================*/}
{/*====================================================================================*/}

            {/*<ul className="list-group list-group-light spisak">*/}
            {/*    {pesme.map(({node}) => {*/}

            {/*        // const slug = slugify(node.frontmatter.title, {lower:true})*/}

            {/*        // const pesmaName = node.parent.name*/}

            {/*        const pesmaName = node.childMarkdownRemark.parent.name*/}

            {/*        return(*/}
            {/*            <li key={node.id} className="list-group-item d-flex justify-content-between align-items-center spisak-item">*/}
            {/*                <div className="d-flex align-items-center">*/}

            {/*                    /!*<img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt="slika"*!/*/}
            {/*                    /!*     // className="rounded-circle slika"/>*!/*/}

            {/*                    <div className="ms-3">*/}

            {/*                        <Link to={pesmaName}>*/}
            {/*                            /!*<p className="fw-bold mb-1 naslov-pesme">{node.frontmatter.title}</p>*!/*/}
            {/*                            <p className="fw-bold mb-1 naslov-pesme">{node.childMarkdownRemark.frontmatter.title}</p>*/}
            {/*                        </Link>*/}

            {/*                    </div>*/}

            {/*                </div>*/}
            {/*            </li>*/}
            {/*        )*/}
            {/*    })}*/}
            {/*</ul>*/}
{/*====================================================================================*/}
{/*====================================================================================*/}

        </div>

    )
}
export default Lista



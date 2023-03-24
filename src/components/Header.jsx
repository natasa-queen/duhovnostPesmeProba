import React from 'react';

import HeaderSlika from '../components/HeaderSlika'
// import Poruka from '../components/Poruka'

// import Poruka from '../components/Test'

import MessageDisplay from '../components/Test'

// import MessageDisplay from "../components/messageDisplay";
// import { graphql } from "gatsby";

import '../assets/css/header.scss'


// export const query = graphql`
// query  {
//     markdownRemark(fileAbsolutePath: {regex: "/poruke/poruke.md/"}) {
//       id
//       frontmatter {
//         poruke
//       }
//     }
//   }
// `

export default function Header() {

   

    return (

        <header className='header'>
            
            <HeaderSlika />

            <div>
                {/* <Poruka /> */}

                <MessageDisplay />

            </div>

            
        </header>
    )
}


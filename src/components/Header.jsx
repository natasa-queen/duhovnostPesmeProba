import React from 'react';

import HeaderSlika from '../components/HeaderSlika'
// import Poruka from '../components/Poruka'



import MessageDisplay from '../components/Test'


import '../assets/css/header.scss'




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


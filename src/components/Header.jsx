import React from 'react';

import HeaderSlika from '../components/HeaderSlika'

// import MessageDisplay from '../components/Test'
import MessageDisplay from '../components/MessageDisplay'
import '../assets/css/header.scss'



export default function Header() {

    return (

        <header className='header'>
            
            <HeaderSlika />

            <div>

                <MessageDisplay />

            </div>

            
        </header>
    )
}


import React from 'react';

import HeaderSlika from '../components/HeaderSlika'

import Poruke from '../components/Poruke'

import '../assets/css/header.scss'



export default function Header() {

    return (

        <header className='header'>
            
            <HeaderSlika />

            <div>
                <Poruke />
            </div>

            
        </header>
    )
}


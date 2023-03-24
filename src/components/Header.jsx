import React from 'react';

import HeaderSlika from '../components/HeaderSlika'
import Poruka from '../components/Poruka'

import '../assets/css/header.scss'


export default function Header() {

    return (

        <header className='header'>
            
            <HeaderSlika />

            <div>
                <Poruka hour={8} minute={1} />
            </div>

            
        </header>
    )
}


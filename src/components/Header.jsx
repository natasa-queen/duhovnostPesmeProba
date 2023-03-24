import React from 'react';

import HeaderSlika from '../components/HeaderSlika'
import Poruka from '../components/Poruka'

import '../assets/css/header.scss'


export default function Header() {

    return (

        <header className='header'>
            
            <HeaderSlika />

            <div>
                <Poruka hour={7} minute={54} />
            </div>

            
        </header>
    )
}


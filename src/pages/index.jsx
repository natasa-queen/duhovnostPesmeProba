import React from "react"
import Layout from '../components/Layout'
import Header from '../components/Header'
import ListaPesama from '../components/ListaPesama'

import {Seo} from '../components/Seo'

// import '../assets/css/pocetna.scss'
// import '../assets/css/lista-pesama.scss'
import '../assets/css/pocetnaListaPesama.scss'


export default function Home() {

  return (
    <Layout>

      <Header />

      {/*<h1 className="naslov">Duhovnost u stihovima</h1>*/}

      <ListaPesama />

    </Layout>
  )
}


export function Head() {
    return (
        <>
            <Seo title="Pocetna strana" />

        </>
    )
}


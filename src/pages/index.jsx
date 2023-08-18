import React from "react"
import Layout from '../components/Layout'
import Header from '../components/Header'
import SpisakPesama from '../components/SpisakPesama'

import '../assets/css/pocetna.scss'
import '../assets/css/lista-pesama.scss'



export default function Home() {

  return (
    <Layout>

      <Header />

      <h1 className="naslov">Duhovnost u stihovima</h1>

      <SpisakPesama />





    </Layout>
  )
}


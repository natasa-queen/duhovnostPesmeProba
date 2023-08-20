import React from 'react'
import Layout from '../components/Layout'
import {Seo} from '../components/Seo'



const Galerija = () => {
    return(
        <Layout>
            <h2>Stranica u pripremi</h2>
            <h1>Galerija</h1>
        </Layout>
    )
}
export default Galerija

export function Head() {
    return (
        <>
            <Seo title="Galerija" />

        </>
    )
}
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import '../assets/css/pesma-izgled.scss'
import '../assets/css/pesma-template.scss'





const PesmaTemplate = ({ data }) => {

    const { naslov, datum, pesma1, gdeJeObjavljeno } = data.contentfulPesme

    return (
        <Layout>

          <div className='telo-pesme'>
            <div className='naslov-datum'>
                <h2 className='naslov-pesme'>{naslov}</h2>
                <p className='datum-pesme'>{datum}</p>
                <p className='objavljeno'>{gdeJeObjavljeno}</p>
            </div>
            

              <div
                className="sadrzaj"
                dangerouslySetInnerHTML={{
                  __html: pesma1.childMarkdownRemark.html,
                }}
              />
          </div>
        </Layout>
    )
}

export const query = graphql`
  query ($naslov: String) {
    contentfulPesme(naslov: {eq: $naslov}) {
      naslov
      datum(formatString: "D.M.YYYY.")
      gdeJeObjavljeno
      pesma1 {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default PesmaTemplate
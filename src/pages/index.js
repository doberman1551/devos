import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Description from "../components/Description"
import Cta1 from "../components/Cta1"
import Features from "../components/Features"
import Price from "../components/Price"
import { Bio } from "../components/bio"




const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <Hero/>
    <Description/>
    <Features/>
    {/*<Price/>*/}
    <Cta1/>
   {/*<Bio/>*/}
  </Layout>
)

export default IndexPage

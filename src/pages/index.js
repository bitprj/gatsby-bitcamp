import React from "react"
import { Link } from "gatsby"
import Layout2 from "../components/layout2"
//import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
   <Layout2>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p> Contact me better <Link to="/ContactMe"> Contact me.</Link></p>
  
    <Link to="/page-2/">Go to page 2</Link>
   </Layout2>
)

export default IndexPage

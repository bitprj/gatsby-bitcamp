import React from "react"
import { Link } from "gatsby"
import Layout2 from "../components/Layout2"

import SEO from "../components/seo"

const IndexPage = () => (
   <Layout2>
    <SEO title="Home" />
    <h1>Hello! Welcome to my CookBook</h1>
    <p>This is where you can find all my recipes.</p>
    <ol>
       <li> 
          
       </li>
        
    </ol>
    <Link to="/page-2/">Go to page 2</Link>
   </Layout2>
)

export default IndexPage

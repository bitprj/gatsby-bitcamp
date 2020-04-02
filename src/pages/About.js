import React from 'react'
import Layout2 from '../components/Layout2'
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Highlight} from 'react-instantsearch-dom';
import { Link, graphql } from "gatsby"
import PostPreview from "../components/post-preview"
import Layout from '../components/Layout3'
import Header2 from '../components/Header2'



const searchClient = algoliasearch(process.env.GATSBY_ALGOLIA_APP_ID, process.env.GATSBY_ALGOLIA_SEARCH_KEY,);

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  //const posts = data.allTwitterSearchTweetsGatsbyHashtag.nodes

 
  return (
    <Layout location={location} title={siteTitle}>

      <InstantSearch searchClient={searchClient} indexName="Blog">
        <SearchBox />
        <Hits hitComponent={PostPreview}/>
        
      </InstantSearch>
      
      
     
      
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
  }
}
`
const AboutPage = () =>{
    return(
        <div>
            <Layout2>
            <hi>About me</hi>
            <p>I like cards</p> 
            <p> 
                Contact me <a href="https://google.com" target ="_blank"> Here</a>
            </p>
            </Layout2>
        </div>


    )
}


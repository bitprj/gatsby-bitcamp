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
  //const siteTitle = data.site.siteMetadata.title
  //const posts = data.allTwitterSearchTweetsGatsbyHashtag.nodes

 
  return (
    <Layout2>

      <InstantSearch searchClient={searchClient} indexName="Blog">
        <SearchBox/>
        <Hits hitComponent={PostPreview}/>
        
      </InstantSearch>
      
      
     
      
    </Layout2>
  )
}

export default BlogIndex


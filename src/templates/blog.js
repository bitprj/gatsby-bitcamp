
import React from 'react'
import Layout2 from '../components/layout2'
import {graphql} from 'gatsby'


export const query = graphql`
    query ($id : String!){
        twitterSearchTweetsGatsbyHashtag(id : {eq: $id}) {
            id
            full_text
            retweet_count
            user {
                name
            }
        }
    }
`
          
const blog = (props) => {
    return (
        <Layout2>
            <h1>{props.data.twitterSearchTweetsGatsbyHashtag.user.name}</h1>
            <p>{props.data.twitterSearchTweetsGatsbyHashtag.full_text}</p>
            <p>{props.data.twitterSearchTweetsGatsbyHashtag.retweet_count}</p>
        </Layout2> 

    )
}

export default blog



import React from 'React'
import Layout2 from '../components/Layout2'
import {graphql} from 'gatsby'


export const query = graphql`
    query ($id : String!){
        twitterSearchTweetsGatsbyHashtag(id : {eq: $id}) {
            id
            full_text
            retweet_count
            created_at
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
            <p> Retweet count: {props.data.twitterSearchTweetsGatsbyHashtag.retweet_count}</p>
            <p>{props.data.twitterSearchTweetsGatsbyHashtag.created_at}</p>
        </Layout2> 

    )
}

export default blog


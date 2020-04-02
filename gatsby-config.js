
require('dotenv').config({
  path: `.env.production`,
});
const blogQuery = `{
  allMarkdownRemark{
    nodes {
      frontmatter {
        title 
        date
        description
      }
      fields{
        slug
      }
      excerpt
      html
    }
  }
}`;

const tweetQuery = `{
  allTwitterSearchTweetsGatsbyHashtag (limit: 10){
    nodes {
      full_text
      id
      retweeted_status{
        retweet_count
      }
    }
  }
}`;

const queries = [
  {
    query: tweetQuery,
    transformer: ({data}) => data.allTwitterSearchTweetsGatsbyHashtag.nodes
  },
];

const axios = require('axios');
const getAuthorizationToken = () => {
  return axios
    .post(
      "https://stitch.mongodb.com/api/client/v2.0/app/testapp-kcwun/auth/providers/local-userpass/login",
      {
        username: "notjeffchhen@gmail.com",
        password: "blahblah"
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
    .then(res => `Bearer ${res.data.access_token}`);
};
module.exports = {
  siteMetadata: {
    title: `Cookbook`,
    description: `This is my Cookbook`,
    author: `Made by ______`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "Recipe",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "recipe",
        // Url to query from
        url: "https://us-west-2.aws.stitch.mongodb.com/api/client/v2.0/app/testapp-kcwun/graphql",
        headers: async () => {
          return {
            Authorization: await getAuthorizationToken(),
          }
        },
        refetchInterval: 30,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            }
          }
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-twitter`,
      options: {
        credentials: {
          consumer_key: process.env.TWITTER_CONSUMER_KEY,
          consumer_secret: process.env.TWITTER_CONSUMER_SECRET, 
          bearer_token: process.env.TWITTER_BEARER_TOKEN,
        },
        queries: {
          gatsbyHashtag: {
            endpoint: "search/tweets",
            params: {
              q: "#gatsbyjs",
              tweet_mode: "extended",
            },
          },
        },
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
      
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 1000, // default: 1000
      },
    },
    
  
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

/*
{
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: "Blog",
        queries,
        chunkSize: 10000, // default: 1000
      },
    },

    */
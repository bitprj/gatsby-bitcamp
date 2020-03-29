
require('dotenv').config({
  path: `.env.production`,
});
const blogQuery = `{
  recipe{
    recipe2s {
      ingredients
}`;

const queries = [
  {
    query: blogQuery,
    
  },
];
console.log(blogQuery)
console.log("blahblahblah")
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
    title: `Full-Stack Bootcamp!`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Blah blah2`,
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
        refetchInterval: 60,
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
        indexName: "Blog",
        queries,
        chunkSize: 10000, // default: 1000
      },
    },
    `gatsby-plugin-styled-components`,
  
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}



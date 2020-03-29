import React from 'react'
// import layout2Styles from '../components/layout2.module.scss'
import Layout2 from '../components/layout2'
import blogStyles from './blog.module.scss'
import { Link, graphql, useStaticQuery} from "gatsby"

const HomePage =  ({data}) => {
    return (
        <h2>{data.recipe.recipe2.timeToCook}</h2> ,
        <p>{data.recipe.recipe2.step1}</p> 
    )
}
export const query = graphql`
    query HomePageQuery {
        recipe{
            recipe2{
                timeToCook
                step1
            }
        }
    }
`


export default HomePage
// const BlogPage = () =>{
//     const response = (graphql`
//     query {
//         recipe
//         {
//             recipe2(query : {timeToCook: 10 }){
//                 timeToCook 
//                 ingredients
                 
//             }
//         }
//     }
//     `)
//     console.log("AASDASDASDASASDASDSADASDASDS")
//     if (response.data) {
//         console.log(response.data)
//     }
//     return (
//         <div>
//             <Layout2>
//             <h1>Blog</h1>
//             <ol className={blogStyles.posts}>
//                 <h2> {response.data} </h2>
//                 {/* {data.allMarkddownRemark.edges.map((edge)=>{
//                     return (
//                         <li className={blogStyles.post}>
//                             <Link to={`/blog/${edge.node.fields.slug}` }>
//                             <h2>{edge.node.frontmatter.title}</h2> 
//                             <p>{edge.node.frontmatter.publishedDate}</p>
//                             </Link>
//                         </li>
//                     )
//                 })} */}
//             </ol>
//             </Layout2>
//         </div>
//     )
// }
// export default BlogPage


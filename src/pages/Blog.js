import React from 'react'
import Layout2 from '../components/Layout2'
import blogStyles from './blog.module.scss'
import { Link} from "gatsby"
const RecipeBook = () => {
    return (

        <Layout2>
            <ol>
                <h2>Recipes</h2>
                <li className={blogStyles.post}>
                    <Link to={`/Pasta`}>
                        <h2>Pasta</h2>
                        <p>Time to Cook: 5</p>
                    </Link>
                </li>
                <li className={blogStyles.post}>
                    <Link to={`/Rice`}>
                        <h2>Rice</h2>
                        <p>Time to Cook: 5</p>
                    </Link>
                </li>
                <li className={blogStyles.post}>
                    <Link to={`/Ramen`}>
                        <h2>Ramen</h2>
                        <p>Time to Cook: 5</p>
                    </Link>
                </li>
            </ol>


        </Layout2>

    )
}
export default RecipeBook
//export default HomePage
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


// <ol>
//                 <p> Ingredients: {data.recipe.recipe2.ingredients}</p>
//                 <p> Instructions:
//                      <ol>
//                         {data.recipe.recipe2.instructions.step1}
//                         {data.recipe.recipe2.instructions.step2}
//                         {data.recipe.recipe2.instructions.step3}
//                         {data.recipe.recipe2.instructions.step4}
//                         {data.recipe.recipe2.instructions.step5}
//                     </ol>
//                 </p>
//             </ol>


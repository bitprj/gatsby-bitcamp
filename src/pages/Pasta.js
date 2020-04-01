import React from 'react'
import Layout2 from '../components/layout2'
import blogStyles from './blog.module.scss'
import { graphql, useStaticQuery} from "gatsby"
import layoutStyles from '../components/layout2.module.scss'

export default () => {
    const data = useStaticQuery(graphql`
        query Ramen {
                recipe{
                    recipe3 (query : {title: "Pasta"}){
                        title
                        timeToCook
                        ingredients
                        step1
                        step2
                        step3
                        step4
                        step5
                        
                    }
                }
            }
        `)
    return (
        <Layout2>
            <h1 className={layoutStyles.whatever} >{data.recipe.recipe3.title}</h1>
             <ol>
                 <p> Ingredients: {data.recipe.recipe3.ingredients}</p>
                 <p> Instructions:
                      <li><p>{data.recipe.recipe3.step1}</p></li>
                      <li><p>{data.recipe.recipe3.step2}</p></li>
                      <li><p>{data.recipe.recipe3.step3}</p></li>
                      <li><p>{data.recipe.recipe3.step4}</p></li>
                      <li><p>{data.recipe.recipe3.step5}</p></li>
                 </p>
             </ol>

        </Layout2>
    )
}
import React from 'react'
import layoutStyles from '../components/layout2.module.scss'
import Layout2 from '../components/Layout2'
import blogStyles from './blog.module.scss'
import { Link, graphql, useStaticQuery} from "gatsby"

export default () => {
    const data = useStaticQuery(graphql`
        query Rice {
                recipe{
                    recipe3 (query : {title: "Rice"}){
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
            <div className={layoutStyles.recipe}>
                <h1 className={layoutStyles.recipetitle}>{data.recipe.recipe3.title}</h1>                    
                <h5 className={layoutStyles.recipetime}>Cook time: {data.recipe.recipe3.timeToCook} minutes</h5>
                <h4 className={layoutStyles.recipetitle2}>Ingredients</h4>
                <p>{data.recipe.recipe3.ingredients}</p>                    
                <h4 className={layoutStyles.recipetitle2}>Instructions</h4>
                <ol>
                    <li><p>{data.recipe.recipe3.step1}</p></li>
                    <li><p>{data.recipe.recipe3.step2}</p></li>
                    <li><p>{data.recipe.recipe3.step3}</p></li>
                    <li><p>{data.recipe.recipe3.step4}</p></li>
                    <li><p>{data.recipe.recipe3.step5}</p></li>                        
                </ol>
            </div>
        </Layout2>
    )
}
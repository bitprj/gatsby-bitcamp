import React from 'react'
import { Link } from "gatsby"
import { rhythm } from "../utils2/typography"
import { Highlight } from 'react-instantsearch-dom'

const PostPreview = ( {hit}) => {
    const title = hit.frontmatter.title 
    return (
    (
        <div >
          <header>
            {/* <h3
              style={{
                marginBottom: rhythm(1 / 4),
              }}
            >
              { <Link style={{ boxShadow: `none` }} to={hit.fields.slug}>
                {title}
              </Link> }
            </h3> */}
            <small>{new Date(hit.frontmatter.date). toLocaleDateString()}</small>
          </header>
          <section>
            {/* <p
              dangerouslySetInnerHTML={{
                __html: hit.frontmatter.description || hit.excerpt,
              }}
            /> */}
            <p>
                <Highlight hit = {hit}
                attribute="excerpt" 
                tagName="mark"/>
            </p>
          </section>
        </div> 
      )
)
            }
export default PostPreview
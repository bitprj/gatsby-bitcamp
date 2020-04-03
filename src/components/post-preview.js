import React from 'react'
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
import { Highlight } from 'react-instantsearch-dom'
const PostPreview = ( {hit}) => {
    const text = hit.full_text
    return (
    (
        <div >
          <header>
            <h3
              style={{
                marginBottom: rhythm(1 / 4),
              }}
            >   {text}
            </h3>
            <small>{new Date(hit.created_at).toLocaleDateString()}</small>
          </header>
          <section>
            {/* <p
              dangerouslySetInnerHTML={{
                __html: hit.frontmatter.description || hit.excerpt,
              }}
            /> */}
            <p>
                <Highlight hit = {hit}
                attribute="full_text" 
                tagName="mark"/>
            </p>
          </section>
        </div> 
      )
)
            }
export default PostPreview
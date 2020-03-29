import React from 'React'
import { Link, graphql, useStaticQuery } from 'gatsby'
import headerStyles from './header.module.scss'
const Header2 = () => {
    const data = useStaticQuery(graphql`
      query {
          site{
            siteMetadata {
                title
                author
            }
          }
      }
    `)
    return(
        <header className={headerStyles.header}>
            <h1 >
                <Link className={headerStyles.title} to="/">
                    {data.site.siteMetadata.title}
                </Link>
            </h1>
            <ul className={headerStyles.navlist}>
                <li>
                    <Link className={headerStyles.navitem} activeClassName={headerStyles.activeNavItem} to='/ContactMe'>
                        Contact 
                    </Link>
                </li>
                <li>
                    <Link className={headerStyles.navitem} activeClassName={headerStyles.activeNavItem} to='/About'>
                         About 
                    </Link>
                </li>
                <li>
                    <Link className={headerStyles.navitem} activeClassName={headerStyles.activeNavItem}to='/Blog'>
                         Blog 
                    </Link>
                </li>
                <li>
                    <Link className={headerStyles.navitem} activeClassName={headerStyles.activeNavItem} to='/..'> 
                    Index
                    </Link>
                </li>
            </ul>

        </header>
        )
}

export default Header2
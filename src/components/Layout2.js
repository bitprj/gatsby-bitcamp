import React from 'react'
import Header2 from './header2'
import Footer from './footer'
import '../styles/index.scss'
import layout2Styles from './layout2.module.scss'
import headerStyles from './header.module.scss'
const Layout2 = (props) => {
    return (
        <div className={layout2Styles.container}>
            <div className={layout2Styles.content}>
                <Header2 className ={headerStyles.header}/>
                {props.children}
            </div>
            <Footer/>
        </div>
        
    )
}

export default Layout2

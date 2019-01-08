import React from 'react'
import '../../styles/main.scss'
import {Link} from 'gatsby'

export default ({children}) => <div className="main-container">
    <header>
        <Link to="/">SuperBlog.com</Link>
    </header>
    <main>{children}</main>
    <footer>Tomasz Mittlener @ 2019</footer>
</div>

import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/Layout'

export default props => {
    console.log(props)
    return <Layout>Hello world <Link to="/contact/">go to contact page</Link></Layout>
}

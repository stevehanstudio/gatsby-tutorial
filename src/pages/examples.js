import React from 'react'
import Header from '../examples/Header'
import HeaderStatic from "../examples/HeaderStatic"
import Layout from '../components/layout'
import { graphql } from "gatsby"

const examples = ({ data }) => {
   const {
      site: {
         info: { author },
      },
   } = data

   return (
     <Layout>
       <h1>hello from examples page</h1>
       <Header />
       <HeaderStatic />
       <h5>author: {author}</h5>
     </Layout>
   )
}

export const data = graphql`
   query MyQuery {
      site {
         info: siteMetadata {
            person {
               age
               name
            }
            author
            data
            description
            title
         }
      }
   }
`

export default examples

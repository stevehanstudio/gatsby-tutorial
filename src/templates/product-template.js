import React from "react"
import { Link, graphql } from "gatsby"
import Layout from '../components/layout'
import Image from 'gatsby-image'
//import Images from "../examples/images"

const ComponentName = ({ data:{product:{price,title,image:{fixed},info:{ info }}} }) => {
   return (
      <Layout>
         <div style={{textAlign:"Center"}}>
            <Link to="/products">back to products</Link>
            <h1>Single product: {title}</h1>
         </div>
         <section className="single-product">
            <article>
               <Image fixed={fixed} alt={title} />
            </article>
            <article>
               <h1>{title}</h1>
               <h3>${price}</h3>
               <p>{info}</p>
               <button>add to cart</button>
            </article>
         </section>
      </Layout>
   )
}

export const query = graphql`
   query GetSingleProduct($slug: String) {
      product: contentfulProduct(slug: { eq: $slug }) {
         price
         title
         image {
            fixed (width:300) {
               ...GatsbyContentfulFixed
            }
         }
         info {
            info
         }
      }
   }
`

export default ComponentName

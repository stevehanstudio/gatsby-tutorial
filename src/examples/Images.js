import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import img from "../images/coronavirus-3992933.jpg"
import Image from 'gatsby-image'

const getImages = graphql`
  {
    fixed: file(
      relativePath: { eq: "pink-sphere-splashed-by-green-liquid-45239.jpg" }
    ) {
      childImageSharp {
        fixed(width: 300, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(
      relativePath: { eq: "pink-sphere-splashed-by-green-liquid-45239.jpg" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const Images = () => {
   const data = useStaticQuery(getImages)
   console.log(data);
   
   return (
     <section className="images">
       <article className="single-image">
         <h3>basic images</h3>
         <img src={img} width="100%" />
       </article>
       <article className="single-image">
         <h3>fixed images/blur</h3>
         <Image fixed={data.fixed.childImageSharp.fixed} />
       </article>
       <article className="single-image">
         <h3>fluid images/svg</h3>
         <Image fluid={data.fluid.childImageSharp.fluid} />
         <div className="small">
           <Image fluid={data.fluid.childImageSharp.fluid} />
         </div>
       </article>
     </section>
   )
}

export default Images

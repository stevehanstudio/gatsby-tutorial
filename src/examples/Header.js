import React from 'react'
import { useStaticQuery,graphql} from 'gatsby'
const getData = graphql`
  {
    site {
      info:siteMetadata {
        author
        data
        description
        title
        person {
          age
          name
        }
      }
    }
  }
`

const Header = () => {
   const {site:{info:{title,person:{ name }}}} = useStaticQuery(getData);
   
   return (
     <div>
       {/*<h1>title : {data.site.siteMetadata.title}</h1>*/}
       {/*<h1>title : {data.site.siteMetadata.person.name}</h1>*/}
       <h1>title : {title}</h1>
       <h1>name : {name}</h1>
     </div>
   )
}

export default Header

import * as React from "react"
import PropTypes from "prop-types"

import { useStaticQuery} from "gatsby"
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image"



const Header = () => {
const data= useStaticQuery(graphql`
query Logo{
file(relativePath: {eq: "logo.png"}) {
  childImageSharp {
    gatsbyImageData(layout:CONSTRAINED quality:100 )
    }
  
}
}
`)

return(
<Nav>
<LogoContainer>
<GatsbyImage image={data.file.childImageSharp.gatsbyImageData} />
</LogoContainer>
Blog
</Nav>

)
  


}
export default Header


const Nav=styled.nav`
background-color:${props => props.theme.color.background.light};
height:80px;
//position:relative;
;
`

const LogoContainer=styled.div`
padding: 1.5rem 0;


z-index:100;
max-width:150px;
padding:0 15px;
overflow:hidden;
margin-left:60px;
@media only screen and (max-width: 650px) {
  -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
}
`
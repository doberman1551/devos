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
<Button as="a" href="https://lancerlot.substack.com/">Blog</Button>
</Nav>

)
  


}
export default Header


const Nav=styled.nav`
background-color:${props => props.theme.color.background.light};
height:80px;
display:flex;
justify-content:space-around;

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
const Button = styled.button`
color: #021d3a;
Font-weight:800;
  letter-spacing: 1px;
  height: 40px;
  display: inline-flex;
  align-items: center; 
  margin-left: 8px;
  text-decoration:none;
  text-transform: uppercase;
  cursor: pointer;
  margin-top: 8px;
  white-space: nowrap;
 // background: ${props => props.theme.color.secondary};
  border-radius: 4px;
  padding: 0px 40px;
  margin-bottom:16px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: 0px;
  &:hover {
    
    transform: scale(1.1);
  }
  @media (max-width: ${props => props.theme.screen.md}) {
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-left: 0;
    margin-bottom:8px;
  }`

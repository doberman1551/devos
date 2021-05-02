import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from 'styled-components'

const Header = () => {
return(
<Nav>
Devos
</Nav>

)
  


}
export default Header


const Nav=styled.nav`
background-color:${props => props.theme.color.background.light};
height:80px;
`

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import Header from "./Header"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "./styles/GlobalStyles"
import theme from "./styles/theme"


const Layout = ({ children }) => {
 

  return (
    <ThemeProvider theme={theme}>
      <Header/>
     <main> <GlobalStyles/>{children}</main>
      </ThemeProvider>
  )
}




export default Layout

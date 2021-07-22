import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Container, Section } from "../components/Global";

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThanksPage = () => (
  <Layout>
    <SEO title="Thank you page" />
    
    <DownloadContainer>
    <h1>Thanks for Signing-up</h1>
    <Subtitle>Lancerlot is still work in progess and set to launch soon. We will email you once it is live and your special discount code. However access your free <b>"Platforms to find good projects"</b> by subscribing below  &#128071;&#128071; <br/></Subtitle>
        
  {/*  <Button as="a" href="https://www.notion.so/Where-to-find-leads-and-opportunities-aa86ca113ef142f9aaf02c94c850fc0b">Get Access</Button>
    <br>
    </br>
*/} 
    
    <iframe src="https://lancerlot.substack.com/embed" width="480" height="320" frameborder="0" scrolling="no"></iframe>
    <Link to="/">Go back to the homepage</Link>
    </DownloadContainer>

    
  </Layout>
)

export default ThanksPage



/*const StyledDiv = styled.div`
  background-color: ${props => props.theme.color.background.light};
  height:100%;
  width:100%; */
  

const DownloadContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px 0 40px;
 
`

const Subtitle = styled.span`
  ${props => props.theme.font_size.xsmall}

  padding-top: 8px;
  margin-bottom:24px;
  font-size: 18px;
  color: ${props => props.theme.color.primary};`

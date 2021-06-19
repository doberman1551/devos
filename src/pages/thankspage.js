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
    <h1>Thank you for subscribing.</h1>
    <Subtitle>Lancerlot is still work in progess and set to launch soon. However access your free <b>"Platforms to find good projects"</b> below </Subtitle>
        
    <Button as="a" href="https://www.notion.so/Where-to-find-leads-and-opportunities-aa86ca113ef142f9aaf02c94c850fc0b">Get it</Button>
    <br>
    </br>
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
const Button = styled.button`
 font-weight: 500;
  font-size: 14px;
  color: white;
  letter-spacing: 1px;
  height: 60px;
  display: block;
  margin-left: 8px;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  background: ${props => props.theme.color.secondary};
  border-radius: 4px;
  padding: 0px 40px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  line-height: 60px; 
  text-align: center;
  outline: 0px;
  &:hover {
    box-shadow: 12px 12px 2px 1px rgba(191,175,178,1);
    transform: scale(1.05);
  }
  @media (max-width: ${props => props.theme.screen.md}) {
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-left: 0;
  }
`


const Subtitle = styled.span`
  ${props => props.theme.font_size.xsmall}

  padding-top: 8px;
  margin-bottom:24px;
  font-size: 18px;
  color: ${props => props.theme.color.primary};`

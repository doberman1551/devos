import React from 'react'
import styled from "styled-components"

import { Container, Section } from "./Global"

const Cta1 = () => {
    return (
        <StyledSection>
        <GetStartedContainer>
          <GetStartedTitle>Join the Community and Beta!</GetStartedTitle>
          <Subtitle>Subscribe and get access to <b>"Platforms to find good projects"</b> section and an early-bird discount on the official launch!
          <br></br>  Fan of small-form actionable information? Also receive curated tips in your mailbox weekly. </Subtitle>
       
        
         
          
          <Button as="a" href="/thankspage">Get It!</Button>
           
             
         
  
        </GetStartedContainer>
      </StyledSection>
    
    )
}

export default Cta1

const StyledSection = styled(Section)`
  background-color: ${props => props.theme.color.background.light};
  clip-path: polygon(0 0, 100% 14%, 100% 100%, 0% 100%);
`

const GetStartedContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px 0 40px;
`

const GetStartedTitle = styled.h4`
  margin: 0 auto 16px;
  text-align: center;
`




const Subtitle = styled.span`
  ${props => props.theme.font_size.xxsmall}
  padding-top: 8px;
  margin-bottom:16px;
  font-size: 18px;
  line-height: 1.5;
  color: ${props => props.theme.color.primary};
`

const Button = styled.button`
  font-weight: 500;
  font-size: 14px;
  color: white;
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
  background: ${props => props.theme.color.secondary};
  border-radius: 4px;
  padding: 0px 40px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: 0px;
  &:hover {
    box-shadow: 12px 12px 2px 1px rgba(191,175,178,1);
    transform: scale(1.05);
  }
  @media (max-width: ${props => props.theme.screen.md}) {
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-left: 0;
  }`

  // Styled link not button
{/*const Button = styled.button`
  display: inline-block;
  border-radius: 5px;
  padding: 16.5px 36px;
  vertical-align: middle;
  margin:5px,auto;
  width: 120px;
  background: ${props => props.theme.color.secondary};
  color: white;
  text-decoration: none;
  &:hover {
    box-shadow: 12px 12px 2px 1px rgba(191,175,178,1);
    transform: scale(1.05);
  }
  @media (max-width: ${props => props.theme.screen.md}) {
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-left: 0;
  }
`*/}
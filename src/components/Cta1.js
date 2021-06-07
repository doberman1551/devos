import React from 'react'
import styled from "styled-components"

import { Container, Section } from "./Global"

const Cta1 = () => {
    return (
        <StyledSection>
        <GetStartedContainer>
          <GetStartedTitle>Be the first to get the Beta</GetStartedTitle>
          <Subtitle>Subscribe and get access to "Places to find clients" section  for free when is live</Subtitle>
        
          <CtaForm  action="https://getform.io/f/599b06c3-2bb8-46ba-b323-ef6f3a8e5cf7" method="post" >
                <CtaInput placeholder="Name"  type="name" name="name" required />
                <CtaInput placeholder="Your email"  type="email" name="email" required/>
                <TryItButton>Try it!</TryItButton>
              </CtaForm>
        
         
         
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

const TryItButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  color: white;
  letter-spacing: 1px;
  height: 40px;
  display: block;
  margin-left: 8px;
  text-transform: uppercase;
  cursor: pointer;
  margin-top: 0px;
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
  }
`

const Subtitle = styled.span`
  ${props => props.theme.font_size.xxsmall}
  padding-top: 8px;
  margin-bottom:16px;
  font-size: 18px;
  color: ${props => props.theme.color.primary};
`
const CtaForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center; 
  padding-bottom: 16px;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
  }
`

const CtaInput = styled.input`
  font-weight: 500;
  
  font-size: 16px;
  color: ${props => props.theme.color.primary};
  line-height: 42px;
  width: 100%;
  text-align: left;
  height: 40px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.color.secondary};
  border-image: initial;
  border-radius: 4px;
  padding: 8px 16px;
  margin:8px 8px;
  outline: 0px;
  &:focus {
    box-shadow: inset ${props => props.theme.color.secondary} 0px 0px 0px 2px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
    margin-bottom: 8px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    display: block;
    width: 100%;
  }
`
import React from 'react'
import styled from "styled-components"

import { Container, Section } from "./Global"

const Cta1 = () => {
    return (
        <StyledSection>
        <GetStartedContainer>
          <GetStartedTitle>Be the first to get the Beta</GetStartedTitle>
          <Subtitle>Subscribe and get access to "Places to find clients" section  for free</Subtitle>
          <TryItButton>Try it!</TryItButton>
         
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
  padding: 80px 0 40px;
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
  height: 60px;
  display: block;
  margin-left: 8px;
  text-transform: uppercase;
  cursor: pointer;
  margin-top: 16px;
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
    box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
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
  font-size: 18px;
  color: ${props => props.theme.color.primary};
`

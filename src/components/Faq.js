import React from 'react'
import styled from "styled-components";

import {Section} from "./Global"

export const Faq = () => {
    return (
      <Wrapper>
      <Container>
      <Flex>
    
               
                <FaqCard>
                 
                    <FaqTitle> When is the official launch?</FaqTitle>
                    <p>
                      We hope to launch at end of summer 2021. You could still <a href="https://lancerlot.substack.com/">subscribe to the newsletter </a>to recieve content.
                    </p>
                
                </FaqCard>
      
        
                <FaqCard>
             
                    <FaqTitle>How does it work?</FaqTitle>
                    <p>
                      Once you purchase Lancerlot, you will receive a link for Notion access. </p>
               
                </FaqCard>
             
                <FaqCard>
                
                    <FaqTitle>Do I need paid Notion subscription?</FaqTitle>
                    <p>
                      No! You could use a free Notion account to acess all of the dashboard and materials.
                    </p>
                  
                </FaqCard>
              
             
                <FaqCard>
                
                    <FaqTitle>Free vs Paid?</FaqTitle>
                    <p>
                     The version contains "Places to find good projects" currently. The paid version would entail full access to all the dashboard materials plus discount codes.
                     </p>
                 
                </FaqCard>
                </Flex>
            
                </Container>
                </Wrapper>
    
    )
    
    
}

{/*const SectionStyled = styled(Section)`
  background-color: ${props => props.theme.color.background.light};
  display:grid;
  
  grid-template-columns: 1fr 1fr;
  grid-gap:20px;
  align-items:center;
  margin:0 auto;
  `
*/}
const FaqCard = styled.div`
  padding:2rem;
  padding-left:2.5rem;
  box-sizing: border-box;
  min-width: 0;
  position: relative;
  &::before {
    
   
    font-weight: 900;
    min-width: 30px;
    min-height: 30px;
    max-height: 30px;
    font-size: 15px;
    
   
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 500px;
    position: absolute;
    left: 0;
  }
`;

const FaqTitle = styled.span`

  font-size: 24px;
  font-weight: 900;
  letter-spacing: -0.75px;
  margin-bottom: 24px;
  line-height: 2rem;
`;

export const Container = styled.div`
  max-width: 1200px;
  background-color: ${props => props.theme.color.background.light};
  width: 75%;
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: ${props => props.theme.screen.xs}) {
    max-width: 540px;
  }

  @media (min-width: ${props => props.theme.screen.sm}) {
    max-width: 720px;
  }

  @media (min-width: ${props => props.theme.screen.md}) {
    max-width: 960px;
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    max-width: 1200px;
  }

  ${props =>
    props.fluid &&
    `
    max-width: 1200px !important;
  `};
`
const Flex = styled.div`
  display: grid;
  justify-content: space-space-around;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    width:80%;
    grid-gap: 64px;
  }
`
const Wrapper=styled.div`
  background-color: ${props => props.theme.color.background.light};
  text-align:center;
`
import React from 'react'
import styled from "styled-components";

import {Section} from "./Global"

export const Faq = () => {
    return (
     
       <SectionStyled>  
               
                <FaqCard>
                 
                    <FaqTitle> How does it work?</FaqTitle>
                    <p>
                      After purchase you will receive a link with access
                    </p>
                
                </FaqCard>
      
        
                <FaqCard>
             
                    <FaqTitle>How does it work?</FaqTitle>
                    <p>
                      Yes. We update all of our themes regularly, plus are
                      constantly adding new components, pages, and features to our
                      themes. Purchase once and get lifetime updates.
                    </p>
               
                </FaqCard>
             
                <FaqCard>
                
                    <FaqTitle>Does it work with WordPress?</FaqTitle>
                    <p>
                      Create custom landing pages with Omega that converts more
                      visitors than any website. With lots of unique blocks, you can
                      easily build a page without any design or custom coding.
                    </p>
                  
                </FaqCard>
              
             
                <FaqCard>
                
                    <FaqTitle>Will you provide support?</FaqTitle>
                    <p>
                      With lots of unique blocks, you can easily build a page
                      without any design or custom coding. with Omega that converts
                      more visitors than any website.
                     </p>
                 
                </FaqCard>
                </SectionStyled> 
            
    )
    
    
}

const SectionStyled = styled(Section)`
  background-color: ${props => props.theme.color.background.light};
  display:grid;
  grid-template-columns: 1fr 1fr;
  grid-gap:20px;
  align-items:center;
  margin:0 auto;
  `

const FaqCard = styled.div`
  padding-left:2rem;
  box-sizing: border-box;
  min-width: 0;
  position: relative;
  &::before {
    content: "\f061";
   
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

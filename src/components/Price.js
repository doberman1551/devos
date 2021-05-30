import React from 'react'
import  {Section} from "./Global"
import styled from 'styled-components'
export const Price = () => {
    return (
      <StyledSection>
        
   <PriceContainer>
   <h2>Pricing</h2>
    <PanelPricingTable>
    
      <PricingPlan>
        
      
        <PricingFeatures>
          <PricingFeaturesItem>Custom domains</PricingFeaturesItem>
          <PricingFeaturesItem>Custom domains</PricingFeaturesItem>
          </PricingFeatures>
        <PricingPrice>Free</PricingPrice>
        <Button>Sign up</Button>
        </PricingPlan>
      
        <PricingPlanFeatured>
       
        <h2>Early Access</h2>
        <PricingFeatures>
          <PricingFeaturesItem>Custom domains</PricingFeaturesItem>
          <PricingFeaturesItem>Custom domains</PricingFeaturesItem>
          </PricingFeatures>
        <PricingPrice>Free</PricingPrice>
        <Button>Sign up</Button>
        </PricingPlanFeatured>
        
       
        <PricingPlan>

        <h2>Premium</h2>
        <PricingFeatures>
          <PricingFeaturesItem>Custom domains</PricingFeaturesItem>
          <PricingFeaturesItem>Custom domains</PricingFeaturesItem>
          </PricingFeatures>
        <PricingPrice>Free</PricingPrice>
        <Button>Sign up</Button>
        </PricingPlan>
   
    
    </PanelPricingTable>
  </PriceContainer>
  </StyledSection>
  )    
}
export default Price


const StyledSection = styled(Section)`
  background-color: ${props => props.theme.color.background.light};
  clip-path: polygon(0 0, 100% 14%, 100% 100%, 0% 100%);
`

export const PriceContainer=styled.div`
    margin: 0 auto;
    padding: 50px 0 0;
    //max-width: 960px;
    width:80%;
    `

  export const PanelPricingTable=styled.div`
    box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.08), 0px 20px 31px 3px rgba(0, 0, 0, 0.09), 0px 8px 20px 7px rgba(0, 0, 0, 0.02);
    display: flex;
    flex-direction: column;
    text-align: center;
    text-transform: uppercase;
  
  @media (min-width: 900px) {
    
      flex-direction: row;
    
  };
  
 `

  
  
  export const PricingPlan=styled.div `
    border-bottom: 1px solid #e1f1ff;
    padding: 25px;
    background-color: ${props => props.theme.color.background.white};
  
  @media (min-width: 900px) {
  
      border-bottom: none;
      border-right: 1px solid #e1f1ff;
      flex-basis: 100%;
      padding: 25px 50px;
    }
  
`
export const PricingPlanFeatured=styled.div `
    border-bottom: 1px solid #e1f1ff;
    padding: 25px;
    z-index: 10;
    font-size: 1.15em;

    
    background-color: ${props => props.theme.color.background.white};
  
  @media (min-width: 900px) {
  
      border-bottom: none;
      border-right: 1px solid #e1f1ff;
      flex-basis: 100%;
      padding: 25px 50px;
    }
  
`
  
export const PricingFeatures=styled.ul`
    color: #016FF9;
    font-weight: 600;
    letter-spacing: 1px;
    margin: 50px 0 25px;
  
  `
  export const PricingFeaturesItem=styled.li`
    border-top: 1px solid #e1f1ff;
    font-size: 12px;
    line-height: 1.5;
    padding: 15px 0;
  
  `

 export const PricingPrice=styled.span`
  color: #016FF9;
  display: block;
  font-size: 32px;
  font-weight: 700;
`

export const Button=styled.button`
  border: 1px solid #9dd1ff;
  border-radius: 10px;
  color: #348EFE;
  display: inline-block;
  margin: 25px 0;
  padding: 15px 35px;
  text-decoration: none;
  transition: all 150ms ease-in-out;
`


  
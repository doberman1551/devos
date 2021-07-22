import React from 'react'
import  {Section} from "./Global"
import styled from 'styled-components'
export const Price = () => {
    return (
      <StyledSection>
        
        <PriceContainer>
       
        <h2>Join the Community and Beta</h2>
        <SubText>
         No subscriptions, jut one-time access fees. No need to pay for additional software.
        </SubText>
          <PanelPricingTable>
    
            <PricingPlan>
              <PreTitle>Demo</PreTitle>
                <PricingPrice>Free</PricingPrice>
                <PostTitle>Free forever</PostTitle>
                <p> Get a free limited preview access.</p> 
              
                
                <Button as="a" href="/thankspage">Get It!</Button>
            </PricingPlan>
      
           <PricingPlanFeatured>
           <PreTitle>Early-Bird(50 places)</PreTitle>
             <PricingPrice>$29</PricingPrice>
             <PostTitle>One time purchase</PostTitle>
          <p> Get the free chapter plus claim a discount for the official full-acccess launch!</p>
        
          <Button as="a" id="preBuyButton" href="/thanksB">Sign up</Button>
        </PricingPlanFeatured>
        
       
        <PricingPlan>
        <PreTitle>Regular</PreTitle>
        <PricingPrice>$49</PricingPrice>
         <PostTitle>One time purchase</PostTitle>
       
        <p> Official Price when we launch</p>
       
        <Button>Comming Soon</Button>
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
    text-align: center;
    //max-width: 960px;
    width:50%;
    `

  export const PanelPricingTable=styled.div`
    box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.08), 0px 20px 31px 3px rgba(0, 0, 0, 0.09), 0px 8px 20px 7px rgba(0, 0, 0, 0.02);
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content:space-evenly;
    background-color: ${props => props.theme.color.background.white};
    padding: 1rem;
  @media (min-width: 900px) {
      flex-direction: row;
    
  };
  
 `
  
  export const PricingPlan=styled.div `
    border-bottom:none ;
    padding: 8px;
    background-color: ${props => props.theme.color.background.white};
    margin-bottom:32px;
  @media (min-width: 900px) {
      border-bottom: none;
      flex-basis: 100%;
      padding: 25px 25px;
    }
  
`
export const PricingPlanFeatured=styled.div `
    border-bottom: 1px solid #e1f1ff;
    padding: 16px;
    border-left: 0.5px solid #d4af37;
    border-right: 0.5px solid #d4af37;
    background-color: ${props => props.theme.color.background.white};
    transform: scale(1.2);
  
  @media (min-width: 900px) {
  
      border-bottom: none;
      border-right: 0.5px solid #d4af37;
      flex-basis: 100%;
      padding: 25px 50px;
    }
  
`
  

 export const PricingPrice=styled.span`
   color:${props => props.theme.color.primary};
  display: block;
  font-size: 32px;
  font-weight: 700;
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


export const PreTitle=styled.span`
font-size: 16px;
font-weight: 300;
letter-spacing: -0.56px;
line-height: 28px;
margin-bottom: 22px;
color: ${props => props.theme.color.accent};

`
export const PostTitle=styled.span`
  color: #696871;
  display: inline-block;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: -0.56px;
  line-height: 28px;
  margin-bottom: 22px;
  `

  
export const SubText=styled.p `
margin-bottom:32px;
font-size: 20px;
font-weight: 300;

`
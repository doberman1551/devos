import React from 'react'
import  {Section} from "./Global"
import styled from 'styled-components'
export const Price = () => {
    return (
      <StyledSection>
        
        <PriceContainer>
       
        <h2>Buy Now! Save now... </h2>
        <SubText>
         No subscriptions, jut one-time access fees. No need to pay for additional software.
        </SubText>
        <Flex>
          <Card>
      
          <CardBody>
    
              <PreTitle>Demo</PreTitle>
                <PricingPrice>Free</PricingPrice>
                <PostTitle>Free Chapter</PostTitle>
                <p> Get a free one chapter access</p> 
              
                
                <Button as="a" href="/thankspage">Get It!</Button>
            </CardBody>
            </Card>
      
         <CardFeatured>
         <CardBody>
           <PreTitle>Early-Bird(50 places)</PreTitle>
             <PricingPrice>$29</PricingPrice>
             <PostTitle>One time purchase</PostTitle>
          <p> Full access for a limited time</p>
          </CardBody>
             <ButtonBig as="a" id="preBuyButton" href="https://gumroad.com/l/JoUWs?wanted=true">Get it!</ButtonBig>
        
          </CardFeatured>
        
       
          <Card>
          <CardBody>
        <PreTitle>Regular</PreTitle>
        <PricingPrice>$49</PricingPrice>
         <PostTitle>One time purchase</PostTitle>
       
        <p> Official Price</p>
       
        <Button> Soon!</Button>
        </CardBody>
       </Card>
       </Flex>
   
    
    
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
    padding: 56px 0 16px 0;
    text-align: center;
    //max-width: 960px;
    width:50%;
    `

  
 
  
 


  

 export const PricingPrice=styled.span`
   color:${props => props.theme.color.primary};
  display: block;
  font-size: 32px;
  padding:8px;
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

padding:32px 16px 16px 16px;
line-height: 28px;
margin:22px 0px 22px 0px;
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

const Flex = styled.div`
  
  display: flex;
   justify-content: space-between;
  
  flex-wrap: wrap;
  padding:0 16px;
  @media (max-width: ${props => props.theme.screen.sm}) {

    justify-content:center;
  }
 // @media (max-width: ${props => props.theme.screen.md}) {
  //  grid-template-columns: 2fr;
   // grid-gap: 80px;
 // }
  
  `

export const Card = styled.div`
  flex: 0 1 calc(34% - 1em);
  line-height:24px; 
  padding:16px;
  padding: 0 0;
  background-color:#ffffff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    flex: 1 1 1;
    min-width:310px;
    padding-bottom:18px;
   
  }
  

`

export const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
  
  ;`

export const CardFeatured = styled.div`
flex: 0 1 calc(34% - 1em);
padding-bottom:32px;
line-height:24px; 
padding: 0 0;
background-color:#ffffff;
box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
border-radius: 5px;
transform: scale(1.12);
@media (max-width: ${props => props.theme.screen.sm}) {
  flex: 1 1 1;
  min-width:310px;
  margin-bottom:24px;
  margin-top:24px;
  padding-bottom:18px;
 
}`

const ButtonBig = styled.button`
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
  margin-bottom:16px;
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
    margin-bottom:8px;
  }`
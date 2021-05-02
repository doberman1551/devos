import React from 'react'
import  Container from "./Global"
import styled from 'styled-components'
export const Price = () => {
    return (
   <PriceContainer>
    <PanelPricingTable>
      
      <PricingPlan>
        
        <h2 class="pricing-header">Personal</h2>
        <PricingFatures>
          <PricingFeaturesItem>Custom domains</PricingFeaturesItem>
          <PricingFeaturesItem>Custom domains</PricingFeaturesItem>
          </PricingFatures>
        <PricingPrice>Free</PricingPrice>
        <PricingButton>Sign up</PricingButton>
      
      
     {/* <div class="pricing-plan">
        <img src="https://s28.postimg.cc/ju5bnc3x9/plane.png" alt="" class="pricing-img">
        <h2 class="pricing-header">Small team</h2>
        <ul class="pricing-features">
          <li class="pricing-features-item">Never sleeps</li>
          <li class="pricing-features-item">Multiple workers for more powerful apps</li>
        </ul>
        <span class="pricing-price">$150</span>
        <a href="#/" class="pricing-button is-featured">Free trial</a>
      </div>
      
      <div class="pricing-plan">
        <img src="https://s21.postimg.cc/tpm0cge4n/space-ship.png" alt="" class="pricing-img">
        <h2 class="pricing-header">Enterprise</h2>
        <ul class="pricing-features">
          <li class="pricing-features-item">Dedicated</li>
          <li class="pricing-features-item">Simple horizontal scalability</li>
        </ul>
        <span class="pricing-price">$400</span>
        <a href="#/" class="pricing-button">Free trial</a>
      </div>
    */}
      </PricingPlan>
    </PanelPricingTable>
  </PriceContainer>
  )    
}
export default Price



export const PriceContainer=styled(Container)`
    margin: 0 auto;
    padding: 50px 0 0;
    //max-width: 960px;
    width: 100%;
    `
  
  
  
  
  
  export const PricingTable=styled.div`
    box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.08), 0px 20px 31px 3px rgba(0, 0, 0, 0.09), 0px 8px 20px 7px rgba(0, 0, 0, 0.02);
    display: flex;
    flex-direction: column;
  
  
  @media (min-width: 900px) {
    
      flex-direction: row;
    
  };
  
  .pricing-table * {
    text-align: center;
    text-transform: uppercase;
  }
  
  .pricing-plan {
    border-bottom: 1px solid #e1f1ff;
    padding: 25px;
  }
  
  .pricing-plan:last-child {
    border-bottom: none;
  }
  
  @media (min-width: 900px) {
    .pricing-plan {
      border-bottom: none;
      border-right: 1px solid #e1f1ff;
      flex-basis: 100%;
      padding: 25px 50px;
    }
  
    .pricing-plan:last-child {
      border-right: none;
    }
  }
  
  .pricing-img {
    margin-bottom: 25px;
    max-width: 100%;
  }
  
  .pricing-header {
    color: #888;
    font-weight: 600;
    letter-spacing: 1px;
  }
  
  .pricing-features {
    color: #016FF9;
    font-weight: 600;
    letter-spacing: 1px;
    margin: 50px 0 25px;
  }
  
  .pricing-features-item {
    border-top: 1px solid #e1f1ff;
    font-size: 12px;
    line-height: 1.5;
    padding: 15px 0;
  }
  
  .pricing-features-item:last-child {
    border-bottom: 1px solid #e1f1ff;
  }
  
  .pricing-price {
    color: #016FF9;
    display: block;
    font-size: 32px;
    font-weight: 700;
  }
  
  .pricing-button {
    border: 1px solid #9dd1ff;
    border-radius: 10px;
    color: #348EFE;
    display: inline-block;
    margin: 25px 0;
    padding: 15px 35px;
    text-decoration: none;
    transition: all 150ms ease-in-out;
  }
  
  .pricing-button:hover,
  .pricing-button:focus {
    background-color: #e1f1ff;
  }
  
  .pricing-button.is-featured {
    background-color: #48aaff;
    color: #fff;
import React from 'react'
import styled from "styled-components"
import { Section } from "./Global"
import { Container, Row, Col, Card,Button,Form } from "react-bootstrap";

export const PricingTable = () => {
    return (
       
         <Flex>   
        <Row className="justify-content-center">
          <Col lg="4" md="6" sm="8" className="mt-4">
            <PricingCard>
              <span className="pre-title">Limited</span>
              <h2 className="title mb-4">Free</h2>
              <p>
                Get a limted access<br className="d-none d-sm-block"></br>{" "}
                 right now.
                </p>
              <div className="pt-4">
                <Form>
                <Form.Control type="email" placeholder="Enter email" />    
                </Form>
                
            </div>
              <div className="mt-auto">
                <Button width="100%" bg="secondary">
                  Send free content
                </Button>
              </div>
            </PricingCard>
          </Col>
          <Col lg="4" md="6" sm="8" className="mt-4">
            <PricingCard>
              <span className="pre-title">Only eBook</span>
              <h2 className="title mb-2">$29</h2>
              <span className="post-title  mb-4">One time purchase</span>
              <p>
                Get the eBook version +<br className="d-none d-sm-block"></br>{" "}
                Audio version of the book.
                </p>
              <div className="mt-auto">
                <Button width="100%">Buy from Amazon</Button>
              </div>
            </PricingCard>
          </Col>
          <Col lg="4" md="6" sm="8" className="mt-4">
            <PricingCard>
              <span className="pre-title">Only eBook</span>
              <h2 className="title mb-2">$49</h2>
              <span className="post-title  mb-4">One time purchase</span>
              <p>
                Hardcover + eBook version +<br className="d-none d-sm-block"></br>{" "}
                Audio version of the book.
                </p>
              <div className="mt-auto">
                <Button width="100%">Buy from Amazon</Button>
              </div>
            </PricingCard>
          </Col>
        </Row>
        </Flex>
      
    
    
           
    )
}

const PricingCard = styled.div`
  border-radius: 10px;
  border: 1px solid #eae9f2;
  min-height: 430px;
  background-color: #fff;
  text-align: center;
  padding-top: 45px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
  
  .pre-title {
    color: black;
    font-size: 16px;
    font-weight: 300;
    letter-spacing: -0.56px;
    line-height: 28px;
    margin-bottom: 22px;
  }
  .post-title {
    color: #696871;
    display: inline-block;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: -0.56px;
    line-height: 28px;
    margin-bottom: 22px;
  }
  .title {
    color: black;
    font-size: 60px;
    font-weight: 700;
    letter-spacing: -1.03px;
    line-height: 56px;
    margin-bottom: 30px;
  }`
 

 const Flex = styled.div`
  display: flex;
    flex-direction: column;
    text-align: center;
    text-transform: uppercase;
 @media (max-width: ${props => props.theme.screen.md}) {
   grid-template-columns: 1fr;
   grid-gap: 64px;
 }
`
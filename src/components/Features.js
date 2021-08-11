import React from "react"
import styled from "styled-components"

import { Section, Container } from "./Global"

const Features = () => (
  <Section id="features">
    <StyledContainer>
      <Subtitle>What it is?</Subtitle>
      <SectionTitle>Get Actionable Information</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>Positioning</FeatureTitle>
          <FeatureText>
            Places and advice on how to position yourself.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Marketing and Leadgen</FeatureTitle>
          <FeatureText>
          Ideas, places and growth-hacking examples for lead generation.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Sales</FeatureTitle>
          <FeatureText>
            Proposals, Contracts and how to utilize partnerships.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Growth</FeatureTitle>
          <FeatureText>
          Delivery, hiring, organisation, PM tips and finance.       </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Promo Codes</FeatureTitle>
          <FeatureText> Discounts for some of your favourite ecosystem tools.</FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Community</FeatureTitle>
          <FeatureText>
          Place to share leads and get together on projects.(Coming in v2)
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer>
  </Section>
)

export default Features

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: center;
`

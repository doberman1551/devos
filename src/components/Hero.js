import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"
import { Link,useStaticQuery} from "gatsby"
import {useState} from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
const Hero = () => {
  const handleScroll=()=> {
    const scrollheight=document.body.offsetHeight/2+350;
    console.log(scrollheight)
    window.scroll({
      top:scrollheight,
      left: 0, 
      behavior: 'smooth',
    })};


const data= useStaticQuery(graphql`
query HeroBanner{
file(relativePath: {eq: "knight.png"}) {
  childImageSharp {
    gatsbyImageData(layout:CONSTRAINED quality: 100 )
    }
  
}
}

`)
console.log(data);
    
    return (
        <HeroWrapper id="top">
        <Container>
          <Flex>
            <HeroTextGroup>
              <Subtitle>Lancerlot</Subtitle>
              <h1>
                Grow as a freelancer or small agency
                <br />
               
              </h1>
              <h2>
                We created all-in-one dashboard with resources on sales, marketing and operations to help you grow.
              </h2>
             <Button as="a" onClick={handleScroll}>Get Access Now</Button>
            </HeroTextGroup>
              <ImageWrapper>
               <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} />
               </ImageWrapper>
          </Flex>
        </Container>
      </HeroWrapper>
    )
  }
  

export default Hero




export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
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

const HeroWrapper = styled.header`
 background-color:${props => props.theme.color.background.light}; //#f8f8f8;
  padding: 120px 0 20px 0;
  position: relative;
  //clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
  @media (max-width: ${props => props.theme.screen.md}) {
  }
`
const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 16px;
`

const HeroTextGroup = styled.div`
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      margin: 0 16px;
    }
  }

  h1 {
    margin: 0 0 24px;
    color: ${props => props.theme.color.primary};
  }

  h2 {
    margin-bottom: 24px;
    ${props => props.theme.font_size.regular}
  }

  p {
    margin-bottom: 48px;
  }
`

const Flex = styled.div`
  display: grid;
  justify-content: space-space-around;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 64px;
  }
`



const Button = styled.button`
  display: inline-block;
  border-radius: 5px;
  padding: 16.5px 33px;
  vertical-align: middle;
  margin:0,auto;
  width: 12rem;
  background: ${props => props.theme.color.secondary};
  color: white;
  text-decoration: none;
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
const ImageWrapper = styled.div`
  justify-self: end;
  align-self: center;
  margin-bottom:-20px;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: center;
  }
`


import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import { Link,useStaticQuery} from "gatsby"



const Description = () => {

    const data= useStaticQuery(graphql`
    query ProductInisde {
    file(relativePath: {eq: "productinside.png"}) {
      childImageSharp {
        fluid {
          sizes
          src
        }
      }
    }
  }
  `)

  let StyledImg = styled(props => <Img {...props}/>)`
  perspective: 1500px;
  perspective-origin: left center;
  overflow: visible !important;
  height: 100%;
  width:80%;
  picture, img {
    transform: rotateY(-35deg) rotateX(15deg);
    box-shadow: 25px 60px 125px -25px rgba(80,102,144,.1), 16px 40px 75px -40px rgba(0,0,0,.2);
    border-radius: .625rem;
    transition: 1s !important;
    &:hover {
      transform: rotateY(-30deg) rotateX(15deg);
    }
  }
`

    return (
        <Container>
            <Flex>

            <StyledImg fluid={data.file.childImageSharp.fluid} objectFit="contain" objectPosition="left bottom" /> 
            <p>
            <h2> What is it?</h2>
            <TextArea>
            <b>Building a technology service business is hard... </b> <br></br> Lancerlot is your loyal companion to save time.<br></br> It is an all-in-one <b>Notion</b> dashboard to help you with sales, marketing, projects and  finance. 
            <br></br>
            It's a comprehensive & actionable resource packed with frameworks, templates, resources and tools.
            <br></br>
           Suitable for:
            <ul>
              <li> Freelance Developers and Designers</li>
              <li>Small Agencies(2-30 people)</li>
            </ul>
            </TextArea>
            </p>
            </Flex>

          
       </Container>
    )
}

export default Description



export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 32px 16px;


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
  justify-content: space-between;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 10%;

  
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 64px;
  }
`
export const TextArea = styled.div`
  font-size:20px;
  line-height:30px;
  `
import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import bgimg from '../images/bgBlob.svg';
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

    return (
        <Container>
            <Flex>

            <Img fluid={data.file.childImageSharp.fluid} /> 
            <p>
            <h1> What is it?</h1>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
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
  justify-content: space-between;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 64px;
  }
`
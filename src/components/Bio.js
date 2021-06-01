import React from 'react'
import styled from "styled-components"   
import { graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"
import {useStaticQuery} from "gatsby"


export const Bio = () => {
   const data= useStaticQuery(graphql`
    query Bio{
    file(relativePath: {eq: "dobromir.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout:CONSTRAINED quality: 100 )
        }
      
    }
    }
    
    `)
    return (
        <BioWrapper>
              <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} imgStyle={{
                  borderRadius: '50%',
                }}/>
            
        </BioWrapper>
             

              )   
       
    
}


export const BioWrapper = styled.div`
display: flex;
  align-items: center;
`

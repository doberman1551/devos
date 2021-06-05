import React from 'react'
import styled from "styled-components"   
import { graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"
import {useStaticQuery} from "gatsby"


export const Bio = () => {
   
    return (
        <BioWrapper>
              <GatsbyImage image={data1.file.childImageSharp.gatsbyImageData}/>
            
        </BioWrapper>
             

              )   
       
    
}


export const BioWrapper = styled.div`
display: flex;
  align-items: center;
`

import React from 'react'
import styled from "styled-components"   
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn"
import {HiOutlineMail}  from "@react-icons/all-files/hi/HiOutlineMail"
import { Section } from "./Global"



export const BioInfo = () => {
   
    return (
      <StyledSection>
        <BioWrapper>
              Created by Dobromir Kotsev <br></br>
              <SocialLinks>
              <span>
              <a href="https://www.linkedin.com/in/dobromirkotsev/">
              <FaLinkedinIn/>
              </a>
              &nbsp;</span>
               <a href="mailto:myemail@site.com?Subject=Some%20subject">
                  <HiOutlineMail/>
                </a>
              </SocialLinks>

              </BioWrapper>
  
        </StyledSection>

              )   
       
    
}

const StyledSection = styled(Section)`
  background-color: ${props => props.theme.color.background.light};
  display:flex;
  justify-content:center;
  align-items:center;
  margin-top:-40px;
`
const BioWrapper=styled.div`
`
const SocialLinks=styled.div`
  display:flex;
  justify-content: center;
  margin-top:8px;

`
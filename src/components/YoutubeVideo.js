import React from 'react'
import styled from 'styled-components'
import { Section, Container } from "./Global"
export const YoutubeVideo = () => {
    return (
        <Container>
            <Flex>
            
           
            <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/fLPJ6jmiMpQ`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  
    
    </Flex>
        </Container>
    )
}

export const Flex=styled.div`
 display: flex;
  justify-content: center;
  padding-top:10%;
  padding-bottom:10%;
  `

  export const Video=styled.div`
  overflow: hidden;
  padding-bottom: 50%;
  position: relative;
  height: 0;
  `
  export const Responsive=styled.div`
left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute
  `
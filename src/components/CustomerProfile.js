import React from 'react'
import styled from 'styled-components'
import { Section, Container } from "./Global"
import { StaticImage } from "gatsby-plugin-image"



export const CustomerProfile = () => {
    return (
        <Container>
            <Title>Made for you</Title>
            <Flex>
             <Card>
             <IconImage><StaticImage src="../images/freelancer.png" width={70} height={70} alt="An Agency" /></IconImage>
                <CardHeader> For Tech Freelancers</CardHeader>
                
                <CardBody>
               
            <CardText>Designers and Developers: experienced or just starting out that are looking for ways to position themselves better, find new projects and improve operations.</CardText>
            
                </CardBody>
            </Card>
            <Card>
            <IconImage> <StaticImage src="../images/agency.png" width={70} height={70} alt="An Agency" /></IconImage>
                <CardHeader> For Small Agencies</CardHeader>
                <CardBody>
                <CardText>Small agencies between 2 and 10 people that are looking how to scale and utilize their team better. </CardText>
                {/*<StaticImage src="../images/agency.png" width={280} height={300} alt="An Agency" />*/}
                </CardBody>
            </Card>
         </Flex>

        </Container>
            
        
    )
}






const Title=styled.h2`
text-align: center;
padding:16px;
`
const StyledContainer = styled(Container)`
display: flex;
justify-content: center;
align-items: center; 


`

const Flex = styled.div`
display: flex;
justify-content: space-between;
color:white;
flex-wrap: wrap;
padding:0 16px;
@media (max-width: ${props => props.theme.screen.sm}) {

justify-content:center;
}
// @media (max-width: ${props => props.theme.screen.md}) {
//  grid-template-columns: 2fr;
// grid-gap: 80px;
// }

`

export const Card = styled.div`
color:#021D3A;
flex: 0 1 calc(48% - 1em);
line-height:24px; 
padding: 0 0;
background-color:#F6F8FB;
box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
border-radius: 5px;
@media (max-width: ${props => props.theme.screen.sm}) {
flex: 1 1 1;
min-width:310px;
margin-bottom:16px;

}


`

export const CardBody = styled.div`
padding-right: 32px;
padding-left: 32px;
font-size:20px;
`;
export const CardHeader = styled.h1`
font-size: 32px;
font-weight: bold;
text-align: center;
`;


export const IconImage=styled.div`
display: flex;
justify-content: center;
padding:8px;
`

export const CardText=styled.p`
font-size:20px;
line-height:30px;
`

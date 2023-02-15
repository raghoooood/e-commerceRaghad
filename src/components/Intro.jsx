import React from 'react'
import styled from 'styled-components'
import introImg from '../assets/intro.jpg';
import { NavLink } from 'react-router-dom'

const Section = styled.section`
min-height: ${props => `calc(100vh - 1rem)`} ;
max-width: 100vw;
position: relative;

@media (max-width: 48em) {
    height: 10rem;
    flex-direction: column;
    margin-top: -8rem;
}

`

const Container = styled.div`
width: 100%;
min-height: 80vh;
margin: 0 auto;

display: flex;
justify-content: center;
align-items: center;



@media(max-width: 64em){
  width: 85%;
  
}

@media(max-width: 48em){
flex-direction: column-reverse;

&>*:first-child{
width: 100%;
margin-top: -4rem;
}
}


`


const Box = styled.div`
width: 40%;
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


&>*:first-child{
    margin-top: 10rem;
    }

    

`


const ImgContainer = styled.div`
width: 100%;
position: relative;
left: 50%;
transform: translate(-50%, -15%);
display: flex;
align-items: center;
justify-content: center;

img{
    width: 70%;
    height: auto;
    border-radius: 1rem;
}

@media(max-width: 64em){
    width: 60vh;
    
  }
@media (max-width: 48em) {
    img{
        height: auto;
        width: 40vh;

    }
}
`
const Title = styled.h1`
font-weight: 700;
font-size: 64px;
line-height: 120%;
letter-spacing: 0.003em;
color: black;
padding: 1rem 2rem;
width: 100%;
text-transform: capitalize;


@media (max-width: 64em) {
        width: 100%;
        font-size: 30px;
        text-align: center;
    
}

@media (max-width: 48em) {
    width: 100%;
    padding: 2rem 0;

    font-size: 20px;

}
`

const Description = styled.h3`
font-weight: 400;
font-size: 16px;
line-height: 125%;

letter-spacing: 0.005em;
color: black;
opacity: 0.6;
padding: 1rem 2rem;
width: 100%;
text-transform: capitalize;

text-shadow: 1px 1px 2px #0000;

@media (max-width: 64em) {
        width: 100%;
        font-size: 16px;
        text-align: center;
    
}

@media (max-width: 48em) {
    width: 100%;
    padding: 2rem 0;

    font-size: 14px;

}
`
const Button = styled.button `
display: flex;
align-self: flex-start;

background-color: #F86338;
color: #FFFFFF;
border: none;

font-weight: 700;
font-size: 16px;
line-height: 120%;


letter-spacing: 0.005em;

padding: 1.5rem 3rem;
border-radius: 50px;
cursor: pointer;
position: relative;
justify-content: flex-start;
margin-top: 2rem;
@media (max-width: 48em) {
    padding: 1rem 2rem;
}

@media (max-width: 30em) {
    padding: 1rem 2rem;
    font-size: 12px;

}


`


const Intro = () => {


  return (
    <Section id="home">
    <Container>
        <Box>

        <ImgContainer>
     <img src={introImg} alt="introImage" />
        </ImgContainer>
        </Box>
     <Box> 
        <Title>
         Your Premium Sound, Unplugged! 
        </Title>
        <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </Description>
        <NavLink to="/home">
        <Button>
            Find out More
        </Button>
        </NavLink>
     </Box> 
      
   
    </Container>
  </Section>
    )
}

export default Intro
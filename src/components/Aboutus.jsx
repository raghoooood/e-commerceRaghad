import React from 'react'
import styled from 'styled-components'
import story from '../assets/aboutus.jpg';

const Section = styled.div`
min-height: 100vh;
width: 100%;
background-color: white;
display:flex;
justify-content: center;
align-items: center;
position: relative;
padding: 5rem;
flex:1;

`

const Container = styled.div`
width: 75%;
margin:  2rem;
padding: 5rem;
position: relative;

display: flex;
justify-content: center;
align-items: center;


@media(max-width: 70em){
  width: 85%;

}

@media(max-width: 64em){
  width: 100%;
  flex-direction: column;
  padding: 2rem;

  &>*:last-child{
    width: 50%;
    
  }
}


@media(max-width: 40em){
  width: 100%;
  flex-direction: column;

  &>*:last-child{
    width: 90%;
  }
}
`
const ImageContainer = styled.div`
display: flex;
justify-content: flex-start;
margin: 5rem;

img{
    width: 50vh;
    height: 50%;
    border-radius: 0.5rem;
    
}

@media(max-width: 64em){
    width: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
  }
@media (max-width: 48em) {
    img{
        height: auto;
        width: 40vh;
        
    }
}

`
const Description = styled.div`
`
const Title = styled.h1`
font-weight: 700;
font-size: 48px;
line-height: 120%;

letter-spacing: 0.005em;
text-transform: capitalize;
width: 80%;
color: black;
align-self: flex-start;
margin : 0 auto;

@media(max-width: 64em){
width: 100%;
text-align: center;
}

@media(max-width: 40em){
  font-size: 2em;

}

@media(max-width: 30em){
  font-size: 1.25em;

}
`

const SubHeading = styled.p`
font-weight: 400;
font-size: 16px;
line-height: 125%;

letter-spacing: 0.005em;
color: black;
align-self: flex-start;
width: 80%;
margin : 1rem auto;

opacity: 0.5;
@media(max-width: 64em){
  width: 100%;
  text-align: center;
  font-size: 1em;

  }
  
  @media(max-width: 40em){
    font-size: 1em;
  
  }
  
  @media(max-width: 30em){
    font-size: 0.875em;
  
  }
`



const More = styled.p`

font-size: 1em;
color: orange;
align-self: flex-start;
width: 80%;
margin : 1rem auto;
font-weight:400;

@media(max-width: 64em){
  width: 100%;
  text-align: center;
  font-size: 0.875em;

  }
  
  @media(max-width: 40em){
    font-size: 0.875em;
  
  }
  
  @media(max-width: 30em){
    font-size: 0.75em;
  
  }
`

const Aboutus = () => {
  return (
    <Section>
        <Container>
        <ImageContainer>
      <img src={story} alt="story" />
    </ImageContainer>
        <Description>

<Title>
Story about Our Brand      
</Title>
<SubHeading>
Develop a website by finding a product identity that has value and branding to become a characteristic of a company. We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company Develop a website by finding a product identity that has value and branding to become a characteristic of a company. We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company
</SubHeading>
<More>
Read full story
</More>
</Description>
 

        </Container>
  
  </Section>
);  
}

export default Aboutus
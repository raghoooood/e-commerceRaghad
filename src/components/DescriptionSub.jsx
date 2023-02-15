import { Reviews } from '@mui/icons-material';
import React , { useRef } from 'react'
import styled from 'styled-components'
import { userData } from '../userData';
import Usercard from './UserCard';

const Section = styled.div`
min-height: 100vh;
width: 100%;
background-color: white;
display:flex;
justify-content: center;
align-items: center;
position: relative;

`

const Container = styled.div`
width: 75%;
margin: 0 auto;

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
margin: 0 0 5rem 0;
img{
    width: 50vh;
    height: auto;
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
max-width: 60%;
letter-spacing: 0.005em;
color: black;
align-self: flex-start;
width: 80%;
margin : 1rem auto;

opacity: 0.5;
@media(max-width: 64em){
  width: 100%;
  font-size: 1em;

  }
  
  @media(max-width: 40em){
    font-size: 1em;
  
  }
  
  @media(max-width: 30em){
    font-size: 0.875em;
  
  }
`

const ReviewsContainer = styled.div`
opacity: 1;
margin-top: 1rem;

`
const Main = styled.ul`
  position: relative;
  top: 1rem;
  height: 40vh;
  color: white;

@media screen and (max-width:1080px) {
  display:flex;
  top: 1rem;
  flex-direction: column;

}


@media screen and (max-width:768px) {
  display:flex;
  top: 3rem;
  flex-direction: column;

}
`;

const DescriptionSub = () => {
  const ref = useRef(null);

  return (
    <Section>
        <Container>
     
        <Description>

<Title>
Description     
</Title>
<SubHeading>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo.
<ReviewsContainer>
    <Title>
        Reviews  (2)   
    </Title>
    

        <Main ref={ref}>
          {userData.map((d) => (
            <Usercard key={d.id} data={d}/>
          ))}
        </Main>


    </ReviewsContainer>
</SubHeading>

</Description>
<ImageContainer>
      <img src="https://i.ibb.co/S6qMxwr/jean.jpg" alt="story" />
    </ImageContainer>

  
   
        </Container>
  
  </Section>

  
);  
}

export default DescriptionSub
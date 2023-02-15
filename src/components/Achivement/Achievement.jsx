import React from 'react';
import { combined1,combined2, combined3, combined4, combined5} from './imports';
import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-wrap:  wrap;
justify-content: center;
align-items: center;

@media screen and (max-width: 1080px) {
  margin-top: 30rem;
  }
@media screen and (max-width: 700px) {
margin-top: 12rem;
}
`

const Imgitem = styled.div`
max-width: 180px;
min-width: 120px;
margin: 1rem;
margin-bottom: 2rem;
padding: 0.5rem;
display: flex;

justify-content: center;
align-items: center;

`

const Title = styled.h1`
width: 100%;
text-align: center;
margin-bottom: 2rem;
font-size: 48px;
line-height: 120%;
text-align: center;
letter-spacing: 0.005em;

@media screen and (max-width: 1080px) {
  font-size: 30px;
}
`
const Achievement = () => {
  return (

    <Container>
          <Title>
      Our Achievement
    </Title>
    <Imgitem>
      <img src={combined1} alt= "google"/>
    </Imgitem>
    <Imgitem>
      <img src={combined2} alt= "slack"/>
    </Imgitem>
    <Imgitem>
      <img src={combined3} alt= "atlassian"/>
    </Imgitem>
    <Imgitem>
      <img src={combined4} alt= "dropbox"/>
    </Imgitem>
    <Imgitem>
      <img src={combined5} alt= "shopify"/>
    </Imgitem>
  </Container>
  
  )
}

export default Achievement
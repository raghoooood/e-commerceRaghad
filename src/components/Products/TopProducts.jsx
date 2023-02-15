import React, { useState } from 'react'
import { categories } from "../../data";
import Product from "./Product";
import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";


const Container = styled.div`
height: 70vh;

  display: flex;
  flex-wrap:  wrap;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  position: relative;

`;

const Title = styled.h1`
width: 100%;
text-align: center;
margin-bottom: 2rem;
font-size: 48px;
line-height: 100%;
text-align: center;
letter-spacing: 0.005em;
bottom: 0;
z-index: 1;
position: relative;

  @media screen and (max-width: 1080px) {
  font-size: 30px;
}
`

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: black;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  position: relative;
`;

const ImageContainer = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
position: relative;

@media (max-width: 48em) {
    padding: 1rem 1rem;
    font-size: 12px;

}

@media (max-width: 30em) {
  width: 20px;

  font-size: 10px;

}

`


const TopProducts = () => {
    const scrollRef = React.useRef(null);

    const scroll = (direction) => {
      const { current } = scrollRef;
  
      if(direction === 'left') {
        current.scrollLeft -=300;
      } else {
        current.scrollLeft +=300 ;
      }
    }

    return (
        <Container>

            <Title> Top Items </Title>
            <ImageContainer>

<Arrow direction="left" onClick={() => scroll('left')}>
        <ArrowLeftOutlined />
      </Arrow>
        
          {categories.map((item) => (
            <Product item={item} key={item.id} />
          ))}


      <Arrow direction="right" onClick={() => scroll('right')}>
        <ArrowRightOutlined />
      </Arrow>
            </ImageContainer>
        </Container>
      );
    };

export default TopProducts
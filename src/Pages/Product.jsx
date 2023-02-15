import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import DescriptionSub from "../components/DescriptionSub";
import {ShopContext} from "../context/shop-context";
import React , { useContext } from 'react'

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;


const Rate = styled.span`
color: #F3692E;
display: flex;
margin: 1rem;
font-weight: 800;

`

const ImgContainer = styled.div`
  flex: 1;
  align-items: center;
max-width: 700px;
`

const Image = styled.img`
width: 700px;
height: 552px;
  object-fit: cover;
  position: relative;
  border-radius: 8px;

  @media(max-width: 64em){
    width: 30vh;
    height: 30vh;

  }
@media (max-width: 48em) {
    img{
        height: auto;
        width: 20vh;

    }
}
  `;

const SubImage = styled.img`
width: 210px;
height: 180px;
margin: 0.5rem;
border-radius: 8px;

@media(max-width: 64em){
  width: 8vh;
  height: 8vh;

}
@media (max-width: 48em) {
  img{
      height: auto;
      width: 10vh;

  }
}
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
  max-width: 50%;

  @media(max-width: 64em){
    max-width: 90%;

  }
`;

const Price = styled.span`
  font-size: 40px;
  color: #F86338;
  font-size: 62px;
  line-height: 120%;  
  letter-spacing: 0.003em;
`;


const AddContainer = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 48em) {
    width: auto;
    font-size: 12px;

}

@media (max-width: 30em) {
  width: auto;
    font-size: 10px;

}

}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #F86338;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;

const CartButton = styled.button`
  padding: 15px;
  border: none;
  border-radius: 0.5rem;
  background-color: #F86338;
  cursor: pointer;
  color: white;
font-size: 16px;

display: flex;
align-items: center;

  &:hover{
      background-color: black;
  }

  @media (max-width: 48em) {
    width: 20px;
    font-size: 12px;

}

@media (max-width: 30em) {
  width: 20px;
    font-size: 10px;

}

}
`;

const WhishlistButton = styled.button`
  padding: 15px;
  border: 2px solid #F86338;
  border-radius: 0.5rem;
  background-color: white;
  cursor: pointer;
  color: #F86338;
font-size: 16px;
line-height: 120%;

display: flex;
align-items: center;

  &:hover{
      background-color: black  ;
      color: white;
      border: black;
  }

  @media (max-width: 48em) {
    padding: 1rem 1rem;
    font-size: 12px;

}

@media (max-width: 30em) {
  width: 20px;

  font-size: 10px;

}


`;

const Quanti = styled.div`
width: 50%;
margin: 35px 2px;
display: flex;
font-weight: 700;
font-size: 16px;
line-height: 120%;
justify-content: space-between;

`
const Product = (props) => {
  const {id, image, price, title} = props.data;

  const {addToCart, removeFromCart, cartItems, updateCartItemCount} = useContext(ShopContext);

  return (
    <Container>
         <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
          <SubImage src="https://i.ibb.co/S6qMxwr/jean.jpg" />
          <SubImage src="https://i.ibb.co/S6qMxwr/jean.jpg" />
          <SubImage src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>

        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Rate>★★★★★</Rate>
          <Price>$ 20</Price>

          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Desc>

          <Quanti>
          Quantity
          <AmountContainer>
          <Remove style={{ cursor: "pointer" }}onClick={() => removeFromCart(id)}/>
              <Amount>
              <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>

              </Amount>
              <Add style={{ cursor: "pointer" }} onClick ={() => addToCart(id)}/>
            </AmountContainer>
          </Quanti>
             
          <AddContainer>
          <WhishlistButton>whishlist</WhishlistButton>

            <CartButton onClick={()=> addToCart(id)}> 

              ADD TO CART</CartButton>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      <DescriptionSub/>
    </Container>
  );
};

export default Product;

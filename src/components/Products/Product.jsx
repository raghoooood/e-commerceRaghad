import { FavoriteBorderOutlined, ShoppingCartOutlined} from "@material-ui/icons";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {ShopContext} from "../../context/shop-context"

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  align-items: left;
  justify-content: right;
  transition: all 0.5s ease;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.2);

  

`;

const Container = styled.div`
  flex: 1;
  width: 60vh;
  height: auto;
  display: flex;
  flex-direction: column;
  position: relative;

  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  margin: 1rem 1rem;
  border-radius: 10px;

  &:hover ${Info}{
    opacity: 1;
  }

  @media screen and (max-width: 1080px) {
    width: 300px;
    height: 340px;
    align-items: center;
  justify-content: center;

  }

@media screen and (max-width: 700px) {
  padding: 5rem;
  width: 150px;
  height: 20vh;
}

@media screen and (max-width: 550px) {
  width: 50px;
  height: 100px;
  }

  
`;



const Image = styled.img`
  height: 100vh;
  width: 100%;
  z-index: 1;
  border-radius: 10px;

  @media screen and (max-width: 700px) {
    height: 15vh;

  }
  
  @media screen and (max-width: 550px) {
    height: 15vh;

    }
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #0000;
    transform: scale(1.5);
  }
`;

const Detaile = styled.div`
`
const Title = styled.h2`
`
const Price = styled.h3`
`

const Rate = styled.h3``
const Product = ({item}) => {

  const {addToCart, cartItems} = useContext(ShopContext);
  const cartItemCount = cartItems[item.id];

  return (
    <Container>

      <Image src={item.image} />
      <Detaile>
        <Title>
          {item.title}
        </Title>
        <Price>
          ${item.price}
        </Price>
        <Rate>
          {item.rating}
        </Rate>

      </Detaile>

      <Info>
      <Icon>
          <ShoppingCartOutlined onClick={()=> addToCart(item.id)}/>
          {cartItemCount > 0 && <> ({cartItemCount})</>}

        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>

    </Container>
  );
};

export default Product;

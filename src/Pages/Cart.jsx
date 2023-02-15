import { useContext } from "react";
import styled from "styled-components";
import { NavLink } from 'react-router-dom'
import {ShopContext} from "../context/shop-context";
import { popularProducts } from "../data";
import CartItems from "../components/CartItems";
const Container = styled.div`


`;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

`;

const Info = styled.div`
  flex: 3;
`;



const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span`
font-weight: 700;
font-size: 16px;
line-height: 120%;
`;

const SummaryItemPrice = styled.span`
font-weight: 400;
font-size: 16px;
line-height: 120%;
`;

const Button = styled.button`
padding: 18px 24px;
gap: 10px;

position: absolute;
max-width: 400px;
height: 56px; 
  background-color: #F86338;
  border-radius: 0.5rem;
  border: none;
  color: white;
  font-weight: 600;
`;

const Cart = () => {

  const {cartItems, getTotalCartAmount} = useContext(ShopContext);
  const totalAmount= getTotalCartAmount();


  return (
    <Container>
      <Wrapper>
        <Title>My Cart  </Title>
        <Top>
        <NavLink to="/home">
          <TopButton>CONTINUE SHOPPING</TopButton>
          </NavLink>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">Checkout</TopButton>
        </Top>
        <Bottom>


          <Info>
          {popularProducts.map((item) => {
            if (cartItems[item.id] !== 0){
              return <CartItems data={item} />;
            }
          })}          

            <Hr />

            
          </Info>

{totalAmount > 0 ? (
          <Summary>
            
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>

              </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping </SummaryItemText>
              <SummaryItemPrice>Free Shipping</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {totalAmount}</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT</Button>
          </Summary>
         ) :( <h1> Your Cart is Empty </h1>)}
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Cart;

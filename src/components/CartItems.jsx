import React , { useContext }from 'react'
import styled from "styled-components";
import {ShopContext} from "../context/shop-context";
import { Add, Remove } from "@material-ui/icons";


const Product = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 1.5rem;

`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;



const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 2rem;  
`;

const ProductAmount = styled.div`
  font-size: 34px;
  margin: 5px;
  padding: 1rem;
`;

const ProductPrice = styled.div`
font-weight: 700;
font-size: 50px;
line-height: 120%;
/* or 74px */

letter-spacing: 0.003em;

color: #F86338;

@media (max-width: 48em) {
  font-size: 30px;
  width:100%;

}

@media (max-width: 30em) {

font-size: 20px;

}
`;

const CartItems = (props) => {
    const {addToCart, removeFromCart, cartItems, updateCartItemCount} = useContext(ShopContext);
    const {id, image, price, title} = props.data;
  return (
<Product>
              <ProductDetail>
              <Image src={image} />
                <Details>
                  <ProductName>
                    <b>{title}</b>
                  </ProductName>
                
                <ProductPrice>$ {price}</ProductPrice>
                </Details>

              </ProductDetail>

                <ProductAmountContainer>
                  <Remove style={{ cursor: "pointer" }}onClick={() => removeFromCart(id)}/>
                  <ProductAmount>
                    <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
                  </ProductAmount>
                  <Add style={{ cursor: "pointer" }} onClick ={() => addToCart(id)}/>
                </ProductAmountContainer>
             
             
            </Product>  
            
            )
}

export default CartItems
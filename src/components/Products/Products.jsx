import styled from "styled-components";
import { popularProducts } from "../../data";
import Product from "./Product";

const Container = styled.div`
    flex-wrap: wrap;
    justify-content: space-between;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    padding: 8rem;
    flex:1;
    left:0;
    

    @media screen and (max-width: 1700px) {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 12px;
      padding: 5rem;

    }
    @media screen and (max-width: 1080px) {
      align-items: center;
      justify-content: center;
          width: 40%;
          height: auto;
          grid-template-columns: repeat(6, 1fr);
          grid-gap: 2rem;
          padding: 8rem;
    }
    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(6, 1fr);
      
      grid-gap: 4px;
      padding: 5rem;
    }
  
  
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;

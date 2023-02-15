import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonIcon from '@mui/icons-material/Person';
import { NavLink } from 'react-router-dom'

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;


const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 10px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;


const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0.5rem 1rem;


  
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;

`;

const MenuItemRight = styled.div`
display: flex;
align-items: flex-end;
flex-direction: row;
padding: 2rem;
position: absolute;
right: 0;
flex: 1;
gap: 10px;

`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
        <MenuItem>Shop</MenuItem>
        <MenuItem>Promo</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Blog</MenuItem>
        </Left>
        <Center>
        <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16}} />
          </SearchContainer>
        </Center>
        <Right>
          <MenuItemRight>
              <FavoriteBorderIcon/>
            <Badge badgeContent={4} color="primary" >
            <NavLink to="/cart">
              <ShoppingCartOutlined />
              </NavLink>
            </Badge>
              <PersonIcon />
          </MenuItemRight>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

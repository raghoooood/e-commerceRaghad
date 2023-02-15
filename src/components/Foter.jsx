import {
    Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter,
  } from "@material-ui/icons";
  import styled from "styled-components";
  
  const Container = styled.div`
    display: flex;
    padding: 1rem;
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1`
  color: #F86338;
  font-weight: 700;
  font-size: 64px;
  line-height: 120%;
  `;
  
  const Desc = styled.p`
    margin: 20px 0px;
    
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
    color: #F86338;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    width: 100%;
    margin-bottom: 10px;
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
  
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;

  
  const Foter = () => {
    return (
      <Container>
        <Left>
          <Logo>Dealerz..</Logo>
          <Desc>
          OurStudio is a digital agency UI / UX Design and Website Development located in Ohio, United States of America
          </Desc>
        
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/> +1 234 56 78
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> contact@lama.dev
          </ContactItem>

          <SocialContainer>
            <SocialIcon color="F86338">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="F86338">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="F86338">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="F86338">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Right>
      </Container>
    );
  };
  
  export default Foter;
  
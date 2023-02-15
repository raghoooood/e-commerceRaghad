import { Send } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  height: 40vh;
  background-color: #E5E5E5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: black;
  padding: 2rem;
  margin: 2rem;
  border-radius: 1rem;
  border: 1px solid white;




`;
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
    margin-bottom: 10px;
    

  }
`;

const Desc = styled.div`
font-weight: 400;
font-size: 16px;
line-height: 125%;
text-align: center;
letter-spacing: 0.005em;

color: #9A9AB0;
  margin-bottom: 16px;
  align-items: center;

  @media screen and (max-width: 1080px) {
    font-size: 16px;
    margin-bottom: 10px;

  }
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  border: 1px solid lightgray;
  margin-top: 2rem;

  @media screen and (max-width: 1080px) {
    font-size: 12px;

  }
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;

  @media screen and (max-width: 1080px) {
    font-size: 12px;
  }
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #F86338;
  color: white;

`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Join Our News Letters</Title>
      <Desc>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster.</Desc>
      <InputContainer>
        <Input placeholder="Insert your mail here" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;

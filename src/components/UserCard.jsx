import React from 'react'
import styled from 'styled-components';

const Box = styled.li`
width: 70vh;
height:10rem;
padding: 0.3rem;
background-color: white;
color:black;
margin-right: 8rem;
border-radius: 2rem ;
display: flex;
margin-bottom: 1rem;
flex-direction: column;
justify-content: space-between;
border: 1px solid black;


@media screen and (max-width:1080px) {
    width: 100%;
    height:3rem;
    padding: 20px;
}
`
const Title = styled.h2`
font-size: 30px;
padding: 0.2rem;

@media screen and (max-width:1080px) {
    font-size: 18px;
    padding: 0;
}
`

const Comment = styled.p`
font-size: 20px;
font-weight: 300;
padding: 0.5rem;

@media screen and (max-width:1080px) {
    font-size: 16px;
    padding: 0;
}
`

const Image = styled.div`
width: 30px;
height: 30px;
border-radius:  20px;


@media screen and (max-width:1080px) {
    height:20px;
}
`;
const Rate = styled.div`

`

const UserCard = (props) => {

    const { id, image, name, comment, rating} = props.data;

  return (
<Box key={id}>
<Image 
    img={image}> 
</Image>


<Title>
    {name}
</Title>
<Rate>
    {rating}
</Rate>

<Comment>
    {comment}
</Comment> 

</Box>

 )
}

export default UserCard
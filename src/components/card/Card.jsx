import React from "react";
import { CardButton, CardContainer, CardHeader, CardImg } from "./Card.style";
import defaultImg from "../../assets/book.jpg";

const Card = ({ item }) => {
  return (
    <CardContainer>
      <CardHeader>{item.volumInfo.title}</CardHeader>
      <CardImg src={item.volumInfo.imageLinks.smallThumbnail || defaultImg} />
      <CardButton View More></CardButton>
    </CardContainer>
  );
};

export default Card;

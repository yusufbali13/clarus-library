import React from "react";
import { useLocation, useParams } from "react-router-dom";
import {
  Description,
  DetailContainer,
  DetailImg,
  DetailTitle,
  InfoPart,
} from "./Detail.style";
import defaultImage from "./../../assets/book.jpg";

const Detail = () => {
  const { state } = useLocation();
  const { id } = useParams();
  console.log(id);
  console.log(state);
  return (
    <DetailContainer>
      <DetailTitle>{state.volumeInfo.title}</DetailTitle>
      <DetailImg>
        <img
          src={state.volumeInfo.imageLinks.thumbnail || defaultImage}
          alt=""
        />
      </DetailImg>
      <Description>{state.volumeInfo.description}</Description>
      <InfoPart>
        <p>{state.volumeInfo.authors.join(" - ")}</p>
        <p>
          {state.volumeInfo.publishedDate}
          {state.volumeInfo.publisher && (
            <span> / state.volumeInfo.publisher</span>
          )}
        </p>
      </InfoPart>
    </DetailContainer>
  );
};

export default Detail;

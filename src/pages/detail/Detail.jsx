import React from "react";
import { useLocation, useParams } from "react-router-dom";
import {
  DetailContainer,
  DetailTitle,
  DetailImg,
  Description,
  InfoPart,
  DetailPart,
} from "./Detail.style";
import defaultImg from "../../assets/book.jpg";
const Detail = () => {
  const { state } = useLocation();
  const { id } = useParams();
  console.log(id);
  console.log(state);

  return (
    <DetailContainer>
      <DetailPart>
        <DetailTitle>{state.volumeInfo.title}</DetailTitle>
        <DetailImg>
          <img
            src={state.volumeInfo.imageLinks?.smallThumbnail || defaultImg}
            alt={state.volumeInfo.title}
          />
        </DetailImg>
        <Description>{state.volumeInfo.description}</Description>

        <InfoPart>
          <p>
            {state.volumeInfo.authors?.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </p>
          <p>
            {state.volumeInfo.publishedDate}{" "}
            {state.volumeInfo.publisher && (
              <span>/ {state.volumeInfo.publisher} </span>
            )}
          </p>
        </InfoPart>
      </DetailPart>
    </DetailContainer>
  );
};

export default Detail;
//! DetailPart divini açtık ona css verdik

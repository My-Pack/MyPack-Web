import React from "react";
import Image from "next/image";
import styled from "styled-components";

interface ICard {
  card: IGetCardDataContent;
}

function Card({ card }: ICard) {
  return (
    <StyledCard>
      <Image src={card.cardImage.s3Url} alt="cardImage" fill />
    </StyledCard>
  );
}

export default Card;

const StyledCard = styled.div`
  position: relative;
  background-color: #f5f5f5;
  color: black;
  width: 14.875rem;
  height: 21.75rem;
  overflow: hidden;
`;

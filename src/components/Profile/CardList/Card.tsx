import React from "react";
import Image from "next/image";
import styled from "styled-components";

function Card() {
  return <StyledCard>Card</StyledCard>;
}

export default Card;

const StyledCard = styled.div`
  background-color: #f5f5f5;
  color: black;
  width: 14.875rem;
  height: 21.75rem;
`;

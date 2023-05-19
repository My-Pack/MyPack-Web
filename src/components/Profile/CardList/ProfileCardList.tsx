import React from "react";
import styled from "styled-components";
import Card from "src/components/Profile/CardList/Card";

function ProfileCardList() {
  return (
    <StyledCardList>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </StyledCardList>
  );
}

export default ProfileCardList;

const StyledCardList = styled.div`
  width: 100%;
  height: fit-content;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  place-items: center;
  margin-top: 6rem;
`;

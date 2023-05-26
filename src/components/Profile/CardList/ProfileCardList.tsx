import React from "react";
import styled from "styled-components";
import Card from "src/components/Profile/CardList/Card";

function ProfileCardList({ content }: { content: IGetCardDataContent[] }) {
  return (
    <StyledCardListWrapper>
      <StyledCardList>
        {content.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </StyledCardList>
    </StyledCardListWrapper>
  );
}

export default ProfileCardList;

const StyledCardListWrapper = styled.div`
  width: 100vw;
  height: fit-content;
  z-index: 2;
  display: flex;
  justify-content: center;
  background-color: #202124;
`;
const StyledCardList = styled.div`
  background-color: #202124;

  width: 57rem;
  height: fit-content;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  place-items: center;
  margin-top: 6rem;
`;

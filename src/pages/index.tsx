import { useState } from "react";
import CardItem from "src/components/Card/CardItem";
import PreviewCard from "src/components/Card/Design/PreviewCard";
import Nav from "src/components/Nav";
import useGetCard from "src/hooks/api/useGetCard";
import styled from "styled-components";

function Home() {
  const [cardData, setCardData] = useState<IGetCard | null>(null);

  // const api = fetch("http://localhost:3000/design")
  //   .then((response) => {
  //     return response;
  //   })
  //   .then((json) => {
  //     setCardData(json);
  //   });

  // 실제 서버와 연결
  const { card, isLoading } = useGetCard();

  return (
    <>
      <Nav />
      <StyledWrapper>
        {card?.content.map((data) => {
          return (
            <CardItem
              title={data.title}
              content={data.content}
              img={data.cardImage.s3Url}
            />
          );
        })}
        {card?.content.map((data) => {
          return (
            <PreviewCard
              title={data.title}
              active={true}
              color={data.theme.color}
              content={data.content}
              img={data.cardImage.s3Url}
            />
          );
        })}
      </StyledWrapper>
    </>
  );
}

export default Home;

const StyledWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
`;

const StyledItemWrapper = styled.div`
  display: flex;
`;

// const StyledHambergerWrapper = styled.div`
//   position: fixed;
//   right: 20px;
// `;

// const StyledCardWrapper = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
// `;

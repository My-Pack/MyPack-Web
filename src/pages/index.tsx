import { useState, Suspense } from "react";
import CardList from "src/components/CardList";
import Footer from "src/components/Main/Footer";
import SectionTitle from "src/components/Main/SectionTitle";
import Nav from "src/components/Nav";
import useGetCard from "src/hooks/api/useGetCard";
import styled from "styled-components";
import Loading from "src/components/Loading";

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
  // const { card, isLoading } = useGetCard();

  // Link 에는 cardId가 들어갈 예정
  return (
    <>
      <Nav />
      <StyledWrapper>
        {/* {card?.content.map((data) => {
          return (
            <div onClick={onClick}>
              <PreviewCard
                title={data.title}
                active={active}
                color={data.theme.color}
                content={data.content}
                img={data.cardImage.s3Url}
              />
            </div>
          );
        })} */}

        <SectionTitle title="Today Card" subTitle="HOT" />
        <Suspense fallback={<Loading />}>
          <CardList />
        </Suspense>

        <SectionTitle title="Card" subTitle="NEW" />
        <Suspense fallback={<Loading />}>
          <CardList />
        </Suspense>
      </StyledWrapper>

      <Footer />
    </>
  );
}

export default Home;

function html2canvas(div: HTMLDivElement, arg1: { scale: number }) {
  throw new Error("Function not implemented.");
}

const StyledWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  padding: 1rem 3rem;
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

import { useState } from "react";
import CardList from "src/components/CardList";
import Footer from "src/components/Main/Footer";
import SectionTitle from "src/components/Main/SectionTitle";
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

  // Link 에는 cardId가 들어갈 예정
  return (
    <>
      <Nav />
      <StyledWrapper>

        <Card
          title="한강간 날"
          content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum"
          date="2023.06.03"
          color="pink"
          img="https://github.com/My-Pack/MyPack-Web/assets/63100352/958a401b-6560-4ef5-aae3-0c234eab44c2"
        />

        <Card
          title="부제목있는 버전"
          content="귀여운 강아지 설이"
          subTitle="설이랑 🐶"
          date="2023.06.03"
          color="yellow"
          img="https://github.com/My-Pack/MyPack-Web/assets/63100352/538008df-56bc-44cf-8ff6-e2756f770562"
        />

        <Card
          title="해커톤"
          content="재밌었던 해커톤"
          date="2023.06.03"
          color="white"
          img="https://github.com/My-Pack/MyPack-Web/assets/63100352/c130d416-c5b9-4a78-990e-87be9c11eeb4"
        />


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
        <CardList />

        <SectionTitle title="Card" subTitle="NEW" />
        <CardList />
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

import { Suspense } from "react";
import CardList from "src/components/CardList";
import Loading from "src/components/Loading";
import Footer from "src/components/Main/Footer";
import SectionTitle from "src/components/Main/SectionTitle";
import Nav from "src/components/Nav";
import styled from "styled-components";

function Home() {
  return (
    <>
      <Nav />
      <StyledWrapper>
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

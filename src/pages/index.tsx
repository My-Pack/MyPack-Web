import Head from "next/head";
import Hamburger from "src/components/Hamburger";
import styled, { css } from "styled-components";

function Home() {
  return (
    <>
      <Head>
        <title>MyPack</title>
        <meta name="description" content="MyPack" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Home</div>
      <StyledHambergerWrapper>
        <Hamburger />
      </StyledHambergerWrapper>
    </>
  );
}
const StyledHambergerWrapper = styled.div`
  position: fixed;
  right: 20px;
`;
export default Home;

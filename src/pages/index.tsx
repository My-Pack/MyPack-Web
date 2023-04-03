import Head from "next/head";
import Hamberger from "src/components/Hamberger";
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
        <Hamberger />
      </StyledHambergerWrapper>
    </>
  );
}
const StyledHambergerWrapper = styled.div`
  position: fixed;
  right: 20px;
`;
export default Home;

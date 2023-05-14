import React from "react";
import lottieData from "src/assets/lottieJSON/notFound.json";
import LottieWrapper from "src/components/Common/LottieWrapper";
import styled from "styled-components";

function Page404() {
  return (
    <StyledPage404Wrapper>
      <StyledWrapper>
        <LottieWrapper lottieData={lottieData} />
      </StyledWrapper>
      <h2>페이지를 찾을 수 없습니다</h2>
      <p>올바른 경로로 다시 접속해주세요.</p>
    </StyledPage404Wrapper>
  );
}

export default Page404;

const StyledWrapper = styled.div`
  width: 25rem;
`;

const StyledPage404Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

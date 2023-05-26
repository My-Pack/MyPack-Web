import React from "react";
import LottieWrapper from "../Common/LottieWrapper";
import styled from "styled-components";
import lottieData from "src/assets/lottieJSON/loading.json";

function Loading() {
  return (
    <StyledLoading>
      <LottieWrapper lottieData={lottieData} />
    </StyledLoading>
  );
}

export default Loading;

const StyledLoading = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 10rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

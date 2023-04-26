import lottieCursor from "src/assets/lottieJSON/cursor.json";
import lottieBg from "src/assets/lottieJSON/custom.json";
import LottieWrapper from "src/components/Common/LottieWrapper";
import styled from "styled-components";

function Custom() {
  return (
    <StyledWrapper>
      <StyledLottie>
        <StyledLottieCursor>
          <LottieWrapper lottieData={lottieCursor} />
        </StyledLottieCursor>
        <LottieWrapper lottieData={lottieBg} />
      </StyledLottie>
    </StyledWrapper>
  );
}

export default Custom;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledLottie = styled.div`
  position: relative;
  width: 65%;
`;

const StyledLottieCursor = styled.div`
  position: absolute;
  z-index: 1;
  width: 24%;
  top: 2rem;
  left: 4rem;
`;

import lottieGlobe from "src/assets/lottieJSON/globe.json";
import LottieWrapper from "src/components/Common/LottieWrapper";
import styled from "styled-components";

function World() {
  return (
    <StyledWrapper>
      <StyledLottie>
        <LottieWrapper lottieData={lottieGlobe} />
      </StyledLottie>
    </StyledWrapper>
  );
}
export default World;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 16.7rem;
  margin-top: 1.2rem;
`;

const StyledLottie = styled.div`
  width: 19.8rem;
`;

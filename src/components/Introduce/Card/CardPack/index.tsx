import lottieCardPack from "src/assets/lottieJSON/cardPack.json";
import LottieWrapper from "src/components/Common/LottieWrapper";
import styled from "styled-components";

// TODO 안에 들어갈 내용 구성

function CardPack() {
  return (
    <StyledWrapper>
      <StyledLottie>
        <LottieWrapper lottieData={lottieCardPack} />
      </StyledLottie>
    </StyledWrapper>
  );
}

export default CardPack;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 43rem;
`;

const StyledLottie = styled.div`
  z-index: -1;
  width: 10%;
`;

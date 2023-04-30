import { m } from "framer-motion";
import lottieHeart from "src/assets/lottieJSON/heart.json";
import LottieWrapper from "src/components/Common/LottieWrapper";
import {
  defaultFadeInRightVariants,
  defaultFadeInUpVariants
} from "src/constants/motion";
import styled from "styled-components";

function Share() {
  return (
    <StyledWrapper>
      <StyledInWrapper>
        <StyledKeywordContent
          initial="initial"
          whileInView="animate"
          variants={defaultFadeInUpVariants}
          exit="exit"
        >
          공유하고
        </StyledKeywordContent>
        <StyledSecondContent
          initial="initial"
          variants={defaultFadeInUpVariants}
          whileInView="animate"
          exit="exit"
        >
          <StyledLottie>
            <LottieWrapper lottieData={lottieHeart} />
          </StyledLottie>
          좋아요
        </StyledSecondContent>
        <StyledKeywordContent
          initial="initial"
          variants={defaultFadeInRightVariants}
          whileInView="animate"
          exit="exit"
        >
          저장까지
        </StyledKeywordContent>
      </StyledInWrapper>
    </StyledWrapper>
  );
}
export default Share;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StyledInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0 2.5rem 2.5rem 2.5rem;
`;

const StyledLottie = styled.div`
  margin-top: 0.6rem;
  margin-right: 0.3rem;
  width: 10.5%;
`;

const StyledKeywordContent = styled(m.span)`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 3.3rem;
  width: auto;
`;

const StyledSecondContent = styled(m.span)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  font-size: 1.5rem;
  width: auto;
`;

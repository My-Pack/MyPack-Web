import { motion } from "framer-motion";
import Image from "next/image";
import appleStore from "public/assets/images/appleLogo.png";
import lottieData from "src/assets/lottieJSON/arrowDown.json";
import LottieWrapper from "src/components/Common/LottieWrapper";
import CardComposition from "src/components/Introduce/Section/CardComposition";
import CardDesign from "src/components/Introduce/Section/CardDesign";
import CardIntroduction from "src/components/Introduce/Section/CardIntroduction";
import Outro from "src/components/Introduce/Section/Outro";
import Nav from "src/components/Nav";
import {
  defaultFadeInScaleVariants,
  defaultFadeInUpVariants,
} from "src/constants/motion";
import styled from "styled-components";

function Introduce() {
  return (
    <>
      <Nav />
      <StyledWrapper>
        <StyledIntroWrapper>
          <StyleIntroTitle
            initial="initial"
            whileInView="animate"
            exit="exit"
            variants={defaultFadeInUpVariants}
          >
            <motion.p
              initial="initial"
              whileInView="animate"
              exit="exit"
              variants={defaultFadeInUpVariants}
            >
              카드로 일상을 공유한다
            </motion.p>
            MyPack
          </StyleIntroTitle>

          <StyledAppStore>
            <Image
              src={appleStore}
              alt="account"
              width={24}
              height={24}
              style={{ position: "relative" }}
            />
            App Store
          </StyledAppStore>
        </StyledIntroWrapper>
        <StyledLottieInWrapper>
          <StyledLottieWrapper>
            <LottieWrapper lottieData={lottieData} />
          </StyledLottieWrapper>
        </StyledLottieInWrapper>

        <StyledComponentWrapper>
          <CardIntroduction />
          <CardComposition />
        </StyledComponentWrapper>

        <StyledCardDesignWrapper>
          <StyledCardDesignInWrapper
            initial="initial"
            whileInView="animate"
            exit="exit"
            variants={defaultFadeInScaleVariants}
          >
            <CardDesign />
          </StyledCardDesignInWrapper>
        </StyledCardDesignWrapper>
        <Outro />
      </StyledWrapper>
    </>
  );
}

export default Introduce;

const StyledWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const StyledIntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 11rem 0;
`;

const StyledLottieWrapper = styled.div`
  width: 2.4rem;
  opacity: 0.1;
`;

const StyledLottieInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const StyleIntroTitle = styled(motion.span)`
  letter-spacing: 0.3px;
  font-size: 7rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  p {
    font-size: 1.9rem;
    line-height: 1px;
    letter-spacing: 0.6px;
    opacity: 0.95;
  }
`;

const StyledAppStore = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 10rem;
  padding: 0.7rem 1.4rem;
  margin-top: 3rem;
  background-color: rgb(46, 44, 44, 0.8);
  font-size: 1.06rem;
  border-radius: ${({ theme }) => theme.borderRadius.uiCard};
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.color.buttonHoverBlack};
    transition: all 0.4s;
  }
`;

const StyledComponentWrapper = styled.div`
  padding: 7.3rem 4rem 5rem;
`;

const StyledCardDesignWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 50rem;
  overflow: hidden;
  background: radial-gradient(
    65.10000000000001% 65.10000000000001% at 50% 50%,
    #eeeeee 0%,
    #ffffff 100%
  );
`;

const StyledCardDesignInWrapper = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

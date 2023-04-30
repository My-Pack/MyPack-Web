import { motion } from "framer-motion";
import SectionTitle from "src/components/Introduce/SectionTitle";
import { defaultFadeInScaleVariants } from "src/constants/motion";
import styled from "styled-components";

//TODO 디자인 요소 넣기
function CardIntroduction() {
  return (
    <>
      <SectionTitle
        title="Card"
        subTitle="MyPack에서 만날 수 있는 특별한 Card"
      />
      <StyledWrapper>
        <motion.div
          initial="initial"
          variants={defaultFadeInScaleVariants}
          animate="animate"
          exit="exit"
        >
          {/* <Image src={cardItem} alt="card item" width={300} /> */}
        </motion.div>
      </StyledWrapper>
    </>
  );
}

export default CardIntroduction;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StyledMotion = styled(motion.div)`
  z-index: 36;
  background-color: pink;
`;

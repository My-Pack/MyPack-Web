import { m } from "framer-motion";
import Image from "next/image";
import card from "public/assets/images/card.png";
import { defaultFadeInLeftVariants } from "src/constants/motion";
import styled from "styled-components";

// TODO 이미지 변경 예정

function Record() {
  return (
    <StyledWrapper
      initial="initial"
      whileInView="animate"
      exit="exit"
      variants={defaultFadeInLeftVariants}
    >
      <StyledImg>
        <Image src={card} alt="card img" width={940} />
      </StyledImg>
    </StyledWrapper>
  );
}
export default Record;

const StyledWrapper = styled(m.div)`
  display: flex;
  width: 100%;
`;

const StyledImg = styled.div`
  width: 80%;
`;

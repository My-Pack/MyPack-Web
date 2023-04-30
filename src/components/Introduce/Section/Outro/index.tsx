import { motion } from "framer-motion";
import { defaultFadeInUpVariants } from "src/constants/motion";
import styled from "styled-components";
import Button from "src/components/Introduce/Button";

function Outro() {
  return (
    <StyledWrapper>
      <StyledContent>
        <motion.span
          initial="initial"
          variants={defaultFadeInUpVariants}
          whileInView="animate"
          exit="exit"
        >
          CZ의 시작,
        </motion.span>
        <br />
        <motion.span
          initial="initial"
          variants={defaultFadeInUpVariants}
          whileInView="animate"
          exit="exit"
        >
          MyPack에서
        </motion.span>
      </StyledContent>
      <StyledButtonWrapper>
        <Button />
      </StyledButtonWrapper>
    </StyledWrapper>
  );
}

export default Outro;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 53rem;
  background: linear-gradient(
    0deg,
    rgb(156, 152, 211) 0%,
    rgb(102, 0, 255) 100%
  );
`;

const StyledContent = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 4.5rem;
  letter-spacing: 0.8px;
  opacity: 0.85;
  padding: 8rem 0 0 0;
`;

const StyledButtonWrapper = styled.div`
  margin: 4rem 0;
`;

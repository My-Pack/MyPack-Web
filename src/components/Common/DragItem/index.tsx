import { BoundingBox, motion } from "framer-motion";
import { RefObject } from "react";
import styled from "styled-components";

interface IProps {
  dragEffect?: false | Partial<BoundingBox> | RefObject<Element> | undefined;
  subText?: string;
  text?: string;
  label: string;
  component?: JSX.Element;
}

function DragItem({ label, component, dragEffect, text, subText }: IProps) {
  return (
    <StyledWrapper>
      <StyledCardWrapper drag={true} dragConstraints={dragEffect}>
        <p>{label}</p>
        {text || subText ? (
          <StyledBox>
            <StyledSubText>{subText}</StyledSubText>
            <StyledText>{text}</StyledText>
          </StyledBox>
        ) : (
          ""
        )}
        {component}
      </StyledCardWrapper>
    </StyledWrapper>
  );
}

export default DragItem;

const StyledCardWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: fit-content;
  height: fit-content;

  transform-style: preserve-3d;
`;

const StyledWrapper = styled.div`
  perspective: 63rem;
`;

const StyledBox = styled.div`
  padding: 1rem 1.8rem;
  border: 1px solid hotpink;
`;

const StyledText = styled.div`
  color: ${({ theme }) => theme.color.borderBackground};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 3rem;
  letter-spacing: 1px;
`;

const StyledSubText = styled.span`
  color: ${({ theme }) => theme.color.borderBackground};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: 1.2rem;
  letter-spacing: 0.2.5px;
`;

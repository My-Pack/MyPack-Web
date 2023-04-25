import styled from "styled-components";

interface IProps {
  title: string;
  subTitle?: string;
}

function SectionTitle({ title, subTitle }: IProps) {
  return (
    <StyledWrapper>
      <StyledTitle>{title}</StyledTitle>
      <StyledSubTitle>{subTitle}</StyledSubTitle>
    </StyledWrapper>
  );
}

export default SectionTitle;

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  gap: 2.5rem;
  line-height: 1rem;
`;

const StyledTitle = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 3.7rem;
  letter-spacing: -1px;
`;

const StyledSubTitle = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: 1.5rem;
  opacity: 0.8;
`;

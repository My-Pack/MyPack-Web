import styled from "styled-components";

interface IProps {
  title: string;
  subTitle: string;
  component: JSX.Element;
}

function Card({ title, subTitle, component }: IProps) {
  return (
    <StyledWrapper>
      <StyledTitleWrapper>
        <StyledTitleInWrapper>
          <StyledTitle>{title}</StyledTitle>
          <StyledSubTitle>{subTitle}</StyledSubTitle>
        </StyledTitleInWrapper>
      </StyledTitleWrapper>
      {component}
    </StyledWrapper>
  );
}

export default Card;

const StyledWrapper = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.uiCard};
  background: linear-gradient(
    225deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  width: auto;
  cursor: pointer;
`;

const StyledTitleWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  height: min-content;

  padding: 2.5rem;
  padding-bottom: 1.5rem;
  margin-bottom: 0.5rem;
`;

const StyledTitleInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: min-content;

  gap: 0.625rem;
`;

const StyledTitle = styled.span`
  font-size: 1.7rem;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
`;

const StyledSubTitle = styled.p`
  color: ${({ theme }) => theme.color.grey500};
  font-size: 1.05rem;
  font-weight: ${({ theme }) => theme.fontWeight.light};
`;

import styled from "styled-components";

interface IProps {
  title: string;
  subTitle: string;
}

function SectionTitle({ title, subTitle }: IProps) {
  return (
    <StyledWrapper>
      <span>{title}</span>
      <StyledBox>
        <p>{subTitle}</p>
      </StyledBox>
    </StyledWrapper>
  );
}

export default SectionTitle;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 2.5rem;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }

  p {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.color.black};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
  }
`;

const StyledBox = styled.div`
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  width: fit-content;

  background-color: ${({ theme }) => theme.color.neonMint};
  border-radius: ${({ theme }) => theme.borderRadius.uiCard};
`;

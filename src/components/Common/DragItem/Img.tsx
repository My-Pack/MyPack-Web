import styled from "styled-components";

interface IProps {
  img: string;
}

function Img({ img }: IProps) {
  return (
    <StyledBox>
      <StyledImgWrapper>
        <StyledImg src={img} alt="img" />
      </StyledImgWrapper>
    </StyledBox>
  );
}

export default Img;

const StyledBox = styled.div`
  padding: 1.8rem 1.8rem;
  border: 1px dashed hotpink;
`;

const StyledImgWrapper = styled.div`
  position: relative;
  cursor: move;
`;

const StyledImg = styled.img`
  -webkit-user-drag: none;
  touch-action: none;
  width: 12.5rem;
  height: 12.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.uiCard};
`;

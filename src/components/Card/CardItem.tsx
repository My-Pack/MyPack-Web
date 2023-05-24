import Image from "next/image";
import styled from "styled-components";

interface Props {
  title?: string;
  content?: string;
  img?: string;
}

function CardItem({ title, content, img }: Props) {
  return (
    <StyledCard>
      <StyledItemWrapper>
        <StyledTitleWrapper>{title}</StyledTitleWrapper>
        <StyledImageWrapper>
          <StyledImage>
            {img && <Image src={img} alt="card_img" fill objectFit="cover" />}
          </StyledImage>
        </StyledImageWrapper>
        <StyledSummaryWrapper>{content}</StyledSummaryWrapper>
      </StyledItemWrapper>
      <StyledBottom>@2023 MyPack</StyledBottom>
    </StyledCard>
  );
}

export default CardItem;

const StyledCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 19rem;
  height: 25.7rem;
  border-radius: 15px;
  /* padding: 1rem 1rem; */
  background-color: violet;
  color: black;
  padding: 0.9rem;
  font-weight: ${({ theme }) => theme.fontWeight.light};
`;

const StyledItemWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0.75rem;
  background-color: rgb(199, 199, 199);
  border-radius: 15px;

  box-shadow: inset 0 0 60px whitesmoke, inset 20px 0 80px #f0f,
    inset -20px 0 80px #0ff, inset 20px 0 300px #f0f, inset -20px 0 300px #0ff,
    0 0 50px #fff, -10px 0 80px #f0f, 10px 0 80px #0ff;
`;

const StyledImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 11rem;
`;

const StyledImage = styled.div`
  object-fit: cover;
  border: 3px solid rgb(229, 229, 229);
  margin: 0.3rem 0;
`;

const StyledTitleWrapper = styled.div`
  font-size: 1.25rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  letter-spacing: 0.4px;
`;

const StyledSummaryWrapper = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: 0.87rem;
  letter-spacing: 0.2px;
`;

const StyledBottom = styled.div`
  position: absolute;
  bottom: 0px;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: 2px;
`;

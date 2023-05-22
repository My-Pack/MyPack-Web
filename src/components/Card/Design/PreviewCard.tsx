import Image from "next/image";
import styled from "styled-components";

interface IProps {
  active: boolean;
  title: string;
  content: string;
  color: string;
  img: string;
}

function PreviewCard({ active, title, content, img, color }: IProps) {
  return (
    <StyledCard active={active}>
      <StyledFrame color={color}></StyledFrame>
      <StyledCardItemBackWrapper color={color}>
        <StyledTitleWrapper>{title}</StyledTitleWrapper>
        <StyledContentWrapper>{content}</StyledContentWrapper>
      </StyledCardItemBackWrapper>

      <StyledCardItemWrapper color={color}>
        <StyledImageWrapper>
          <StyledImage>
            {img && (
              <Image src={img} alt="card_img" layout="fill" objectFit="cover" />
            )}
          </StyledImage>
        </StyledImageWrapper>
      </StyledCardItemWrapper>
    </StyledCard>
  );
}

export default PreviewCard;

const StyledFrame = styled.div<{ color: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 33;
  border-radius: 15px;
  border: ${({ color }) => {
    if (color) {
      return `1.2rem solid ${color}`;
    }
  }};
`;

const StyledCardItemWrapper = styled.div<{ color: string }>`
  position: absolute;
  background-color: rgb(207, 205, 205);
  padding: 2rem;
  backface-visibility: hidden;
  width: 100%;
  height: 100%;

  border-radius: 15px;
  overflow-wrap: break-word;
  box-shadow: inset 0 0 60px whitesmoke,
    inset 20px 0 80px ${({ color }) => color}, inset -20px 0 80px transparent,
    inset 20px 0 300px ${({ color }) => color}, inset -20px 0 300px transparent,
    0 0 50px transparent, -10px 0 80px ${({ color }) => color},
    10px 0 80px transparent;
`;

const StyledCardItemBackWrapper = styled(StyledCardItemWrapper)<{
  color: string;
}>`
  transform: rotateY(180deg);
`;

const StyledCard = styled.div<{ active: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 24rem;
  height: 35rem;

  border-radius: 15px;

  color: black;
  font-weight: ${({ theme }) => theme.fontWeight.light};

  transition: 0.4s;
  transform-style: preserve-3d;
  transform: ${({ active }) => {
    if (active) {
      return "rotateY(180deg)";
    }
  }};
`;

const StyledImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  overflow: hidden;
`;

const StyledImage = styled.div`
  object-fit: cover;
`;

const StyledTitleWrapper = styled.div`
  height: auto;
  opacity: 0.9;
  font-size: 1.25rem;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  letter-spacing: 0.4px;
`;

const StyledContentWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
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

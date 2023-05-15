import Image from "next/image";
import styled from "styled-components";

interface IProps {
  active: boolean;
  title: string;
  summary: string;
  previewImage: string;
  color: string;
  img?: string;
}

function PreviewCard({
  active,
  title,
  summary,
  previewImage,
  img,
  color,
}: IProps) {
  return (
    <StyledCard active={active}>
      <StyledFrame>
        <Image src="/assets/images/frame.png" alt="a" layout="fill" />
      </StyledFrame>
      <StyledFrontItemWrapper>
        <StyledImageWrapper>
          {previewImage && (
            <StyledImage>
              <Image
                src={previewImage}
                alt="card_img"
                layout="fill"
                objectFit="cover"
              />
            </StyledImage>
          )}{" "}
        </StyledImageWrapper>
      </StyledFrontItemWrapper>

      <StyledBackCard color={color}>
        <StyledFrontItemWrapper>
          <StyledTitleWrapper>{title}</StyledTitleWrapper>
          <StyledSummaryWrapper>{summary}</StyledSummaryWrapper>
        </StyledFrontItemWrapper>
      </StyledBackCard>

      {/* <StyledBottom>@2023 MyPack</StyledBottom> */}
    </StyledCard>
  );
}

export default PreviewCard;

const StyledFrame = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 33;
`;

const StyledBackCard = styled.div`
  position: absolute;
  background-color: rgb(199, 199, 199);
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
  transform: rotateY(180deg);
  box-shadow: inset 0 0 60px whitesmoke,
    inset 20px 0 80px ${({ color }) => color}, inset -20px 0 80px transparent,
    inset 20px 0 300px ${({ color }) => color}, inset -20px 0 300px transparent,
    0 0 50px transparent, -10px 0 80px ${({ color }) => color},
    10px 0 80px transparent;

  /* box-shadow: inset 0 0 60px whitesmoke, inset 20px 0 80px #f0f,
    inset -20px 0 80px #0ff, inset 20px 0 300px #f0f, inset -20px 0 300px #0ff,
    0 0 50px #fff, -10px 0 80px #f0f, 10px 0 80px #0ff; */
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

  position: relative;
  transition: 0.4s;
  transform-style: preserve-3d;

  transform: ${({ active }) => {
    if (active) {
      return "rotateY(180deg)";
    }
  }};
`;

const StyledFrontItemWrapper = styled.div`
  position: absolute;
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
  padding: 0.75rem;

  border-radius: 15px;
  overflow-wrap: break-word;
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

const StyledSummaryWrapper = styled.div`
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

import Image from "next/image";
import { useState } from "react";
import Btn from "src/components/Card/Btn";
import styled from "styled-components";

interface IProps {
  title: string;
  subTitle?: string;
  content: string;
  date: string;
  color: string;
  img: string;
  width?: string;
  height?: string;
  blur: boolean;
  btn: boolean;
}

//TODO 글자수 제한
function Card({
  title,
  subTitle,
  content,
  date,
  img,
  color,
  width,
  height,
  blur,
  btn,
}: IProps) {
  const [click, setClick] = useState(false);

  function onClick() {
    setClick(!click);
  }

  return (
    <StyledWrapper>
      <StyledCard
        width={width}
        height={height}
        onClick={onClick}
        active={click}
      >
        <StyledFrame color={color}></StyledFrame>
        <StyledCardItemBackWrapper color={color}>
          <StyledTitleWrapper>{title}</StyledTitleWrapper>
          <StyledSubTitleWrapper>{subTitle}</StyledSubTitleWrapper>
          {blur ? (
            <div>
              <StyledContentBlur>
                자세한 내용을 보고 싶다면 아래 돋보기를 클릭하세요!
              </StyledContentBlur>
              <StyledContentWrapper>{content}</StyledContentWrapper>
            </div>
          ) : (
            <StyledContentWrapper>{content}</StyledContentWrapper>
          )}
        </StyledCardItemBackWrapper>
        <StyledCardItemWrapper color={color}>
          <StyledImageWrapper>
            <StyledImage>
              <Image src={img} alt="card_img" fill objectFit="cover" />
            </StyledImage>
            <StyledHover>
              <span> {title}</span>
              <p>{date}</p>
              {subTitle && <p>{subTitle}</p>}
            </StyledHover>
          </StyledImageWrapper>
        </StyledCardItemWrapper>
      </StyledCard>
      {btn ? <Btn /> : " "}
    </StyledWrapper>
  );
}

export default Card;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
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
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
  background-color: rgb(207, 205, 205);
  border-radius: 15px;
  overflow-wrap: break-word;
  box-shadow: ${({ color }) => color} 10px 0px 50px -20px,
    ${({ color }) => color} -10px 30px 60px -30px;
`;

const StyledCardItemBackWrapper = styled(StyledCardItemWrapper)<{
  color: string;
}>`
  transform: rotateY(180deg);
  padding: 2rem 1rem;
  width: 100%;
  height: 100%;
  background-color: rgb(220, 220, 220);
  box-shadow: inset 10px 2px 80px 20px ${({ color }) => color};
`;

const StyledCard = styled.div<{
  active: boolean;
  width?: string;
  height?: string;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: ${({ width }) => {
    if (width) {
      return `${width}rem`;
    } else {
      return "19.5rem";
    }
  }};

  height: ${({ height }) => {
    if (height) {
      return `${height}rem`;
    } else {
      return "27.5rem";
    }
  }};

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
  opacity: 0.89;
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  letter-spacing: 1px;
  font-style: italic;
  padding: 0 1rem;
`;

const StyledSubTitleWrapper = styled.div`
  font-size: 0.78rem;
  padding: 0 1rem;
`;

const StyledContentWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: 0.8rem;
  letter-spacing: 0.5px;
  margin-top: 1rem;
  opacity: 0.9;
  overflow: scroll;
`;

const StyledHover = styled.div`
  position: absolute;
  opacity: 0;
  bottom: 0px;

  width: 100%;
  padding: 2rem 3rem;
  min-height: 12rem;

  color: ${({ theme }) => theme.color.white};
  transform: translateY(4rem);
  transition: all 0.9s;

  ${StyledCard}:hover & {
    opacity: 1;
    transform: none;
  }

  span {
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    font-size: 1.75rem;
  }

  p {
    font-weight: ${({ theme }) => theme.fontWeight.light};
    font-size: 0.85rem;
    letter-spacing: 1px;
  }
`;

const StyledContentBlur = styled.div`
  position: absolute;
  backdrop-filter: blur(0.3125rem);
  height: 18.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  z-index: 2;
  font-size: 0.9rem;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  letter-spacing: 0.5px;
  padding: 0 2rem;
`;

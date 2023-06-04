import SaveAltIcon from "@mui/icons-material/SaveAlt";
import html2canvas from "html2canvas";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
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
}: IProps) {
  const [click, setClick] = useState(false);
  const router = useRouter();

  function onClick() {
    setClick(!click);
  }

  const divRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (divRef.current && imgRef.current) {
      const defaultTransform = divRef.current.style.transform;
      const defaultStyle = divRef.current.style;
      defaultStyle.setProperty("transform", "none");
      defaultStyle.setProperty("transform-style", "none");

      defaultStyle.setProperty("", "none");

      const canvas = await html2canvas(divRef.current);

      defaultStyle.setProperty("transform-style", "none");

      const element = document.createElement("a");
      element.href = canvas.toDataURL("image/png");
      element.download = "MyPack.png";
      element.click();

      defaultStyle.transform = defaultTransform;
      defaultStyle.setProperty("transform-style", "preserve-3d");
    }
  };

  return (
    <div>
      <StyledCard
        width={width}
        height={height}
        onClick={onClick}
        active={click}
        ref={divRef}
      >
        <StyledFrame color={color}></StyledFrame>
        <StyledCardItemBackWrapper color={color}>
          <StyledTitleWrapper>{title}</StyledTitleWrapper>
          <StyledContentWrapper>{content}</StyledContentWrapper>
        </StyledCardItemBackWrapper>
        <StyledCardItemWrapper color={color}>
          <StyledImageWrapper ref={imgRef}>
            <StyledImage>
              <Image src={img} alt="card_img" fill objectFit="cover" />
            </StyledImage>
            <StyledHover>
              {subTitle && <p>{subTitle}</p>}
              <span> {title}</span>
              <p>{date}</p>
            </StyledHover>
          </StyledImageWrapper>
        </StyledCardItemWrapper>
      </StyledCard>
      {router.asPath == "/" ? (
        <StyledBtnWrapper>
          <button onClick={handleDownload}>
            <SaveAltIcon />
          </button>
        </StyledBtnWrapper>
      ) : (
        ""
      )}
    </div>
  );
}

export default Card;

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
  background-color: rgb(249, 249, 249);
  border-radius: 15px;
  overflow-wrap: break-word;
  box-shadow: ${({ color }) => color} 10px 0px 50px -20px,
    ${({ color }) => color} -10px 30px 60px -30px;
`;

const StyledCardItemBackWrapper = styled(StyledCardItemWrapper)<{
  color: string;
}>`
  transform: rotateY(180deg);
  padding: 2rem;

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
  z-index: 3;

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
  color: ${({ theme }) => theme.color.black};
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
`;

const StyledContentWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: 1rem;
  letter-spacing: 0.5px;
  margin-top: 1rem;
  opacity: 0.9;

  overflow: auto;
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
    color: ${({ theme }) => theme.color.white};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    font-size: 1.75rem;
  }

  p {
    font-weight: ${({ theme }) => theme.fontWeight.light};
    font-size: 0.85rem;
    letter-spacing: 1px;
  }
`;

const StyledBtnWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: fit-content;
  margin: 0.7rem 0;
  padding: 0.2rem 0.5rem 0 0.5rem;
  cursor: pointer;

  border-radius: 5px;
  backdrop-filter: blur(2px) brightness(120%);
  box-shadow: 0px 0px 40px 10px rgb(57, 58, 64, 0.1);

  button {
    all: unset;
  }
`;

import {
  animate,
  BoundingBox,
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";

import { RefObject, useEffect, useRef } from "react";
import Card from "src/components/Card";
import CardItem from "src/components/Card/CardItem";
import styled from "styled-components";
import { useHover } from "usehooks-ts";

interface IProps {
  drag?: boolean;
  dragEffect?: false | Partial<BoundingBox> | RefObject<Element> | undefined;

  title?: string;
  subTitle?: string;
  content?: string;
  date?: string;
  color?: string;
  img?: string;
  width?: string;
  height?: string;
}

function CardEffectItem({
  drag,
  dragEffect,
  title,
  subTitle,
  content,
  date,
  img,
  color,
  width,
  height,
}: IProps) {
  // 카드 요소
  const cardRef = useRef<HTMLDivElement | null>(null);

  // useMotionValue은 말그대로 motion의 value
  const mouseX = useMotionValue(
    typeof window !== "undefined" ? window.innerWidth / 2 : 0,
  );
  const mouseY = useMotionValue(
    typeof window !== "undefined" ? window.innerWidth / 2 : 0,
  );

  // 회전

  // 낮을수록 더 많이 움직임
  const effect = 15;

  const rotateX = useTransform<number, number>(mouseY, (newMouseY) => {
    if (!cardRef.current) {
      return 0;
    }
    // 현재의 width, height, x, y 좌표 등을 알아냄
    const currentInform = cardRef.current.getBoundingClientRect();

    const newRotateX = newMouseY - currentInform.top - currentInform.height / 2;

    return -newRotateX / effect;
  });

  const rotateY = useTransform(mouseX, (newMouseX) => {
    if (!cardRef.current?.focus) {
      return 0;
    }
    const currentInform = cardRef.current.getBoundingClientRect();
    const newRotateY = newMouseX - currentInform.left - currentInform.width / 2;
    return newRotateY / effect;
  });

  // 카드 빛
  // useTransform은 useMotionValue에 따라 다른 애니메이션을 보여주고 싶을 때 사용
  const cardMovement = useTransform<number, number>(
    [rotateX, rotateY],
    ([newRotateX, newRotateY]) => {
      const position: number = newRotateX + newRotateY;
      return position;
    },
  );

  const lightPosition = useTransform(cardMovement, [-5, 5], [-100, 200]);
  const lightOpacity = useTransform(
    lightPosition,
    [-250, 50, 250],
    [0, 0.05, 0],
  );

  // 광 색깔
  const lightGradient = useMotionTemplate`linear-gradient(
    55deg,
    transparent,
    rgba(211 211 211 / ${lightOpacity}) ${lightPosition}%,
    transparent)`;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      animate(mouseX, e.clientX);
      animate(mouseY, e.clientY);
    };

    if (!cardRef.current) {
      return;
    }

    cardRef.current.addEventListener("mousemove", handleMouseMove);

    return () => {
      cardRef.current?.removeEventListener("mouseleave", handleMouseMove);
    };
  }, []);

  const isHover = useHover(cardRef);

  const cardHover = () => {
    if (isHover) {
      return { rotateX, rotateY };
    }
  };

  return (
    <StyledWrapper>
      <StyledCardWrapper
        style={cardHover()}
        drag={drag}
        dragConstraints={dragEffect}
        dragSnapToOrigin={true}
      >
        <StyledCardEffect
          ref={cardRef}
          style={{ backgroundImage: lightGradient }}
        >
          {title && content && date && img && color && width && height ? (
            <Card
              isActive
              btn={false}
              blur={false}
              title={title}
              subTitle={subTitle}
              content={content}
              date={date}
              img={img}
              color={color}
              width={width}
              height={height}
            />
          ) : (
            <CardItem />
          )}
        </StyledCardEffect>
      </StyledCardWrapper>
    </StyledWrapper>
  );
}

export default CardEffectItem;

const StyledCardWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;

  transform-style: preserve-3d;
`;

const StyledWrapper = styled.div`
  // 값이 작을 수록 더 가까이 보임 (원근감)
  perspective: 63rem;
`;

const StyledCardEffect = styled(motion.div)`
  width: fit-content;
  height: fit-content;
  border-radius: 20px;
  backdrop-filter: blur(4px) brightness(120%);
  box-shadow: 0px 0px 40px 10px rgb(57, 58, 64, 0.1);
`;

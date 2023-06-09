import { motion } from "framer-motion";
import Card from "src/components/Card";
import SectionTitle from "src/components/Introduce/SectionTitle";
import { defaultFadeInScaleVariants } from "src/constants/motion";
import styled from "styled-components";

//TODO 디자인 요소 넣기
function CardIntroduction() {
  return (
    <>
      <SectionTitle
        title="Card"
        subTitle="MyPack에서 만날 수 있는 특별한 Card"
      />
      <StyledWrapper>
        <motion.div
          initial="initial"
          variants={defaultFadeInScaleVariants}
          animate="animate"
          exit="exit"
        >
          <Card
            btn={false}
            blur={false}
            width="22"
            height="30"
            title="MyPack"
            content="MyPack에서 자신만의 카드를 꾸며보세요! 🧑🏻‍💻👩🏻‍💻🐶🙂🐣💖🧡👍🏻👏🏻🏊🏻📢😎🖤🎉🕐😆💛카드의 제목, 내용, 색상등을 자신의 스타일대로 꾸밀 수 있어요. 🧑🏻‍💻👩🏻‍💻🐶🙂🐣💖🧡👍🏻👏🏻🏊🏻📢😎🖤🎉🕐😆💛다른 사람의 카드에 댓글도 남기며 서로 공유해요!🧑🏻‍💻👩🏻‍💻🐶🙂🐣💖🧡👍🏻👏🏻🏊🏻📢😎🖤🎉🕐😆💛저장버튼을 누르면 이미지로 카드를 저장할 수 있어요! 🧑🏻‍💻👩🏻‍💻🐶🙂🐣💖🧡👍🏻👏🏻🏊🏻📢😎🖤🎉🕐😆💛 !!! CZ의 시작은 MyPack !!! "
            date="2023.06.09"
            color="pink"
            img="https://github.com/My-Pack/MyPack-Web/assets/63100352/2d283ef6-85eb-424b-b2eb-6c4506f2fccf"
            isActive
          />
        </motion.div>
      </StyledWrapper>
    </>
  );
}

export default CardIntroduction;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StyledMotion = styled(motion.div)`
  z-index: 36;
  background-color: pink;
`;

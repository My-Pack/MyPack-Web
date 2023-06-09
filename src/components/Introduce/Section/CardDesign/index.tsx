import CardEffectItem from "src/components/Card/CardEffectItem";
import DragItem from "src/components/Common/DragItem";
import Img from "src/components/Common/DragItem/Img";
import Text from "src/components/Common/DragItem/Text";
import styled from "styled-components";

function CardDesign() {
  return (
    <>
      <StyledItemWrapper>
        <p>Let's Custom Your Card</p>
        <CardEffectItem
          width="22"
          height="30"
          title="MyPack"
          content="MyPack에서 자신만의 카드를 꾸며보세요! 🧑🏻‍💻👩🏻‍💻🐶🙂🐣💖🧡👍🏻👏🏻🏊🏻📢😎🖤🎉🕐😆💛카드의 제목, 내용, 색상등을 자신의 스타일대로 꾸밀 수 있어요. 🧑🏻‍💻👩🏻‍💻🐶🙂🐣💖🧡👍🏻👏🏻🏊🏻📢😎🖤🎉🕐😆💛다른 사람의 카드에 댓글도 남기며 서로 공유해요!🧑🏻‍💻👩🏻‍💻🐶🙂🐣💖🧡👍🏻👏🏻🏊🏻📢😎🖤🎉🕐😆💛저장버튼을 누르면 이미지로 카드를 저장할 수 있어요! 🧑🏻‍💻👩🏻‍💻🐶🙂🐣💖🧡👍🏻👏🏻🏊🏻📢😎🖤🎉🕐😆💛 !!! CZ의 시작은 MyPack !!! "
          date="2023.06.09"
          color="pink"
          img="https://github.com/My-Pack/MyPack-Web/assets/63100352/f4f95544-c306-45b1-ae26-51c34d1cda26"
          drag={true}
          dragEffect={{ bottom: 200 }}
        />
        <StyledPositionLeft>
          <DragItem
            label="Logo"
            text="MyPack"
            subText="일상을 카드로 만들다."
          />
        </StyledPositionLeft>

        <StyledPositionRight>
          <DragItem
            label="pick me up!"
            component={<Text text="Drag the elements!" />}
          />
        </StyledPositionRight>
        <StyledPositionThree>
          <DragItem
            label="Daily Image"
            component={<Img img="assets/images/cardDragItem1.jpeg" />}
          />
        </StyledPositionThree>
        <StyledPositionFour>
          <DragItem
            label="Images you want to share"
            component={<Img img="assets/images/cardDragItem2.png" />}
          />
        </StyledPositionFour>
        <StyledPositionFive>
          <DragItem label="Let's Do it!" subText="No.1 카드 공유 SNS" />
        </StyledPositionFive>
      </StyledItemWrapper>
    </>
  );
}

export default CardDesign;

const StyledPositionLeft = styled.div`
  position: absolute;
  top: 25rem;
  left: 10rem;
`;

const StyledPositionRight = styled.div`
  position: absolute;
  top: 42rem;
  right: 10rem;
`;

const StyledPositionThree = styled(StyledPositionRight)`
  top: 11rem;
  right: 15rem;
`;

const StyledPositionFour = styled(StyledPositionLeft)`
  top: 6rem;
  left: 2rem;
`;

const StyledPositionFive = styled(StyledPositionRight)`
  top: 2rem;
  right: 4rem;
`;

const StyledItemWrapper = styled.div`
  cursor: grab;
  p {
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
    letter-spacing: 0.4px;
    color: #a2a2a246;
  }
`;

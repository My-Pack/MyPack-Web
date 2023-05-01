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
        <CardEffectItem drag={true} dragEffect={{ bottom: 200 }} />
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

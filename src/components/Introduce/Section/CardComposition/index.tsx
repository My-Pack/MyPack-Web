import Card from "src/components/Introduce/Card";
import CardPack from "src/components/Introduce/Card/CardPack";
import Custom from "src/components/Introduce/Card/Custom";
import Record from "src/components/Introduce/Card/Record";
import Share from "src/components/Introduce/Card/Share";
import World from "src/components/Introduce/Card/World";
import SectionTitle from "src/components/Introduce/SectionTitle";
import styled from "styled-components";

function CardComposition() {
  return (
    <>
      <SectionTitle
        title="Powerfully simple."
        subTitle="간단하고 손쉽게 다양한 기능을 만들 수 있어요."
      />
      <StyledCardWrapper>
        <div className="firstSection">
          <div className="record">
            <Card
              title="Record"
              subTitle="내 일상을 카드에 저장해봐요. "
              component={<Record />}
            />
          </div>
          <div className="custom">
            <Card
              title="Custom"
              subTitle="원하는 대로 커스텀할 수 있어요."
              component={<Custom />}
            />
          </div>
        </div>

        <div className="secondSection">
          <div className="cardPack">
            <Card
              title="CardPack"
              subTitle="내가 만든 카드를 카드팩에 보관해요."
              component={<CardPack />}
            />
          </div>
          <div className="secondColumnSection">
            <div className="share">
              <Card
                title="Share"
                subTitle="친구에게 카드를 공유할 수 있어요."
                component={<Share />}
              />
            </div>
            <div className="worldwide">
              <Card
                title="Worldwide"
                subTitle="사람들의 카드를 구경해봐요."
                component={<World />}
              />
            </div>
          </div>
        </div>
      </StyledCardWrapper>
    </>
  );
}

export default CardComposition;

const StyledCardWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 3rem;

  .firstSection {
    display: flex;
    height: 30rem;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .record {
    overflow: hidden;
    width: 57rem;
    border-radius: ${({ theme }) => theme.borderRadius.uiCard};
    background: linear-gradient(
      225deg,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    background-color: #d3e0dc;
    color: ${({ theme }) => theme.color.grey500};
  }

  .custom {
    width: 26.4rem;
    border-radius: ${({ theme }) => theme.borderRadius.uiCard};
    background-color: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.grey500};
  }

  .secondSection {
    display: flex;
    gap: 1rem;
    height: 52rem;
    p {
      color: ${({ theme }) => theme.color.white};
      opacity: 0.83;
    }
  }

  .secondColumnSection {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .share {
    height: 25rem;
    background: linear-gradient(
      225deg,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0) 100%
    );

    border-radius: ${({ theme }) => theme.borderRadius.uiCard};
    background-color: #16c79a;
  }

  .worldwide {
    overflow: hidden;
    height: auto;
    border-radius: ${({ theme }) => theme.borderRadius.uiCard};
    background: linear-gradient(
      225deg,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    background-color: #19456b;
  }

  .cardPack {
    overflow: hidden;
    width: 40rem;
    height: auto;
    border-radius: ${({ theme }) => theme.borderRadius.uiCard};
    background-color: #e8d9ea;
  }
`;

import { Swiper, SwiperSlide } from "swiper/react";
import react, { useState } from "react";
import Card from "src/components/Card";
import CardEffectItem from "src/components/Card/CardEffectItem";
import styled from "styled-components";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { instance } from "src/libs/api/api";
// import { is } from "../../../.next/static/chunks/amp";

function CardList() {
  const [cardList, setCardList] = useState(false);
  instance.get("/api/v1/cards", { withCredentials: true }).then((res) => {
    console.log((res as any).content);
    setCardList((res as any).content);
  });

  return cardList ? (
    <StyeldCardList>
      <StyledSwiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        //간격
        slidesPerView={4}
        //보여질 컨텐츠 수
        centeredSlides={true}
        slideToClickedSlide={true}
        allowTouchMove={false}
        allowSlideNext={true}
        initialSlide={1}
        allowSlidePrev={true}
      >
        <StyledSwiperSlide>
          {({ isActive }) => (
            <Card
              btn={false}
              blur={true}
              width="18"
              height="24"
              title="한강간 날"
              subTitle="dsfasd"
              content="It is a long established fact t is a longt is a long established fact tht is a long established fact tht is a long established fact tht is a long established fact th established fact thht is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum"
              date="2023.06.03"
              color="pink"
              img="https://github.com/My-Pack/MyPack-Web/assets/63100352/958a401b-6560-4ef5-aae3-0c234eab44c2"
              isActive={isActive}
            />
          )}
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <CardEffectItem />
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <CardEffectItem />
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <CardEffectItem />
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <CardEffectItem />
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <CardEffectItem />
        </StyledSwiperSlide>
      </StyledSwiper>
    </StyeldCardList>
  ) : null;
}

export default CardList;

// const StyledCardListWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `; // 카드 리스트를 감싸는 div 추후 사용을 위해 주석처리

const StyeldCardList = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  padding-bottom: 3.125rem;
  overflow: hidden;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  width: fit-content;
  height: 39rem;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;

  &.swiper-slide-active {
    padding-top: 1.5rem;
    opacity: 1;
    z-index: 1;
    transform: scale(1.3);
  }
`;

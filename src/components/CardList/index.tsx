import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import styled from "styled-components";
import CardEffectItem from "../Card/CardEffectItem";

function CardList() {
  return (
    <StyeldCardList>
      <StyledSwiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        //간격
        slidesPerView={3}
        //보여질 컨텐츠 수
        centeredSlides={true}
        slideToClickedSlide={true}
        allowTouchMove={false}
        allowSlideNext={true}
        allowSlidePrev={true}
      >
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
        <StyledSwiperSlide>
          <CardEffectItem />
        </StyledSwiperSlide>
      </StyledSwiper>
    </StyeldCardList>
  );
}

export default CardList;

// const StyledCardListWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `; // 카드 리스트를 감싸는 div 추후 사용을 위해 주석처리

const StyeldCardList = styled.div`
  position: relative;
  padding: 3.125rem 0 6.25rem;
  height: 100vh;
  width: 100vw;
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  padding-top: 3.125rem;
  padding-bottom: 3.125rem;
  overflow: hidden;
`;
const StyledSwiperSlide = styled(SwiperSlide)`
  background-position: center;
  background-size: cover;
  width: fit-content;
  height: 37.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  &.swiper-slide-active {
    opacity: 1;
    z-index: 1;
    transform: scale(1.3);
  }
`;

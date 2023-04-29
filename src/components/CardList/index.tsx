import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import styled from "styled-components";

function CardList() {
  return (
    <StyeldCardList>
      <StyledSwiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        //간격
        slidesPerView={5}
        //보여질 컨텐츠 수
        centeredSlides={true}
        slideToClickedSlide={true}
        allowTouchMove={false}
        allowSlideNext={true}
        allowSlidePrev={true}
        // 화살표 유무
        //페이지네이션 표시 유무
        // scrollbar={{ draggable: false }}
        //드래그
      >
        <StyledSwiperSlide>
          <StyledCardEx />
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <StyledCardEx />
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <StyledCardEx />
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <StyledCardEx />
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <StyledCardEx />
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <StyledCardEx />
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <StyledCardEx />
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
  padding: 50px 0 100px;
  height: 100vh;
  width: 100vw;
`;

const StyledCardEx = styled.div`
  width: 200px;
  background-color: gray;
  border: 3px solid white;
  cursor: pointer;
  height: 400px;
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  overflow: hidden;
`;
const StyledSwiperSlide = styled(SwiperSlide)`
  background-position: center;
  background-size: cover;
  width: 500px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  &.swiper-slide-active {
    opacity: 1;
    z-index: 1;
    transform: scale(1.5);
  }
`;

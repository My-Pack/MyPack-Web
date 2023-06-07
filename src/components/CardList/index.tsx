import { Swiper, SwiperSlide } from "swiper/react";
import react, { useEffect, useState, Suspense } from "react";
import Card from "src/components/Card";
import CardEffectItem from "src/components/Card/CardEffectItem";
import styled from "styled-components";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { instance } from "src/libs/api/api";

// import { is } from "../../../.next/static/chunks/amp";
interface ICardWrappper {
  color: string;
  title: string;
  content: string;
  theme: string;
  imageUrl: string;
  id?: number;
  createdAt: string;
}

function CardList() {
  const [cardList, setCardList] = useState(null);
  useEffect(() => {
    instance.get("/api/v1/cards", { withCredentials: true }).then((res) => {
      console.log((res as any).content);
      setCardList((res as any).content);
    });
  }, []);

  return (
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
        {cardList &&
          (cardList as any).map((card: ICardWrappper) => (
            <StyledSwiperSlide>
              {({ isActive }) => (
                <Card
                  btn={false}
                  blur={true}
                  width="18"
                  height="24"
                  title={card.title}
                  subTitle=""
                  content={card.content}
                  date={card.createdAt.substring(0, 10)}
                  color={card.color}
                  img={card.imageUrl}
                  isActive={isActive}
                />
              )}
            </StyledSwiperSlide>
          ))}
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

import React from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
//Todo 프로필 작은 사진 적용 v
//Todo 좋아요 목록 컴포넌트 호출 훅 작성
//Todo 팔로우 버튼 클릭시 팔로우 되도록 함수 연결
//get SinglePageLikeList api 노션 작성 예정

const likeList = [
  //추후 서버 연결 후 제거 예정
  {
    id: 1,
    photo: "https://avatars.githubusercontent.com/u/50162076?v=4",
    name: "jae_gwan_",
  },
  {
    id: 2,
    photo: "https://avatars.githubusercontent.com/u/50162076?v=4",
    name: "jae_gwan_",
  },
  {
    id: 3,
    photo: "https://avatars.githubusercontent.com/u/50162076?v=4",
    name: "jae_gwan_",
  },
  {
    id: 4,
    photo: "https://avatars.githubusercontent.com/u/50162076?v=4",
    name: "jae_gwan_",
  },
  {
    id: 5,
    photo: "https://avatars.githubusercontent.com/u/50162076?v=4",
    name: "jae_gwan_",
  },
  {
    id: 6,
    photo: "https://avatars.githubusercontent.com/u/50162076?v=4",
    name: "jae_gwan_",
  },
  {
    id: 7,

    photo: "https://avatars.githubusercontent.com/u/50162076?v=4",
    name: "jae_gwan_",
  },
  {
    id: 8,
    photo: "https://avatars.githubusercontent.com/u/50162076?v=4",
    name: "jae_gwan_",
  },
  {
    id: 9,
    photo: "https://avatars.githubusercontent.com/u/50162076?v=4",
    name: "jae_gwan_",
  },
  {
    id: 10,
    photo: "https://avatars.githubusercontent.com/u/50162076?v=4",
    name: "jae_gwan_",
  },
  {
    id: 11,

    photo: "https://avatars.githubusercontent.com/u/50162076?v=4",
    name: "jae_gwan_",
  },
];

function onClickFollow() {
  //Todo 팔로우 버튼 클릭시 팔로우 되도록 함수 연결
}

function LikeListItem(item: ISingleCardLikeListItem) {
  return (
    <StyledLikeListItem>
      <div className="photoAndName">
        <div className="photo">
          <Image src={item.photo} fill alt="profile" />
        </div>
        <div className="name">{item.name}</div>
      </div>
      <div className="btnFollow">팔로우</div>
    </StyledLikeListItem>
  );
}

function SinglePageLikeList() {
  return (
    <StyledSinglePageLikeList>
      <StyledLikeList>
        <div className="titleBar">
          <div className="title">좋아요</div>
          <div className="close">
            <CloseIcon />
          </div>
        </div>
        <div className="list">
          {likeList.map((item) => (
            <LikeListItem
              key={item.id}
              id={item.id}
              photo={item.photo}
              name={item.name}
            />
          ))}
        </div>
      </StyledLikeList>
    </StyledSinglePageLikeList>
  );
}

export default SinglePageLikeList;

const StyledLikeListItem = styled.div`
  .photoAndName {
    display: flex;
    flex-direction: row;

    .photo {
      position: relative;
      margin: 0 1rem;
      background-color: white;
      border-radius: 50%;
      overflow: hidden;
      width: 2.5rem;
      height: 2.5rem;
    }
  }
  .btnFollow {
    width: 5rem;
    height: 2rem;
    border-radius: ${({ theme }) => theme.borderRadius.button};
    margin-right: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #438ee9;
    color: ${({ theme }) => theme.color.white};
    &:hover {
      background-color: #487cbc;
      color: ${({ theme }) => theme.color.grey50};
    }
  }
  display: flex;
  justify-content: space-between;

  width: 100%;
`;

const StyledLikeList = styled.div`
  .titleBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0.4rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.color.grey};
    .title {
      padding-left: 1.9rem; //이 방법 말고 정중앙에 배치할 수 있는 방법이 있나요?
      margin: 0 auto;
    }
    .close {
      margin-right: 0.4rem;
      cursor: pointer;
    }
  }
  .list {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0.5rem 0;
    gap: 1rem;
    overflow-y: scroll;
  }
  width: 25rem;
  height: 25rem;
  background-color: ${({ theme }) => theme.color.semiBlack};
  border-radius: ${({ theme }) => theme.borderRadius.uiCard};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const StyledSinglePageLikeList = styled.div`
  display: flex;
  position: fixed;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  z-index: 1001;
  backdrop-filter: blur(3px);
  background-color: rgba(0, 0, 0, 0.65);
`;

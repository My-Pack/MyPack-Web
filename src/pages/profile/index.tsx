import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import Loading from "src/components/Loading";
import Hamburger from "src/components/Nav/Hamburger";
import ProfileCardList from "src/components/Profile/CardList/ProfileCardList";
import Info from "src/components/Profile/Info";
import styled from "styled-components";

// Todo: Info 배경 레이아웃 적용
// Todo: Info 프로필 사진 적용
// Todo: 게시글 사진 및 내용 링크 적용

interface IProfile extends IInfo, IGetCardData {}

function Profile() {
  const [profile, setProfile] = useState<any>({
    name: "jae_gwan_",
    profileImage: "https://avatars.githubusercontent.com/u/50162076?v=4",
    backgroundImage: "https://avatars.githubusercontent.com/u/50162076?v=4",
    quantity: {
      card: 1,
      cardPack: 1,
      follower: 1,
      follow: 1,
    },
    content: [
      {
        id: 1,
        title: "제목이에요",
        content: "내용",
        cardImage: {
          s3Url: "https://avatars.githubusercontent.com/u/50162076?v=4",
        },
        theme: { img: "", color: "" },
        memberId: "1",
        createdAt: "2021-10-04T14:00:00.000Z",
        modifiedAt: "2021-10-04T14:00:00.000Z",
      },
      {
        id: 2,
        title: "제목이에요",
        content: "내용",
        cardImage: {
          s3Url: "https://avatars.githubusercontent.com/u/50162076?v=4",
        },
        theme: { img: "", color: "" },
        memberId: "1",
        createdAt: "2021-10-04T14:00:00.000Z",
        modifiedAt: "2021-10-04T14:00:00.000Z",
      },
      {
        id: 3,
        title: "제목이에요",
        content: "내용",
        cardImage: {
          s3Url: "https://avatars.githubusercontent.com/u/50162076?v=4",
        },
        theme: { img: "", color: "" },
        memberId: "1",
        createdAt: "2021-10-04T14:00:00.000Z",
        modifiedAt: "2021-10-04T14:00:00.000Z",
      },
      {
        id: 4,
        title: "제목이에요",
        content: "내용",
        cardImage: {
          s3Url: "https://avatars.githubusercontent.com/u/50162076?v=4",
        },
        theme: { img: "", color: "" },
        memberId: "1",
        createdAt: "2021-10-04T14:00:00.000Z",
        modifiedAt: "2021-10-04T14:00:00.000Z",
      },
      {
        id: 5,
        title: "제목이에요",
        content: "내용",
        cardImage: {
          s3Url: "https://avatars.githubusercontent.com/u/50162076?v=4",
        },
        theme: { img: "", color: "" },
        memberId: "1",
        createdAt: "2021-10-04T14:00:00.000Z",
        modifiedAt: "2021-10-04T14:00:00.000Z",
      },
      {
        id: 6,
        title: "제목이에요",
        content: "내용",
        cardImage: {
          s3Url: "https://avatars.githubusercontent.com/u/50162076?v=4",
        },
        theme: { img: "", color: "" },
        memberId: "1",
        createdAt: "2021-10-04T14:00:00.000Z",
        modifiedAt: "2021-10-04T14:00:00.000Z",
      },
    ],
  });
  // useEffect(() => {
  //   const getProfile = async () => {
  //     await axios
  //       .get("http://localhost:3000/myprofile", {
  //         withCredentials: true,
  //       })
  //       .then((res) => {
  //         setProfile(res.data);
  //         console.log(res.data);
  //       })
  //       .catch((err) => console.log(err));
  //   };
  //   setTimeout(() => {
  //     getProfile();
  //   }, 2000); // 목업서버를 위해 2초 지연
  // }, []);

  return profile ? (
    <StyledProfile>
      <div className="hamberger">
        <Hamburger />
      </div>
      <StyledBackgroundImage>
        <Image src={profile?.backgroundImage} fill alt="backgroundImage" />
      </StyledBackgroundImage>
      <Info
        profileImage={profile?.profileImage}
        name={profile?.name}
        quantity={profile?.quantity}
      />
      <ProfileCardList content={profile?.content} />
    </StyledProfile>
  ) : (
    <Loading />
  );
}

export default Profile;

const StyledBackgroundImage = styled.div`
  position: fixed;
  height: 18.75rem;
  width: 100%;
  z-index: 1;
  overflow: hidden;
`;

const StyledProfile = styled.div`
  .hamberger {
    position: fixed;
    top: 2rem;
    right: 2rem;
    z-index: 999;
  }
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

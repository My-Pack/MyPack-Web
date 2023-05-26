import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Hamburger from "src/components/Nav/Hamburger";
import Info from "src/components/Profile/Info";
import ProfileCardList from "src/components/Profile/CardList/ProfileCardList";
import Image from "next/image";

// Todo: Info 배경 레이아웃 적용
// Todo: Info 프로필 사진 적용
// Todo: 게시글 사진 및 내용 링크 적용

export interface IQuantity {
  card: number;
  cardPack: number;
  follower: number;
  follow: number;
}
interface IInfo {
  name: string;
  profileImage: string;
  backgroundImage: string;
  quantity: IQuantity;
}
interface IGetCardData {
  content: IGetCardDataContent[];
}

export interface IGetCardDataContent {
  id: number;
  title: string;
  content: string;
  cardImage: IImage;
  theme: ITheme;
  memberId: string;
  createdAt: string;
  modifiedAt: string;
}
export interface IImage {
  s3Url: string;
}
export interface ITheme {
  img: string;
  color: string;
}
interface IProfile extends IInfo, IGetCardData {}

function Profile() {
  const [profile, setProfile] = useState<IProfile | null>();
  useEffect(() => {
    const getProfile = async () => {
      await axios
        .get("http://localhost:3000/myprofile", {
          withCredentials: true,
        })
        .then((res) => {
          setProfile(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    };
    setTimeout(() => {
      getProfile();
    }, 2000); // 목업서버르 위해 2초 지연
  }, []);

  return (
    <StyledProfile>
      <div className="hamberger">
        <Hamburger />
      </div>
      <StyledBackgroundImage>
        <Image
          src={profile?.backgroundImage as string}
          fill
          alt="backgroundImage"
        />
      </StyledBackgroundImage>
      <Info
        profileImage={profile?.profileImage as string}
        name={profile?.name as string}
        quantity={profile?.quantity as IQuantity}
      />
      <ProfileCardList content={profile?.content as IGetCardDataContent[]} />
    </StyledProfile>
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

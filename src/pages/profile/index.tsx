import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Hamburger from "src/components/Nav/Hamburger";
import Info from "src/components/Profile/Info";
import ProfileCardList from "src/components/Profile/CardList/ProfileCardList";

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
interface IProfile extends IInfo {}

function Profile() {
  const [profile, setProfile] = useState<IProfile | null>();
  useEffect(() => {
    const getProfile = async () => {
      await axios
        .post("http://localhost:3000/myprofile", {
          withCredentials: true,
        })
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    };
    setTimeout(() => {
      getProfile();
    }, 2000); // 목업서버르 위해 2초 지연
  }, []);

  return (
    <StyledProfile>
      <StyledWrapper>
        <div className="hamberger">
          <Hamburger />
        </div>
        <Info
          name={profile?.name as string}
          quantity={profile?.quantity as IQuantity}
        />
        <ProfileCardList />
      </StyledWrapper>
    </StyledProfile>
  );
}

export default Profile;
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: calc(53.875rem+3.125rem);
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
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

import React from "react";
import styled from "styled-components";
import Hamburger from "src/components/Nav/Hamburger";
import Info from "src/components/Profile/Info";
import ProfileCardList from "src/components/Profile/CardList/ProfileCardList";

function Profile() {
  return (
    <StyledProfile>
      <StyledWrapper>
        <div className="hamberger">
          <Hamburger />
        </div>
        <Info />
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

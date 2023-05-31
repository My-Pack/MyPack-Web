import { Style } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import Image from "next/image";

function Edit() {
  return (
    <StyledEditWrapper>
      <StyledEdit>
        <StyledEditProfileImage>
          <div className="profilePhoto">
            <StyledImage
              src="https://avatars.githubusercontent.com/u/50162076?v=4"
              alt="profileImage"
              fill
            />
          </div>
        </StyledEditProfileImage>
        <StyledEditBackgroundImage>배경</StyledEditBackgroundImage>
      </StyledEdit>
    </StyledEditWrapper>
  );
}

export default Edit;

const StyledEditProfileImage = styled.div`
  .profilePhoto {
    width: 10.875rem;
    height: 10.875rem;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
  }
  width: 100%;
`;
const StyledImage = styled(Image)`
  object-fit: cover;
`;
const StyledEditBackgroundImage = styled.div`
  width: 100%;
`;

const StyledEdit = styled.div`
  position: relative;
  width: 57rem;
  height: fit-content;
`;

const StyledEditWrapper = styled.div`
  margin-top: 6rem;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

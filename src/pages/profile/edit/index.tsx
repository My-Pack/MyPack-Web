import { Style } from "@mui/icons-material";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Hamburger from "src/components/Nav/Hamburger";

function Edit() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const imageInput = useRef<any>();
  const onCickImageUpload = () => {
    imageInput.current.click();
  };
  return (
    <StyledEditWrapper>
      <StyledHamberger>
        <Hamburger />
      </StyledHamberger>
      <StyledHamberger />
      <StyledEdit>
        <h1>프로필 편집</h1>
        <StyledEditProfileImage>
          <div className="profilePhoto">
            <StyledImage
              src="https://avatars.githubusercontent.com/u/50162076?v=4"
              alt="profileImage"
              fill
            />
          </div>
          <input type="file" style={{ display: "none" }} ref={imageInput} />
          <div onClick={onCickImageUpload} className="upload">
            프로필 사진 업로드
          </div>
        </StyledEditProfileImage>
        <StyledEditBackgroundImage>
          <div className="backgroundPhoto">
            <StyledImage
              src="https://avatars.githubusercontent.com/u/50162076?v=4"
              alt="profileImage"
              fill
            />
          </div>
          <div className="upload">배경 사진 업로드</div>
        </StyledEditBackgroundImage>
        <div
          onClick={onCickImageUpload}
          className="upload"
          style={{ alignSelf: "center" }}
        >
          제출
        </div>
      </StyledEdit>
    </StyledEditWrapper>
  );
}

export default Edit;

const StyledHamberger = styled.div`
  position: fixed;
  top: 40px;
  right: 40px;
`;

const StyledEditProfileImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 3.125rem;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 3.125rem;
  width: 100%;
  .backgroundPhoto {
    height: 18.75rem;
    width: 57rem;
    z-index: 1;
    overflow: hidden;
    position: relative;
  }
`;

const StyledEdit = styled.div`
  position: relative;
  width: 57rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 3.125rem;
  height: fit-content;
  .upload {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    color: white;
    background-color: white;
    background-clip: text;
    -webkit-background-clip: text;
    &:hover {
      background-image: linear-gradient(
        to right,
        ${({ theme }) => theme.color.neonMint},
        ${({ theme }) => theme.color.neonPink}
      );
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }
  }
`;

const StyledEditWrapper = styled.div`
  h1 {
    align-self: flex-start;
  }

  margin-top: 3rem;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

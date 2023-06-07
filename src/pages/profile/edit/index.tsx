import { Style } from "@mui/icons-material";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Hamburger from "src/components/Nav/Hamburger";

const profileImageExample = {
  profile: {
    file: null,
    url: "https://avatars.githubusercontent.com/u/50162076?v=4",
  },
  background: {
    file: null,
    url: "https://avatars.githubusercontent.com/u/50162076?v=4",
  },
};

function Edit() {
  const [uploadFiles, setUploadFiles] = useState<IUploadFiles | null>(
    profileImageExample,
  );

  useEffect(() => {
    console.log(uploadFiles);
  }, [uploadFiles]);

  const handleFileChange = (event: any) => {
    const img = event.target.files[0];
    const copyUploadFiles = JSON.parse(JSON.stringify(uploadFiles));
    if (event.target.name === "profile") {
      copyUploadFiles.profile = {
        file: img as File,
        url: URL.createObjectURL(img),
      };
    } else if (event.target.name === "background") {
      copyUploadFiles.background = {
        file: img as File,
        url: URL.createObjectURL(img),
      };
    }
    setUploadFiles(copyUploadFiles);

    console.log(img);
    console.log(event.target.name);
  };
  const profileImageInput = useRef<any>();
  const backgroundImageInput = useRef<any>();

  const onClickProfileImageUpload = () => {
    profileImageInput.current.click();
  };
  const onClickBackgroundImageUpload = () => {
    backgroundImageInput.current.click();
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
              src={uploadFiles?.profile.url as string}
              alt="profileImage"
              fill
            />
          </div>
          <input
            type="file"
            style={{ display: "none" }}
            ref={profileImageInput}
            onChange={handleFileChange}
            name="profile"
          />
          <div onClick={onClickProfileImageUpload} className="upload">
            프로필 사진 업로드
          </div>
        </StyledEditProfileImage>
        <StyledEditBackgroundImage>
          <div className="backgroundPhoto">
            <StyledImage
              src={uploadFiles?.background.url as string}
              alt="profileImage"
              fill
            />
          </div>
          <input
            type="file"
            style={{ display: "none" }}
            ref={backgroundImageInput}
            onChange={handleFileChange}
            name="background"
          />
          <div className="upload" onClick={onClickBackgroundImageUpload}>
            배경 사진 업로드
          </div>
        </StyledEditBackgroundImage>
        <div className="upload" style={{ alignSelf: "center" }}>
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
  padding-bottom: 6.25rem;
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

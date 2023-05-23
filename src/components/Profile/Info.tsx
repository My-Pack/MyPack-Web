import React from "react";
import styled from "styled-components";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import { IQuantity } from "src/pages/profile/index";
import Image from "next/image";

function Info({
  name,
  quantity,
  profileImage,
}: {
  name: string;
  quantity: IQuantity;
  profileImage: string;
}) {
  return name ? (
    <StyledInfo>
      <div className="profilePhoto">
        <StyledImage src={profileImage} alt="profileImage" fill />
      </div>
      <div className="infos">
        <div className="nameAndProfileset">
          <div className="name">{name}</div>
          <div className="profileset">
            <SettingsRoundedIcon />
            프로필 설정
          </div>
        </div>
        <div className="quantity">
          <div>
            카드 <span>{quantity.card}</span>
          </div>
          <div>
            카드팩 <span>{quantity.card}</span>
          </div>
          <div>
            팔로워 <span>{quantity.card}</span>
          </div>
          <div>
            팔로우 <span>{quantity.card}</span>
          </div>
        </div>
      </div>
    </StyledInfo>
  ) : (
    <div>로딩중</div>
  );
}

const StyledImage = styled(Image)`
  object-fit: "cover";
`;

const StyledInfo = styled.div`
  z-index: 2;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #202124 100%);
  width: 100%;
  height: 18.75rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  gap: 3.125rem;
  position: relative;
  .profilePhoto {
    width: 10.875rem;
    height: 10.875rem;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
  }
  .infos {
    width: 43rem;
    height: 10.875rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 1rem;
    .quantity {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      div {
        font-weight: 300;
        span {
          font-weight: 500;
        }
      }
    }
    .nameAndProfileset {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      .name {
        font-weight: 500;
      }
      .profileset {
        background-color: ${({ theme }) => theme.color.white};
        width: fit-content;
        padding: 0.2rem 0.4rem;
        color: ${({ theme }) => theme.color.black};
        border-radius: 0.5rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        &:hover {
          background-color: ${({ theme }) => theme.color.grey50};
        }
      }
    }
  }
`;

export default Info;

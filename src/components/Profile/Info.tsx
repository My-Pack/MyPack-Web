import React from "react";
import styled from "styled-components";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

function Info() {
  return (
    <StyledInfo>
      <div className="profilePhoto"></div>
      <div className="infos">
        <div className="nameAndProfileset">
          <div className="name">hong_gildong_</div>
          <div className="profileset">
            <SettingsRoundedIcon />
            프로필 설정
          </div>
        </div>
        <div className="quantity">
          <div>
            카드 <span>0</span>
          </div>
          <div>
            카드팩 <span>0</span>
          </div>
          <div>
            팔로워 <span>0</span>
          </div>
          <div>
            팔로우 <span>0</span>
          </div>
        </div>
      </div>
    </StyledInfo>
  );
}

const StyledInfo = styled.div`
  width: 100%;
  height: 40vh;
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
    background-color: ${({ theme }) => theme.color.white};
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

import React from "react";
import styled from "styled-components";
import Image from "next/image";
import google_btn from "public/google_btn.png";
import appstore from "public/appstore.png";

function Login() {
  return (
    <StyledBackground>
      <StyledLoginWrapper>
        <h1>MyPack</h1>
        {/* 임시 로고  */}

        <Image src={google_btn} alt="google_login" width={200} />

        <Image src={appstore} alt="appstore" width={120} />
      </StyledLoginWrapper>
    </StyledBackground>
  );
}

export default Login;

const StyledBar = styled.div`
  height: 0.0625rem;
  width: 6.125rem;
  background-color: #b2b1b1;
`;

const StyledLoginWrapper = styled.div`
  display: flex;
  width: 18.75rem;
  height: 25rem;
  border-radius: ${({ theme }) => theme.borderRadius.uiCard};
  background-color: ${({ theme }) => theme.color.white};
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    //부득이하게 shadow는 px로 작성
    0 8px 16px -8px rgba(0, 0, 0, 0.3),
    0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  h1 {
    font-weight: 350;
  }
  .login {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #b2b1b1;
  }
  .or {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.625rem;
  }
`;

const StyledBackground = styled.div`
  @-webkit-keyframes AnimationName {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @-moz-keyframes AnimationName {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @-o-keyframes AnimationName {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @keyframes AnimationName {
    0% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 100% 100%;
    }
    100% {
      background-position: 0% 0%;
    }
  }
  background: linear-gradient(-45deg, #ec977d, #eb5891, #23a6d5, #23d5ab);
  height: 100vh;
  background-size: 400% 400%;
  display: flex;
  animation: AnimationName 15s ease infinite;
  justify-content: center;
  align-items: center;
`;

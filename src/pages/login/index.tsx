import React from "react";
import styled from "styled-components";
import Image from "next/image";
import appstore from "public/assets/images/appleLogin.png";
import account from "public/assets/images/accountClay.png";
import {
  GoogleLogin,
  GoogleOAuthProvider,
  CredentialResponse,
} from "@react-oauth/google";
import LoginBack from "src/components/LoginBack";
import { instance } from "src/libs/api/api";

//로그인 api

// refrash api
function onLoginSuccess(response: CredentialResponse) {
  instance
    .post("/api/v1/auth/google", response)
    .then((res: any) => {
      localStorage.setItem("accessToken", res.accessToken);
      localStorage.setItem("refreshToken", res.refreshToken);
    })
    .catch((err: any) => {
      console.log(err);
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
      //추후 모달창 개발 이후 모달창으로 변경
    });
}

function Login() {
  return (
    <div>
      <LoginBack />
      <StyledLoginWrapper>
        <h1>MyPack</h1>
        <StyledAccountCrop>
          <Image
            src={account}
            alt="account"
            width={300}
            style={{ position: "relative" }}
          />
        </StyledAccountCrop>
        {/* 임시 로고  */}
        <div className="login">
          <GoogleOAuthProvider
            clientId={process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string}
          >
            <GoogleLogin
              onSuccess={(response: CredentialResponse) =>
                onLoginSuccess(response)
              }
              onError={() => alert("Error ")}
            />
          </GoogleOAuthProvider>

          <Image src={appstore} alt="appstore" width={200} />
        </div>
      </StyledLoginWrapper>
    </div>
  );
}

export default Login;

const StyledAccountCrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 170px; // 자를 사이즈를 명시해준다.
  height: 170px;
  overflow: hidden;
`;

const StyledLoginWrapper = styled.div`
  display: flex;
  z-index: 1;
  transform: translate(-50%, -50%);

  position: fixed;
  left: 50%;
  top: 50%;
  width: 18.75rem;
  height: 25rem;
  border-radius: ${({ theme }) => theme.borderRadius.uiCard};
  background-color: rgba(0, 0, 0, 0.293);
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    //부득이하게 shadow는 px로 작성
    0 8px 16px -8px rgba(0, 0, 0, 0.3),
    0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  h1 {
    font-weight: 350;
    color: ${({ theme }) => theme.color.white};
  }
  .login {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #b2b1b1;
    gap: 0.3rem;
  }
  .or {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.625rem;
  }
`;

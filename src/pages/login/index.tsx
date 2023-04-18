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
                console.log(response)
              }
              onError={() => console.log("Error ")}
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

//  이전 배경 주석처리
// const StyledBackground = styled.div`
//   @-webkit-keyframes AnimationName {
//     0% {
//       background-position: 0% 50%;
//     }
//     50% {
//       background-position: 100% 50%;
//     }
//     100% {
//       background-position: 0% 50%;
//     }
//   }
//   @-moz-keyframes AnimationName {
//     0% {
//       background-position: 0% 50%;
//     }
//     50% {
//       background-position: 100% 50%;
//     }
//     100% {
//       background-position: 0% 50%;
//     }
//   }
//   @-o-keyframes AnimationName {
//     0% {
//       background-position: 0% 50%;
//     }
//     50% {
//       background-position: 100% 50%;
//     }
//     100% {
//       background-position: 0% 50%;
//     }
//   }
//   @keyframes AnimationName {
//     0% {
//       background-position: 0% 0%;
//     }
//     50% {
//       background-position: 100% 100%;
//     }
//     100% {
//       background-position: 0% 0%;
//     }
//   }
//   background: linear-gradient(-45deg, #ec977d, #eb5891, #23a6d5, #23d5ab);
//   height: 100vh;
//   background-size: 400% 400%;
//   display: flex;
//   animation: AnimationName 15s ease infinite;
//   justify-content: center;
//   align-items: center;
// `;

import { useEffect, useState } from "react";
import { CredentialResponse } from "@react-oauth/google";
import { instance } from "src/libs/api/api";

function onHandleGoogleLogin(response: CredentialResponse, route: any) {
  instance
    .post("/api/v1/auth/google", response)
    .then((res: any) => {
      localStorage.setItem("accessToken", res.accessToken);
      localStorage.setItem("refreshToken", res.refreshToken);
      route.push("/");
    })
    .catch((err: any) => {
      console.log(err);
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
      //추후 모달창 개발 이후 모달창으로 변경
    });
}

export default onHandleGoogleLogin;

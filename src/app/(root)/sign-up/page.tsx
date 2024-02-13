"use client";

import API from "@/api";
import Page from "@/components/Page";
import { useAuth } from "@/contexts/auth.context";
import { useMutation } from "@tanstack/react-query";
import { useRef } from "react";

function SignUpPage() {
  const { mutateAsync } = useMutation({ mutationFn: API.auth.signUp });
  const emailInputRef = useRef<HTMLInputElement>(null);
  const pwInputRef = useRef<HTMLInputElement>(null);
  const pw2InputRef = useRef<HTMLInputElement>(null);
  const { logIn } = useAuth();

  const handleClickSignUp = async () => {
    const emailValue = emailInputRef.current?.value;
    const pwValue = pwInputRef.current?.value;
    const pw2Value = pw2InputRef.current?.value;

    if (!emailValue || !pwValue || !pw2Value)
      return alert("모든 값을 입력해 주세요");

    if (pwValue !== pw2Value)
      return alert("비밀번호와 비밀번호 확인이 일치하지 않습니다");

    const isSuccess = await API.auth.signUp({
      email: emailValue,
      password: pwValue,
    });
    if (isSuccess) {
      logIn();
    } else {
      alert("회원가입에 실패하였습니다~!");
    }
  };

  return (
    <Page>
      <input ref={emailInputRef} placeholder="EMAIL" />
      <input ref={pwInputRef} placeholder="PW" />
      <input ref={pw2InputRef} placeholder="PW2" />

      <button onClick={handleClickSignUp}>회원가입</button>
    </Page>
  );
}

export default SignUpPage;

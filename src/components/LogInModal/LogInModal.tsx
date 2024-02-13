"use client";

import API from "@/api";
import { useAuth } from "@/contexts/auth.context";
import { setModal } from "@/redux/slices/utils.slice";
import { useAppDispatch } from "@/redux/store";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import Modal from "../Modal";

function LogInModal() {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutateAsync } = useMutation({ mutationFn: API.auth.logIn });
  const { logIn } = useAuth();

  const handleClickLogIn = async () => {
    const isSuccess = await mutateAsync({ email, password });
    if (isSuccess) {
      logIn();
      const action = setModal(null);
      dispatch(action);
    } else {
      alert("로그인에 실패하였습니다");
    }
  };

  return (
    <Modal title="로그인하기">
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border"
      />

      <button onClick={handleClickLogIn}>로그인하기</button>
    </Modal>
  );
}

export default LogInModal;

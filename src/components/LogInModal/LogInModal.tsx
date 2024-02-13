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
    await mutateAsync({ email, password });
    logIn();

    const action = setModal(null);
    dispatch(action);
  };

  return (
    <Modal title="로그인하기">
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border"
      />

      <button onClick={handleClickLogIn}>로그인하기</button>
    </Modal>
  );
}

export default LogInModal;

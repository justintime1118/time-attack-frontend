import { webClient } from ".";

async function signUp(dto: { email: string; password: string }) {
  const response = await webClient.post("/auth/sign-up", dto);
  const success = response.data.success;

  if (!success) throw new Error("회원가입에 실패하였습니다~!");
}

async function logIn(dto: { email: string; password: string }) {
  const response = await webClient.post("/auth/log-in", dto);
  const success = response.data.success;

  if (!success) throw new Error("로그인에 실패하였습니다~!");
}

const auth = {
  signUp,
  logIn,
};

export default auth;

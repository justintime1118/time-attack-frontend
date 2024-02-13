import { webClient } from ".";

async function signUp(dto: { email: string; password: string }) {
  const response = await webClient.post("/auth/sign-up", dto);
  const isSuccess = response.data.success;
  return isSuccess;
}

async function logIn(dto: { email: string; password: string }) {
  const response = await webClient.post("/auth/log-in", dto);
  const isSuccess = response.data.success;
  return isSuccess;
}

async function logOut() {
  const response = await webClient.delete("/auth/log-out");
  const isSuccess = response.data.success;
  return isSuccess;
}

const auth = {
  signUp,
  logIn,
  logOut,
};

export default auth;

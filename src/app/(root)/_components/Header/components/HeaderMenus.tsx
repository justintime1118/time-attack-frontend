"use client";

import LogInModal from "@/components/LogInModal";
import { useAuth } from "@/contexts/auth.context";
import { setModal } from "@/redux/slices/utils.slice";
import { useAppDispatch } from "@/redux/store";
import Link from "next/link";

function HeaderMenus() {
  const dispatch = useAppDispatch();
  const { isLoggedIn, logOut } = useAuth();

  const handleClickLogIn = () => {
    const action = setModal(<LogInModal />);
    dispatch(action);
  };

  const handleClickLogOut = () => {};

  return (
    <div className="ml-auto flex items-center gap-x-4">
      {isLoggedIn ? (
        <button
          className="text-m px-5 py-2 rounded font-semibold "
          onClick={handleClickLogOut}
        >
          로그아웃
        </button>
      ) : (
        <>
          <Link
            href="/sign-up"
            className="text-m px-5 py-2 rounded font-semibold "
          >
            회원가입
          </Link>
          <button
            className="text-m  px-5 py-2 rounded font-semibold"
            onClick={handleClickLogIn}
          >
            로그인
          </button>
        </>
      )}
    </div>
  );
}

export default HeaderMenus;

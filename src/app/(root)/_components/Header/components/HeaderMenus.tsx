"use client";

import Link from "next/link";

function HeaderMenus() {
  const handleClickLogIn = () => {};

  const handleClickLogOut = () => {};

  return (
    <div className="ml-auto flex items-center gap-x-4">
      {
        /*isLoggedIn*/ false ? (
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
        )
      }
    </div>
  );
}

export default HeaderMenus;

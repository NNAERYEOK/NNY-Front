import React from "react";

import { useAppDispatch, useAppSelector } from "../store"; // index
import { initUser } from "../store/features/userSlice";
import { persistor } from "../";

import { setUser } from "../store/features/userSlice";

const Authpage = () => {
  const { id, username, email, eye } = useAppSelector(state => state.user);

  const dispatch = useAppDispatch();
  // 기본값
  //dispatch(initUser());

  const setUserInfo = () => {
    dispatch(
      setUser({
        id: 11,
        username: "마루",
        email: "maru@gmail.com",
        eye: 1,
      }),
    );
  };

  // 로그아웃에 사용
  const purge = async () => {
    dispatch(initUser());
    location.reload();
    await persistor.purge(); // persistStore의 데이터 전부 날림
  };

  return (
    <div>
      <h3>
        {id}, {username},{email},{eye}
      </h3>
      <button onClick={() => setUserInfo()}>변경</button>
      <button onClick={async () => purge()}>로그아웃</button>
    </div>
  );
};

export default Authpage;

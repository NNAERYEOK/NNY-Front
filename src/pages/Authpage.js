import React from "react";

import { useAppDispatch, useAppSelector } from "../store"; // index
import { initUser } from "../store/features/userSlice";
import { persistor } from "../";

import { setUser } from "../store/features/userSlice";

const Authpage = () => {
  const { id, username, eyes, password } = useAppSelector(state => state.user);

  const dispatch = useAppDispatch();

  const setUserInfo = () => {
    dispatch(
      setUser({
        id: 11,
        username: "마루",
        password: "1234",
        eyes: 0,
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
        {id}, {username},{eyes},{password}
      </h3>
      <button onClick={() => setUserInfo()}>변경</button>
      <button onClick={async () => purge()}>로그아웃</button>
    </div>
  );
};

export default Authpage;

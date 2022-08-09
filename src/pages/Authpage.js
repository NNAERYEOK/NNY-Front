import React from "react";

import { useAppDispatch, useAppSelector } from "../store"; // index
import { initUser } from "../store/features/userSlice";
import { persistor } from "../";

import { setUser } from "../store/features/userSlice";

const Authpage = () => {
  const { nickname, email } = useAppSelector(state => state.user);

  console.log(nickname, email);

  const dispatch = useAppDispatch();
  // 기본값
  //dispatch(initUser());

  const setUserInfo = () => {
    dispatch(setUser({ nickname: "이름", email: "이메일" }));
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
        이름과 이메일 : {nickname}, {email}
      </h3>
      <button onClick={() => setUserInfo()}>변경</button>
      <button onClick={async () => purge()}>로그아웃</button>
    </div>
  );
};

export default Authpage;

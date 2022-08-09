import http from "../http";

const UserService = {
  // 유저 정보 조회 (기본 정보, 현재 eye 개수)
  getUser: user => http.get("~/user"),

  // 유저 경고 기록 조회
  getWarningHistory: user => http.get("~/warning/user"),

  // eye 수 업데이트 (조회, 공유, 구매)
  patchEye: (user, eye) => http.patch("~", { user: user, user: user }),

  // 유저 경고 주기
  postWarning: (user, station) =>
    http.post("~", { user: user, station: station }),

  // 회원 정보 수정
  patchUserInfo: (user, id, password, nickname) =>
    http.patch("~/user", {
      user: user,
      id: id,
      password: password,
      nickname: nickname,
    }),
};

export default UserService;

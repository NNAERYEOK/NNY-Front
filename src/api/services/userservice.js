import http from "../http";

const UserService = {
  // 유저 정보 조회 (기본 정보, 현재 eye 개수)
  getUser: user => http.get("~/user"),

  // 유저 경고 기록 조회
  getWarningHistory: user => http.get("/nny/warning/<int:pk>"),

  // eye 수 업데이트 (조회, 공유, 구매)
  patchEye: (user, eye) => http.patch("~", { user: user }),

  // 사용한 eye
  // 충전한 eye

  // 유저 경고 주기
  postWarning: (user, station) =>
    http.post("~", { user: user, station: station }),

  // 비번 수정
  patchUserInfo: password =>
    http.patch("/nny/password_change", {
      password: password,
    }),

  // 로그인 api /nny/login/

  // 회원가입 api
  postUser: (id, password) =>
    http.post("/nny/signup/", {
      id: id,
      password: password,
      username: username,
    }),
};

export default UserService;

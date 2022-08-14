import http from "../http";

const UserService = {
  // 로그인
  getUser: (email, password) =>
    http.get("/nny/login/", {
      email: email,
      password: password,
    }),

  // 회원가입 api
  postUser: (id, password) =>
    http.post("/nny/signup/", {
      id: id,
      password: password,
      username: username,
    }),
  // 회원가입 : 이름
  patchUserName: username =>
    http.patch("/nny/signup/", {
      username: username,
    }),

  // 유저 경고 주기
  postWarning: (id, created_at, station) =>
    http.post("/nny/warning/", {
      user: id,
      created_at: created_at,
      station: station,
    }),

  //

  // 유저 경고 기록 조회
  getWarningHistory: user => http.get("/nny/warning/<int:pk>"),

  // eye 수 업데이트 (조회, 공유, 구매)
  patchEye: (user, eye) => http.patch("~", { user: user }),

  // 사용한 eye
  // 충전한 eye

  // 비번 수정
  patchUserInfo: password =>
    http.patch("/nny/password_change", {
      password: password,
    }),

  //
};

export default UserService;

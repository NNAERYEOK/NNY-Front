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

  // eye 사용 히스토리 업뎃
  postUsedEye: (id, created_at, amount) =>
    http.post("/nny/usedeye/", {
      user: id,
      created_at: created_at,
      amount: amount,
    }),
  // eye 충전 히스토리 업뎃
  postAddEye: (id, created_at, amount) =>
    http.post("/nny/eye/", {
      user: id,
      created_at: created_at,
      amount: amount,
    }),

  // 현재 eye 개수 조회
  getCurrentEye: id =>
    http.post("???", {
      user: id,
    }),

  // 현재 eye 개수 업뎃 (임시)
  patchCurrentEye: (id, eye) =>
    http.post("???", {
      user: id,
      eye: eye,
    }),

  // 유저 경고 기록 조회
  getWarningHistory: () => http.get("/nny/warning/"),

  // ************ 이 아래는 작업 안됨 **********

  // 비번 수정
  patchUserInfo: password =>
    http.patch("/nny/password_change", {
      password: password,
    }),

  //
};

export default UserService;

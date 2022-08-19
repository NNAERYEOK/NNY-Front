import http from "../http";

const UserService = {
  // 프로필 조회
  getProfile: () => http.get("/nny/profile/"),

  // 로그인
  getUser: (email, password) =>
    http.post("/nny/login/", {
      email: email,
      password: password,
    }),

  // 로그아웃
  getLogout: () => http.get("/nny/logout/"),

  // 회원가입 api
  postUser: (email, password) =>
    http.post("/nny/signup/", {
      email: email,
      password: password,
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
    http.patch("/nny/eye/", {
      user: id,
      created_at: created_at,
      amount: amount,
    }),

  // 현재 eye 개수 업뎃
  patchCurrentEye: eye =>
    http.patch("/nny/profile/", {
      eyes: eye,
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
